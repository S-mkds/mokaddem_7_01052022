<script>

export default{
    name: 'Login'
    // data(){
    //     return {
    //         username: "",
    //         password: "",
    //         error: ""
    //     }   
    // },
    // methods: {
    //     login() {
    //         if (this.username === "admin" && this.password === "admin") {
    //             this.$router.push("/")
    //         }
    //         else { 
    //             this.error = "invalid credential"
    //         }
    //     }
    // }
}
</script>

<template>
<main class="form-signin">
  <form>
    <img class="img-log d-block mx-auto" src="..\assets\logo\icon-left-font-monochrome-black.png" alt="" width="180" height="180">
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Mot de passe</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Se souvenir de moi
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-warning" type="submit">Connexion</button>
    <p class="mt-5 mb-3 text-muted">&copy; Groupomania 2022</p>
  </form>
</main></template>

<style scoped>

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