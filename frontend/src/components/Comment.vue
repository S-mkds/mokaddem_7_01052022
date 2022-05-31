<script>
import axios from 'axios'
export default { 
    name: "Comment",
    data() { 
        return{
            posts:[],
            newposts:{
            userId: "",
            commentary:"", 
            },
            token:"",
        }
    },
    methods: {
            SavePost() { 
                axios.post("http://localhost:3000/api/posts", this.newposts, {
                    headers:{
                        authorization: "Bearer " + this.token
                    }
                })
                .then(response =>{
                    console.log(response.data);
                    if(!response.data.error){
                        alert(response.data.message);
                    }
                })
                .catch(err => {
                    alert('echec de réception');
                })  
            },
    },
    mounted() {
        const userLogin = JSON.parse(localStorage.getItem('userLogin'));
        if (userLogin) {
            this.newposts.userId = userLogin.userId
            this.token = userLogin.token
        }
        else {
            this.$router.push("/login");
        }
    }
}
    
</script>

<template>
  <div class="form-wall container-sm mx-auto d-flex justify-content-center ">
    <form action="#" method="post" @submit.prevent="SavePost">
      <textarea
        v-model="newposts.commentary"
        name="textarea"
        aria-label="Poster un commentaire"
        maxlength="300"
        rows="2"
        cols="80"
        id="floatingTextarea"
        placeholder="Votre commentaire"
      ></textarea>
      <br />
      <input
        class="btn btn-primary"
        aria-label="Post d'un commentaire"
        type="submit"
        name="submitInfo"
        value="Publier le commentaire"
      />
      <div class="form-group">
        <input
          type="file"
          class="form-control-file "
          aria-label="Publication une image"
          id="exampleFormControlFile1"
        />
      </div>
      <hr class="dropdown-divider" />
    </form>
  </div>
</template>


<style scoped>
#profile {
    width: 25px;
    height: 25px;
    border-radius: 50%;
}
.card-body > .d-flex {
    margin-bottom: 1rem;
    padding: 1rem;
}
.d-flex p:nth-child(1) {
    font-weight: bold;
}
.card { 
    width: 25rem; 
}

</style>