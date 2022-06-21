<script>
import NavbarVue from '../components/layout/Navbar.vue';
export default {
  name: 'SignUp',
  components: { NavbarVue },

  data() {
    return {
      pseudo: '',
      email: '',
      password: '',
      error: "",
    }
  },
  methods: {
    signUpUser() {
      let dataForm = JSON.stringify({ email: this.email, pseudo: this.pseudo, password: this.password });
      fetch("http://localhost:3000/api/auth/signup", {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: dataForm,
      })
        .then(response => response.json())
        .then(response => {
          if (response.error) throw (response.error)
          fetch("http://localhost:3000/api/auth/login", {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: dataForm,
          })
            .then(response2 => response2.json())
            .then(response2 => {
              if (response2.error) throw (response2.error)
              localStorage.setItem("userLogin", JSON.stringify(response2));
              alert('Utilisateur enregistré')
              window.location.href = "/"
            })
            .catch(err2 => {
              alert("erreur lors de l'inscription")
              console.log("erreur:", err2)
              this.error =
                "Erreur: Vérifier vos identifiants lors de l'inscription";
            })
          console.log(response);
        })
        .catch(err => {
          alert("erreur lors de l'inscription")
          console.log("erreur:", err)
          this.error =
            "Erreur: Vérifier vos identifiants lors de l'inscription";
        })
    },
  }
}
</script>

<template>
  <NavbarVue></NavbarVue>
  <main class="form-signin">
    <form @submit.prevent="signUpUser">
      <img class="img-log d-block mx-auto" src="..\assets\logo\icon-left-font-monochrome-black.png" alt="" width="180"
        height="180">
      <div class="form-floating">
        <input type="pseudo" class="form-control" id="pseudo" placeholder="Pseudo" v-model="pseudo"
          pattern="[A-Z]{1}[A-Za-z0-9]{1,20}"
          title="Le pseudo doit contenir une majuscule et au moins 1 à 20 caractères" required>
        <label for="pseudo">Pseudo</label>
      </div>

      <div class="form-floating">
        <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="email" required>
        <label for="email">Email</label>
      </div>

      <div class="form-floating">
        <input type="password" class="form-control" id="password" placeholder="Password" v-model="password"
          pattern="[A-Za-z0-9]{4,25}"
          title="Le mot de passe doit contenir au moins 4 à 25 caractères, il est conseillé d'utiliser des majuscules ou des chiffres."
          required>
        <label for="password">Mot de passe</label>
      </div>

      <!-- <div class="form-floating">
      <input type="password2" class="form-control" id="convrm-password" placeholder="confirm-password" v-model="passwordValidate" pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})" required>
      <label for="password2">Confirmation mot de passe</label>
    </div> -->

      <button class="w-100 btn btn-lg btn-warning" type="submit">Inscription</button>
      <p class="my-3 text-danger">{{ error }}</p>
      <div class="text-center font-weight-bold">
        Avez-vous déja un compte ? <routerLink to="/"> <a href="#" class="color-a">login</a></routerLink>
      </div>
      <p class="mt-2 mb-3 text-center color-text">&copy; Groupomania 2022</p>
    </form>
  </main>
</template>

<style scoped>
.color-a {
  color: black !important;
  font-weight: bold;
}

.color-text {
  color: #000000 !important;
}

.form-signin input[type="password"] {
  margin-bottom: 0 !important;
}

.img-log {
  margin-bottom: -4rem;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}


.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>