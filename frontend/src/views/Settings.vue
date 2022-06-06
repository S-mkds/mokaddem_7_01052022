<script>
import LogoutNavbar from "../components/layout/LogoutNav.vue";
export default {
    name: "Profil",
    components: { LogoutNavbar },
    data() {
        return {
            token: "",
            pseudo:"",
        };
    },
    methods: {
        changePseudo() {

        },

        deleteAccount() {

        }

        },

    mounted() {
        
    },
};

</script>

<template>
<LogoutNavbar></LogoutNavbar>
<div class="card mb-3 d-flex p-2 mt-2 mx-auto" data-v-649c4a52="">
    <h1 class="mx-auto">Modifier le pseudo ou supprimer le compte</h1>
    <div class="d-flex flex-column gap-1 p-1 comment " id="border-res" >
    <p class="mx-auto font-weight-bold" id="name-response">{{ pseudo }} test</p>
    <input v-model="newpseudo" type="pseudo" class="medium mx-auto mb-3 form-control" id="pseudo" placeholder="Modifier le pseudo" required >
    </div>
    <input @click.prevent="" type="submit" class="mx-auto btn btn-warning btn-send  pt-2 btn-block" value="Enregistrer le pseudo" >
    <input type="submit" class="mx-auto btn btn-warning btn-send mt-1 pt-2 btn-block" value="Supprimer le compte" >

</div>

</template>

<style scoped>

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
#bg-contact{
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

.card{
	margin-left: 10px;
	margin-right: 10px;
}
</style>