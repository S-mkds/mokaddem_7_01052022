<script>
import axios from 'axios';
import LogoutNavbar from "../components/layout/LogoutNav.vue";
export default {
    name: "Profil",
    components: { LogoutNavbar },
    data() {
        return {
            token: "",
            pseudo: "",
            userId: "",
        };
    },
    methods: {
        changePseudo() {
            axios.get(`http://localhost:3000/api/auth/${userId}`, {
                headers: {
                    authorization: "Bearer " + this.token
                }
            })
                .then(response => {
                    this.userId = response.data
                    console.log(response.data)
                })
                .catch(erreur => {
                    alert("echec de réception");
                });
        },

        // deleteUser() {
        //     axios.delete("http://localhost:3000/api/auth/", + this.userId, {
        //         headers: { Authorization: 'Bearer ' + this.token }
        //     })
        //         .then(response => {
        //             let rep = JSON.parse(response.data);
        //             console.log(rep);
        //             console.log(userId);
        //             localStorage.clear()
        //             alert('votre compte à été supprimer')
        //             this.$router.push("/login");
        //         })
        //         .catch(error => {
        //             console.log(error);
        //             this.msg = error
        //         })
        // },
    },

    mounted() {

    },
};

</script>

<template>
    <LogoutNavbar></LogoutNavbar>
    <div class="card d-flex p-2 mx-auto w-100 m-3 " data-v-649c4a52="">
        <h1 class="mx-auto">Entrez un nouveau pseudo ou supprimer le compte</h1>
        <div class="d-flex flex-column gap-1 p-1 comment " id="border-res">
            <p class="mx-auto font-weight-bold" id="name-response">Pseudo </p>
            <input v-model="newpseudo" type="pseudo" class="new-w medium mx-auto mb-3 form-control" id="pseudo"
                placeholder="Modifier le pseudo" required>
        </div>
        <input @click.prevent="" type="submit" class="new-w mx-auto btn btn-warning btn-send  pt-2 btn-block"
            value="Enregistrer le pseudo">
        <input @click="deleteUser" type="submit" class=" new-w mx-auto btn btn-warning btn-send mt-1 pt-2 btn-block"
            value="Supprimer le compte">

    </div>

</template>

<style scoped>
.new-w {
    width: 50rem !important;
}

body {
    font-family: 'Lato', sans-serif;
}

h1 {
    margin-bottom: 40px;
    color: white !important;
}

label {
    color: #333;
}

#bg-contact {
    background-color: #4E5166;
}

.medium {
    width: 50% !important;
}

.btn-send {
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    width: 80%;
    margin-left: 3px;
}

.help-block.with-errors {
    color: #ff5050;
    margin-top: 5px;

}

.card {
    margin-left: 10px;
    margin-right: 10px;
}
</style>