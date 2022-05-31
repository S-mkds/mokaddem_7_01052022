<template>
<NavbarVue></NavbarVue>
<main class="form-signin">
  <form @submit.prevent="login">
    <img class="img-log d-block mx-auto" src="..\assets\logo\icon-left-font-monochrome-black.png" alt="" width="180" height="180">
    
    <div class="form-floating">
      <input v-model="email" type="email-adress" class="form-control" id="email-adress" placeholder="name@example.com" @keyup.enter="login" required>
      <label for="email-adress">Email</label>
    </div>
    
    <div class="form-floating">
      <input v-model="password" type="password" class="form-control" id="password" placeholder="Password" @keyup.enter="login" required>
      <label for="password">Mot de passe</label>
    </div>

    <div class="checkbox mb-3">
    </div>
    <button class="w-100 btn btn-lg btn-warning" type="submit">Connexion</button>
        <div class="text-center font-weight-bold">
            Crée un compte <routerLink to="/SignUp"> <a href="#" class="font-weight-bold color-a" id="signUp">signin</a></routerLink>
        </div>

    <p class="mt-2 mb-3 text-muted text-center color-text" id="text-copy">&copy; Groupomania 2022</p>
  </form>
</main>

</template>

<script>
import NavbarVue from '../components/layout/Navbar.vue';
import Axios from "axios";

export default{
    name: 'Login',
    components: { NavbarVue },

  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    login() {
      const user = {
        email: this.email,
        password: this.password,
      };
      Axios.post("http://localhost:3000/api/auth/login", user)
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("userLogin", JSON.stringify(res.data));
            console.log(res);
            this.$router.push("/fil-actu");
          }
        })
        .catch((err) => {
          localStorage.clear();
          if (err.response.status === 401) {
            this.error =
              "Connexion au serveur impossible.";
          } else {
            this.error = "Vérifiez vos identifiants. ";
          }
        });
    },
  },
};

</script>

<style scoped>
.color-a { 
   color: var(--bs-body-color) !important;
   font-weight: bold;
}
.color-text { 
   color: #000000 !important;
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