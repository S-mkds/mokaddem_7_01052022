<script>
import axios from 'axios';
import LogoutNavbar from "../components/layout/LogoutNav.vue";
export default {
    name: "Profil",
    components: { LogoutNavbar },
    data() {
    },
    methods: {

    },

};

</script>

<template>
    <LogoutNavbar></LogoutNavbar>
    <div class="card d-flex p-2 mx-auto w-100 m-3 size-card " data-v-649c4a52="">
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

#bg-contact {
    background-color: #4E5166;
}

.medium {
    width: 50% !important;
}

.size-card {
    max-width: 100%;
    width: 70rem !important;
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

@media (min-width:1281px) {
    .new-w {
        width: 50rem !important;
    }
}

.card {
    margin-left: 10px;
    margin-right: 10px;
}
</style>