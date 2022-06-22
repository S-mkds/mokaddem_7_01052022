<script>
import NavbarVue from '../components/layout/Navbar.vue';
import LogoutNav from '../components/layout/LogoutNav.vue';

export default {
    name: "contact",
    components: { NavbarVue, LogoutNav },
}

</script>

<template>
    <NavbarVue></NavbarVue>
    <!-- <LogoutNav></LogoutNav> -->
    <div class="container">
        <div class=" text-center mt-5 ">
            <h1>Formulaire de contact</h1>
        </div>
        <div class="row ">
            <div class="col-lg-7 mx-auto">
                <div class="card mt-2 mx-auto p-4" id="bg-contact">
                    <div class="card-body" id="bg-contact">
                        <div class="container">
                            <form id="contact-form" role="form" action="mailto:Groupomania@group.com" method="post"
                                enctype="text/plain">
                                <div class="controls">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="form_name">Prénom *</label>
                                                <input id="form_name" type="text" name="Prenom" class="form-control"
                                                    placeholder="Entrez votre Prénom *" required="required"
                                                    data-error="Firstname is required.">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group" id="color-label">
                                                <label for="form_lastname">Nom *</label>
                                                <input id="form_lastname" type="text" name="Nom" class="form-control"
                                                    placeholder="Entrez votre Nom *" required="required"
                                                    data-error="Lastname is required.">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="form_email">Email *</label>
                                                <input id="form_email" type="email" name="Email" class="form-control"
                                                    placeholder="Entrez votre Email *" required="required"
                                                    data-error="Valid email is required.">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label for="form_message">Message *</label>
                                                <textarea id="form_message" name="Message" class="form-control"
                                                    placeholder="Entrez votre message ici" rows="4" required="required"
                                                    data-error="Please, leave us a message."></textarea>
                                            </div>
                                        </div>
                                        <div class=" mt-2 d-flex justify-content-center">
                                            <input type="submit" class="btn btn-warning btn-send  pt-2 btn-block"
                                                value="Envoyer">
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- /.8 -->
            </div>
            <!-- /.row-->
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

#bg-contact {
    background-color: #4E5166;
}

.btn-send {
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    width: 50%;
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