<script>
import LogoutNavbar from "../components/layout/LogoutNav.vue";
export default {
    name: "Profil",
    components: {LogoutNavbar },
   
}
</script>

<template>
<LogoutNavbar></LogoutNavbar>
<div class="container">
        <div class=" text-center mt-5 ">
            <h1>Modifier le pseudo ou supprimer le compte</h1>
        </div>
    <div class="row ">
    <div class="col-lg-7 mx-auto">
        <div class="card mt-2 mx-auto p-4" id="bg-contact">
            <div class="card-body" id="bg-contact">
            <div class = "container">
            <form id="contact-form" role="form" action="mailto:Groupomania@group.com" method="post" enctype="text/plain" >
            <div class="controls">
                <div class="row">
                    <div class="col-md-15">
                        <div class="form-group">
                            <label for="form_name"><p>Pseudo </p></label>
                            <input id="form_name" type="text" name="name" class="form-control" placeholder="Modifier le pseudo" required="required" data-error="Firstname is required.">
                        </div>
                    </div>
                </div>
                <div class="row">
                </div>
                <div class="row">
                    <div class="col-md-15 mb-2">
                        <input type="submit" class="btn btn-warning btn-send  pt-2 btn-block" value="Enregistrer les modification" >
                </div>
                </div>
                <div class="row">
                    <div class="col-md-15 mb-2">
                        <input type="submit" class="btn btn-warning btn-send  pt-2 btn-block" value="Supprimer le compte" >
                </div>
                </div>
        </div>
         </form>
        </div>
            </div>
    </div>
    </div>
</div>
</div>
</template>

<style scoped>

label[data-v-df212a54] {
    color: white !important
}
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