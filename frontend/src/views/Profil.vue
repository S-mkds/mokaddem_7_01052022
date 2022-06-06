<script>
import LogoutNavbar from "../components/layout/LogoutNav.vue";
export default {
    name: "Profil",
    components: { LogoutNavbar },
    data() {
        return {
            token: "",
        };
    },
    methods: {


        }
};

</script>

<template>
<LogoutNavbar></LogoutNavbar>

    <h1>Modifier le pseudo ou supprimer le compte</h1>
    <div class="d-flex flex-column gap-1 p-1 comment " id="border-res" >
    <p class="font-weight-bold" id="name-response">{{ pseudo }} test</p>
    </div>
    <input @click.prevent="" type="submit" class="btn btn-warning btn-send  pt-2 btn-block" value="Enregistrer le pseudo" >
    <input type="submit" class="btn btn-warning btn-send  pt-2 btn-block" value="Supprimer le compte" >


</template>

<style scoped>

body {
    font-family: 'Lato', sans-serif;
}

h1 {
    margin-bottom: 40px;
}

label {
    color: #333;
}
#bg-contact{
    background-color: #4E5166;
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