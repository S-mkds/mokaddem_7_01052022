<script>
import axios from 'axios';
import LogoutNav from '../components/layout/LogoutNav.vue';
import moment from "moment";
import fr from 'moment/dist/locale/fr';



export default {
    name: "Comment",
    components: { LogoutNav },
    data() {
        return {
            admin: false,

            moment: moment,
            createAt: "",

            likes: "",
            showLike: false,

            successMsg: false,
            errorMsg: false,
            deleteMsg: false,
            editMsg: false,

            pseudo: "",
            token: "",

            posts: [],
            comments: [],

            showedit: false,
            editpost: "",

            newposts: {
                userId: "",
                commentary: "",
            },
            commentposts: {
                userId: "",
                commentary: "",
                postId: "",
            },
        };
    },

    methods: {

        // CREATION DU POST
        createPost() {
            const data = new FormData();
            data.append("post", JSON.stringify(this.newposts));
            data.append("image", document.getElementById("postImage").files[0]);
            axios.post("http://localhost:3000/api/posts", data, {
                headers: {
                    authorization: "Bearer " + this.token
                }
            })
                .then(response => {
                    // console.log(response.data);
                    if (!response.data.error) {
                        this.getPosts();
                        this.successMsg = true
                        setTimeout(() => this.successMsg = false, 2000);
                    }
                })
                .catch(err => {
                    this.errorMsg = true
                    setTimeout(() => this.errorMsg = false, 2000);
                });
        },

        // Récuperer les MESSAGES
        getPosts() {
            axios.get("http://localhost:3000/api/posts/", {
                headers: {
                    authorization: "Bearer " + this.token
                }
            })
                .then(response => {
                    this.posts = response.data
                    this.posts.forEach(async (post) => {
                        await axios.get(`http://localhost:3000/api/auth/${post.userId}`, {
                            headers: {
                                authorization: "Bearer " + this.token
                            }
                        })
                            .then(response2 => {
                                post.user = response2.data;
                                // console.log(response2.data)
                            })
                        await axios.get(`http://localhost:3000/api/posts/${post._id}/comments`, {
                            headers: {
                                authorization: "Bearer " + this.token
                            }
                        })
                            .then(response3 => {
                                post.comments = response3.data
                                post.comments.forEach(async (comment) => {
                                    await axios.get(`http://localhost:3000/api/auth/${comment.userId}`, {
                                        headers: {
                                            authorization: "Bearer " + this.token
                                        }
                                    })
                                        .then(response4 => {
                                            comment.user = response4.data;
                                        })
                                })
                            })
                    });
                })
                .catch(err => {
                    alert("Une erreur est survenue lors la réception des données ! ");
                });
        },

        deleteOneUser(user) {
            if (this.admin) {
                axios.delete(`http://localhost:3000/api/auth/${user._id}`, {
                    headers: {
                        authorization: "Bearer " + this.token
                    }
                })
                    .then((res) => {
                        console.log(res)
                        this.getPosts();
                        alert("Utilisateur banni !");
                    }
                    )

                    .catch((error) => {
                        console.log({ error });
                    });
            }
            else {
                alert("Vous n'êtes pas l'administrateur")
            }
        },

        getOneUser(post) {
            if (this.admin) {
                axios.get(`http://localhost:3000/api/auth/${post.userId}`, {
                    headers: {
                        authorization: "Bearer " + this.token
                    }
                })
                    .then((res) => {
                        console.log(res)
                        this.getPosts();
                        alert("Utilisateur banni !");
                    }
                    )

                    .catch((error) => {
                        console.log({ error });
                    });
            }
            else {
                alert("Vous n'êtes pas l'administrateur")
            }
        },


        // CREATION DES REPONSES COMMENTAIRES
        createComment(post) {
            this.commentposts.postId = post._id;
            axios.post("http://localhost:3000/api/comment", this.commentposts, {
                headers: {
                    authorization: "Bearer " + this.token
                }
            })
                .then(response => {
                    if (!response.data.error) {
                        this.successMsg = true
                        setTimeout(() => this.successMsg = false, 2000);
                        this.getPosts();
                    }
                })
                .catch(err => {
                    this.errorMsg = true
                    setTimeout(() => this.errorMsg = false, 2000);
                });
        },


        // SUPPRIMER LE POST OU COMMENTAIRE OU L'UTILISATEUR
        deletePost(post) {
            if (this.admin || this.userId == post.userId) {
                axios.delete(`http://localhost:3000/api/posts/${post._id}`, {
                    headers: {
                        authorization: "Bearer " + this.token
                    }
                })
                    .then(() => {
                        this.getPosts();
                        this.deleteMsg = true
                        setTimeout(() => this.deleteMsg = false, 2000);
                    }
                    )
                    .catch((error) => {
                        console.log({ error });
                    });
            }
            else {
                alert("Vous n'êtes pas l'auteur de ce commentaire")
            }
        },

        deleteComment(comment) {
            if (this.admin || this.userId == comment.userId) {
                axios.delete(`http://localhost:3000/api/posts/${comment._id}/comments`, {
                    headers: {
                        authorization: "Bearer " + this.token
                    }
                })
                    .then(() => {
                        this.getPosts();
                        this.deleteMsg = true
                        setTimeout(() => this.deleteMsg = false, 2000);
                    }
                    )
                    .catch((error) => {
                        console.log({ error });
                    });
            }
            else {
                alert("Vous n'êtes pas l'auteur de ce commentaire !")
            }
        },

        // MODIFIER LE POST
        editPost(post) {
            if (this.admin || this.userId == post.userId) {
                post.commentary = this.editpost;
                axios.put(`http://localhost:3000/api/posts/${post._id}`, post, {
                    headers: {
                        authorization: "Bearer " + this.token
                    }
                })
                    .then(() => {
                        this.getPosts();
                        this.showedit = false
                        this.editMsg = true
                        setTimeout(() => this.editMsg = false, 2000);
                    })
                    .catch((error) => {
                        console.log({ error });
                    });
            }
            else {
                alert("Vous n'êtes pas l'auteur de ce commentaire !");
            }
        },

        // LIKER LE POST
        like(post) {

            axios.post(`http://localhost:3000/api/posts/${post._id}/like`, { userId: this.userId, like: +1, }, {
                headers: {
                    authorization: "Bearer " + this.token
                }
            })
                .then(res => {
                    this.getPosts();
                    this.showLike = true;
                })
                .catch(err => {
                    alert("echec de réception");
                    console.log(err)
                });
        },


        Unlike(post) {
            axios.post(`http://localhost:3000/api/posts/${post._id}/like`, { userId: this.userId, like: 0 }, {
                headers: {
                    authorization: "Bearer " + this.token
                }
            })
                .then(res => {
                    this.getPosts();
                    this.showLike = false;
                })
                .catch(err => {
                    alert("echec de réception");
                    console.log(err)
                });
        },
    },

    // MONTER LES ELEMENTS SI L'UTILISATEUR EST CONNECTEE
    mounted() {
        moment.locale('fr', fr);
        const userLogin = JSON.parse(localStorage.getItem("userLogin"));
        if (userLogin) {
            this.admin = userLogin.admin
            this.newposts.userId = userLogin.userId;
            this.commentposts.userId = userLogin.userId;
            this.token = userLogin.token;
            this.userId = userLogin.userId;
            this.getPosts();
        }
        else {
            this.$router.push("/login");
        }
    },
}

</script>

<template>
    <LogoutNav></LogoutNav>

    <!-- Valid span -->
    <div v-if="successMsg" class=" align-card form-wall d-flex dn-success" id="successMsg">
        <div id="span200">
            <img src="..\assets\logo/confirm-svgrepo-com.svg" alt="delete" width="40" height="30">
            <span class="valid-span">Message bien enregistré !</span>
        </div>
    </div>

    <!-- Error span -->
    <div v-if="errorMsg" class=" align-card form-wall d-flex mt-2" id="errorMsg">
        <div id="span400">
            <img class="" src="..\assets\logo/delete-stop-post.svg" alt="delete" width="40" height="30">
            <span class="error-span">Erreur lors de la publication !</span>
        </div>
    </div>

    <!-- Delete span -->
    <div v-if="deleteMsg" class=" align-card form-wall d-flex dn-success" id="successMsg">
        <div id="span200">
            <img class="" src="..\assets\logo/confirm-svgrepo-com.svg" alt="delete" width="40" height="30">
            <span class="valid-span">Le commentaire a bien été supprimé ! </span>
        </div>
    </div>

    <!-- Edit span -->
    <div v-if="editMsg" class=" align-card form-wall d-flex dn-success" id="successMsg">
        <div id="span200">
            <img class="" src="..\assets\logo/confirm-svgrepo-com.svg" alt="delete" width="40" height="30">
            <span class="valid-span">Votre commentaire a bien été modifié ! </span>
        </div>
    </div>

    <!-- Create NEW POST commentary her -->
    <div class=" align-card form-wall d-flex mt-2">
        <div class="card mb-3 d-flex p-2 ">
            <form action="#" method="post" @submit.prevent="createPost">
                <textarea class="size-textarea" v-model="newposts.commentary" name="textarea"
                    aria-label="nouveau commentaire" maxlength="350" rows="2" cols="60"
                    placeholder=" Écrire ici votre nouveau commentaire" data-v-133ed8df=""></textarea>
                <br />
                <input class="  btn btn-primary" aria-label="Post d'un commentaire" type="submit" name="submitInfo"
                    value="Poster une nouvelle publication" />
                <div class="form-group">
                    <input type="file" accept="image/png, image/jpeg,image/gif" class="form-control-file"
                        aria-label="Publication une image" id="postImage" />
                </div>
                <hr class="dropdown-divider" />
            </form>
        </div>
    </div>

    <!--  POST HER  -->
    <div class="align-card form-wall m-1 new-wall" :post="post" v-for="post in posts.slice().reverse()"
        v-bind:value="posts">
        <div class="card mb-3 d-flex p-2 ">
            <div class="card-header">
                <div class="d-flex gap-1">
                    <div class="d-flex flex-column ">
                        <p id="name-commentary" v-if="post.user">{{ post.user.pseudo }}
                            <!-- <button v-if="admin" class="btn p-1" id="btn-color" type="submit"
                                @click.prevent="deleteOneUser(post.user)">
                                <img src="..\assets\logo/delete-stop-post.svg" alt="delete" width="35" height="20">
                            </button> -->
                        </p>
                    </div>
                </div>
            </div>

            <!-- Card her -->
            <div class="card-body">
                <div class="d-block p-2">
                    <p class="card-text none-bold">{{ post.commentary }}</p>
                </div>
                <div class="div-img pt-3">
                    <img v-if="post.imageUrl" :src="post.imageUrl" class="card-img-top image-size" max-width="55%"
                        alt="post.imageUrl">
                </div>

                <!-- EDIT COMMENT HER -->
                <form v-if="showedit" @submit.prevent="editPost(post)">
                    <div class="d-flex p-1 gap-2 mt-1 mb-3">
                        <textarea class="size-textarea" v-model="editpost" name="textarea" aria-label="Modifier le post"
                            maxlength="350" rows="2" cols="90" placeholder="Modifier votre message"
                            data-v-133ed8df=""></textarea>
                        <input class="btn btn-primary ms-auto" type="submit" name="submitInfo" value="Modifier"
                            aria-label="submit post">
                        <input v-on:click="showedit = false" class="btn btn-secondary ms-auto" type="button"
                            name="backedit" value="Fermer" aria-label="showeditfalse">
                    </div>
                    <!-- <input type="file" accept="image/png, image/jpeg" class="form-control-file mb-3"
                        aria-label="Publication une image" id="postImage" /> -->
                </form>

                <!-- SET TIME HER -->
                <p class="d-flex justify-content-end card-text border-date"><small class="fst-italic"> {{
                        moment(post.createdAt).fromNow()
                }}
                    </small></p>

                <!-- LIKE +1 HER -->
                <div class="d-flex justify-content-evenly">
                    <div>
                        <button class="btn font-bold" v-if="!post.usersLiked.find(_userId => _userId == userId)"
                            v-on:click.prevent="like(post)" id=" btn-color">
                            <img id="svglike" src="..\assets\logo/heart-empty.svg" alt="edit" width="40" height="30">
                            {{ post.likes }}
                        </button>

                        <!-- LIKE -1 HER -->
                        <button class="btn font-bold" v-if="post.usersLiked.find(_userId => _userId == userId)"
                            v-on:click.prevent="Unlike(post)" id="btn-color">
                            <img id="svglike" src="..\assets\logo/full-heart.svg" alt="edit" width="40" height="30">
                            {{ post.likes }}
                        </button>
                    </div>

                    <!-- MODIFY HER -->
                    <div>
                        <button class="btn" id="btn-color" v-if="admin || userId == post.userId"
                            @click.prevent="showedit = true, editpost = post.commentary">
                            <img src="..\assets\logo/edit-svgrepo.svg" alt="edit" width="40" height="30"> </button>
                    </div>
                    <!-- DELETE HER -->
                    <div>
                        <button class="btn " id="btn-color" type="submit" v-if="admin || userId == post.userId"
                            @click.prevent="deletePost(post)">
                            <img src="..\assets\logo/remove-delete-svgrepo-com.svg" alt="delete" width="40" height="30">
                        </button>
                    </div>

                </div>
            </div>


            <!--  RESPONSE COMMENT HER  -->
            <div class="d-flex gap-1 p-1 fs- text mb-2" id="border-res" :comment="comment"
                v-for="comment in post.comments" v-bind:value="posts">
                <div class="d-flex flex-column gap-1 p-1 comment  " id="border-res">
                    <p class="font-weight-bold pseudo-user p-2" id="name-response" v-if="comment.user">{{
                            comment.user.pseudo
                    }}
                        <!-- <button v-if="admin" class="btn " id="btn-color" type="submit" @click="deleteComment(comment)">
                            <img src="..\assets\logo/delete-stop-post.svg" alt="delete" width="35" height="20">
                        </button> -->
                    </p>
                    <p class="p-1">{{ comment.commentary }} </p>
                </div>

                <!-- DELETE COMMENT HER -->
                <div class="d-flex justify-content-start-end">
                    <button class="btn " id="btn-color" type="submit" v-if="admin || userId == comment.userId"
                        @click="deleteComment(comment)">
                        <img src="..\assets\logo/remove-delete-svgrepo-com.svg" alt="delete" width="25" height="35">
                    </button>
                </div>
            </div>
            <form action="#" method="post" @submit.prevent="createComment(post)">
                <div class="d-flex p-1 gap-1 mt-1">
                    <textarea class="size-textarea" v-model="commentposts.commentary" name="textarea"
                        aria-label="Poster un commentaire" maxlength="100" rows="2" cols="90" id="floatingTextarea"
                        placeholder=" Écrire un commentaire" data-v-133ed8df=""></textarea>
                    <input class="btn btn-primary ms-auto" type="submit" name="submitInfo" value="Envoyer"
                        aria-label="submit post">
                </div>
            </form>
        </div>
    </div>
</template>


<style scoped>
p {
    white-space: pre-wrap !important;
    max-width: 45rem !important;
}

.align-card {
    margin: auto !important;
    max-width: 60rem !important;
}

.border-date {
    border-top: 1px solid rgba(0, 0, 0, 0.267) !important;
}


.none-bold {
    font-weight: normal !important;
}

.card-header {
    border-bottom: 1px solid rgba(0, 0, 0, 0.267) !important;
}

.pseudo-user {
    border-bottom: 1px solid rgba(0, 0, 0, 0.267);
}

.size-textarea {
    display: block;
    width: -webkit-fill-available !important;
    width: -moz-available !important;
    resize: vertical;
    max-height: 100px;
    min-height: 50px;
    white-space: pre-wrap !important;
}

.div-img {
    max-width: 600px;
    max-height: 800px;
    margin: auto;
    display: flex;
    margin-bottom: 2rem;
    vertical-align: middle;
}

.btn {
    color: white !important;
}


#profile {
    width: 25px;
    height: 25px;
    border-radius: 50%;
}

#border-res {
    border-radius: 5px 5px;
    background-color: #31323c;
}

#profile {
    width: 25px;
    height: 25px;
    border-radius: 50%;
}

#span200 {
    background: rgb(7 93 7 / 77%);
    padding: 1rem;
    border-radius: 20px 20px;
    position: fixed;
    z-index: 1;
}

#span400 {
    background: rgb(130 12 12 / 82%);
    padding: 1rem;
    border-radius: 20px 20px;
    position: fixed;
    z-index: 1;
}

.valid-span {
    color: white;
    font-weight: bold;
}

.error-span {
    color: white !important;
    font-weight: bold;
    background: none;
}

dn-success {

    animation-name: fadeOut;
    animation-duration: .5s;
}

@keyframes fadeOut {
    0% {
        opacity: .5
    }

    100% {
        opacity: 0;
    }
}

.comment {
    background-color: #4E5166;
    border-radius: 5px;
    width: 100%;

}

#name-response,
#name-commentary {
    font-weight: bold;
}

.form-wall {
    padding-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: black;
}

#profile {
    width: 25px;
    height: 25px;
    border-radius: 50%;
}

.card-body>.d-flex {

    padding: 0.3rem;
}

.card {
    background-color: #4E5166 !important;
}



.d-flex p:nth-child(1) {
    font-weight: bold;
}

#btn-primary {
    color: blue !important;
}
</style>