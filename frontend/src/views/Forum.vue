<script>
import axios from 'axios';
import LogoutNav from '../components/layout/LogoutNav.vue';
export default {
    name: "Comment",
    components: { LogoutNav },
    data() {
        return {
            like: 0,
            posts: [],
            newposts: {
                userId: "",
                commentary: "",
            },
            token: "",
            sendposts: {
                commentary: "",
                image: "",
            },
            token: "",
        };
    },
    methods: {
        PostLike: function (){
            this.like++;
        },
        callgreen(){
            document.getElementById('svglike').setAttribute('fill', '#ff00ff');
        },
        CreatePost() {
            axios.post("http://localhost:3000/api/posts", this.newposts, {
                headers: {
                    authorization: "Bearer " + this.token
                }
            })
                .then(response => {
                console.log(response.data);
                if (!response.data.error) {
                    alert(response.data.message);
                    location.reload();
                }
            })
                .catch(err => {
                alert("echec de réception");
            });
        },
        getAllPosts() {
            fetch("http://localhost:3000/api/posts/", {
                headers: { Authorization: "bearer " + this.token },
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    this.posts = data;
                });
    },
        
   },
    mounted() {
        const userLogin = JSON.parse(localStorage.getItem("userLogin"));
        if (userLogin) {
            this.newposts.userId = userLogin.userId;
            this.token = userLogin.token;
            this.getAllPosts();
        }
        else {
            this.$router.push("/login");
        }
    },

}

</script>

<template>
    <LogoutNav></LogoutNav>
    <!-- Create NEW commentary her -->
    <div class="form-wall container-sm mx-auto d-flex justify-content-center ">
        <form action="#" method="post" @submit.prevent="CreatePost">
            <textarea v-model="newposts.commentary" name="textarea" aria-label="Poster un commentaire" maxlength="300"
                rows="2" cols="80" id="floatingTextarea" placeholder="Votre commentaire"></textarea>
            <br />
            <input class="btn btn-primary" aria-label="Post d'un commentaire" type="submit" name="submitInfo"
                value="Publier le commentaire" />
            <div class="form-group">
                <input type="file" class="form-control-file " aria-label="Publication une image"
                    id="exampleFormControlFile1" />
            </div>
            <hr class="dropdown-divider" />
        </form>
    </div>

    <!--  POST her  -->

    <div class="align-card form-wall" :post="post" v-for="post in posts" v-bind:key="post.id">
        <div class="card mb-3 d-flex p-2 ">
            <div class="card-header">
                <div class="d-flex gap-2">
                    <div class="d-flex flex-column">
                        <p id="name-commentary">{{ pseudo }} pseudo ici</p>
                    </div>
                </div>
            </div>
            <!-- <img  v-if="comment.image != null"
          :src="require(`../../../backend/images/comments/${ImageUrl}`)"
          class="card-img-top" 
          alt="..."> -->
            <div class="card-body">
                <p class="card-text">{{ commentary }} text ici</p>

                <!-- SET TIME HER -->
                <p class="card-text"><small class="fst-italic">Last updated 3 mins ago</small></p>
                <!-- LIKE HER -->
                <btn class="btn" id="btn-color" v-on:click="PostLike"> <img v-on:click="callgreen" id="svglike"
                        src="..\assets\logo/like-svgrepo-com.svg" alt="edit" width="40" height="30"> {{like}}</btn>
                <!-- MODIFY HER -->
                <btn class="btn" id="btn-color"> <img src="..\assets\logo/edit-svgrepo-com.svg" alt="edit" width="40"
                        height="30"> </btn>
                <!-- DELETE HER -->
                <btn class="btn" id="btn-color"> <img src="..\assets\logo/delete-svgrepo-com.svg" alt="delete"
                        width="40" height="30"> </btn>
            </div>

            <!--  RESPONSE her  -->
            <div class="d-flex gap-2 p-1 fs- text" id="border-res">
                <div class="d-flex flex-column gap-1 p-1 comment " id="border-res">
                    <p class="font-weight-bold" id="name-response">{{ pseudo }} pseudo ici</p>
                    <p>{{ responsecommentary }} text ici</p>
                </div>
            </div>
            <div class="d-flex p-1 gap-2">
                <textarea v-model="responsecommentary" name="textarea" aria-label="Poster une réponse" maxlength="150"
                    rows="2" cols="90" id="floatingTextarea" placeholder="Votre Réponse" data-v-133ed8df=""></textarea>
                <input class="btn btn-primary ms-auto" type="submit" name="submitInfo" value="Envoyer"
                    aria-label="submit post">
            </div>
        </div>
    </div>
</template>


<style scoped>

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
.comment{
    background-color: #4E5166;
    border-radius: 5px;
    width: 100%;
    
}

#name-response, #name-commentary {
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
.card-body > .d-flex {
    margin-bottom: 1rem;
    padding: 1rem;
}

.card { 
    width: 60rem; 
    background-color: #4E5166!important;
}
.card-body > .d-flex {
    margin-bottom: 1rem;
    padding: 1rem;
}
.d-flex p:nth-child(1) {
    font-weight: bold;
}

</style>