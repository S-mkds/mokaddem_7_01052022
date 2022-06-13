<script>
import axios from 'axios';
import LogoutNav from '../components/layout/LogoutNav.vue';
import moment from "moment";
export default {
    name: "Comment",
    components: { LogoutNav },
    data() {
        return {

            moment: moment,
            createAt: "",
            likes: [],
            pseudo: "",
            token: "",
            posts: [],
            comments: [],
            showedit: false,

            newposts: {
                userId: "",
                commentary: "",
                imageUrl: "" || null,
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
            axios.post("http://localhost:3000/api/posts", this.newposts, {
                headers: {
                    authorization: "Bearer " + this.token
                }
            })
                .then(response => {
                    // console.log(response.data);
                    if (!response.data.error) {
                        alert(response.data.message);
                        this.getPosts();
                    }
                })
                .catch(err => {
                    alert("echec de réception");
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
                    // console.log(response.data); 
                    this.posts = response.data
                    this.posts.forEach(async (post) => {
                        await axios.get(`http://localhost:3000/api/auth/${post.userId}`, {
                            headers: {
                                authorization: "Bearer " + this.token
                            }
                        })
                            .then(response2 => {
                                post.user = response2.data;
                            })
                        await axios.get(`http://localhost:3000/api/posts/${post._id}/comments`, {
                            headers: {
                                authorization: "Bearer " + this.token
                            }
                        })
                            .then(response3 => {
                                post.comments = response3.data
                            })
                        //  RECUPERER LE PSEUDO DANS LE COMMENTAIRE
                        // await axios.get(`http://localhost:3000/api/auth/${post.useriD}`, {
                        //     headers: {
                        //         authorization: "Bearer " + this.token
                        //     }
                        // })
                        //     .then(response4 => {
                        //         post.user = response4.data
                        //         console.log(response.data);
                        //     })
                    });
                })
                .catch(err => {
                    alert("echec de réception");
                });
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

                    console.log(response.data);
                    if (!response.data.error) {
                        alert(response.data.message);
                        this.getPosts();
                    }
                })
                .catch(err => {
                    alert("echec de réception");
                });
        },


        // MODIFIER LE POST
        editComment(post) {
            axios.put(`http://localhost:3000/api/posts/${post._id}`, {
                headers: {
                    authorization: "Bearer " + this.token
                }
            })
                .then(() => {
                    this.getPosts();
                    alert("Votre commentaire a bien été supprimé !");
                })
                .catch((error) => {
                    console.log({ error });
                });
        },

        // SUPPRIMER LE POST

        deleteComment(post) {
            axios.delete(`http://localhost:3000/api/posts/${post._id}`, {
                headers: {
                    authorization: "Bearer " + this.token
                }
            })
                .then(() => {
                    this.getPosts();
                    alert("Votre commentaire a bien été supprimé !");
                })
                .catch((error) => {
                    console.log({ error });
                });
        },

        // LIKER LE POST
        liked() {
            axios
                .post(`http://localhost:3000/api/posts/${post._id}`, {
                    userId: this.userId,
                })
                .then(function (response) {
                    const ObjlikedPosts = response.data;
                    this.like = [];
                    for (const ObjlikedPost of ObjlikedPosts) {
                        this.like.push(ObjlikedPost.this.userId);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },

    // MONTER LES ELEMENTS SI L'UTILISATEUR EST CONNECTEE

    mounted() {
        const userLogin = JSON.parse(localStorage.getItem("userLogin"));
        if (userLogin) {
            this.newposts.userId = userLogin.userId;
            this.commentposts.userId = userLogin.userId;
            this.token = userLogin.token;
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
    <!-- Create NEW POST commentary her -->
    <div class=" align-card form-wall d-flex mt-2">
        <div class="card mb-3 d-flex p-2 ">
            <form action="#" method="post" @submit.prevent="createPost">
                <textarea v-model="newposts.commentary" name="textarea" aria-label="Poster votre commentaire"
                    maxlength="150" rows="2" cols="60" placeholder="Publier un nouveau commentaire"
                    data-v-133ed8df=""></textarea>
                <br />
                <input class="  btn btn-primary" aria-label="Post d'un commentaire" type="submit" name="submitInfo"
                    value="Publier le commentaire" />
                <div class="form-group">
                    <input type="file" accept="image/png, image/jpeg" class="form-control-file "
                        aria-label="Publication une image" id="exampleFormControlFile1" />
                </div>
                <hr class="dropdown-divider" />
            </form>
        </div>
    </div>

    <!--  POST HER  -->

    <div class="align-card form-wall m-1" :post="post" v-for="post in posts" v-bind:value="posts">
        <div class="card mb-3 d-flex p-2 ">
            <div class="card-header">
                <div class="d-flex gap-2">
                    <div class="d-flex flex-column ">
                        <p id="name-commentary" v-if="post.user">{{ post.user.pseudo }}</p>
                    </div>
                </div>
            </div>
            <img v-if="newposts.imageUrl != null" :src="require(`../../../backend/images/${ImageUrl}`)"
                class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text none-bold">{{ post.commentary }}</p>

                <!-- EDIT COMMENT HER -->

                <form v-if="showedit">
                    <div class="d-flex p-1 gap-2 mt-1 mb-3">
                        <textarea name="textarea" aria-label="Poster une réponse" maxlength="150" rows="2" cols="90"
                            placeholder="Modifier votre message" data-v-133ed8df=""></textarea>
                        <input class="btn btn-primary ms-auto" type="submit" name="submitInfo" value="Modifier"
                            aria-label="submit post">
                        <input v-on:click="showedit = false" class="btn btn-secondary ms-auto" type="button"
                            name="backedit" value="Annuler" aria-label="showeditfalse">
                    </div>
                </form>


                <!-- SET TIME HER -->
                <p class="card-text border-date"><small class="fst-italic"> {{ moment(post.createdAt).fromNow() }}
                    </small></p>
                <!-- LIKE HER -->
                <button class="btn" id="btn-color"> <img id="svglike" src="..\assets\logo/like-svgrepo-com.svg"
                        alt="edit" width="40" height="30"> </button>
                <!-- MODIFY HER -->
                <button class="btn" id="btn-color" @click.prevent="showedit = true, editComment(post)"> <img
                        src="..\assets\logo/edit-svgrepo-com.svg" alt="edit" width="40" height="30"> </button>

                <!-- DELETE HER -->
                <button class="btn" id="btn-color" type="submit" @click="deleteComment(post)"> <img
                        src="..\assets\logo/delete-svgrepo-com.svg" alt="delete" width="40" height="30"> </button>
            </div>


            <!--  RESPONSE COMMENT HER  -->
            <div class="d-flex gap-2 p-1 fs- text mt-2 " id="border-res" :comment="comment"
                v-for="comment in post.comments" v-bind:value="posts">
                <div class="d-flex flex-column gap-1 p-1 comment " id="border-res">
                    <p class="font-weight-bold pseudo-user p-2" id="name-response" v-if="comment.user">{{
                            comment.user.pseudo
                    }}</p>
                    <p class="p-1">{{ comment.commentary }} </p>
                </div>
            </div>
            <form action="#" method="post" @submit.prevent="createComment(post)">
                <div class="d-flex p-1 gap-2 mt-3">
                    <textarea v-model="commentposts.commentary" name="textarea" aria-label="Poster une réponse"
                        maxlength="150" rows="2" cols="90" id="floatingTextarea" placeholder="Votre Réponse"
                        data-v-133ed8df=""></textarea>
                    <input class="btn btn-primary ms-auto" type="submit" name="submitInfo" value="Envoyer"
                        aria-label="submit post">
                </div>
            </form>
        </div>
    </div>
</template>


<style scoped>
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



#btn-color {
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
    margin-bottom: 1rem;
    padding: 1rem;
}

.card {
    background-color: #4E5166 !important;
}

.card-body>.d-flex {
    margin-bottom: 1rem;
    padding: 1rem;
}

.d-flex p:nth-child(1) {
    font-weight: bold;
}

#btn-primary {
    color: blue !important;
}
</style>