<script>
export default { 
    name:"LogoutNavbar",
    methods: {
      logout(){
        localStorage.clear()
        alert('vous avez été déconnecté')
        this.$router.push("/login");
      }
    },
}
</script>

<template>
<header class="p-3 text-white" id="bg-nav">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        
          <img src="../../assets/logo/icon-left-font-monochrome-white.svg" alt="logo" class="img-icon bi me-2 p-2" width="160" height="50" />
        
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><router-link  to="/forum" class="nav-link px-2 text-white">Fil d'actualité</router-link></li>
          <li><router-link  to="/profil" class="nav-link px-2 text-white">Profil</router-link></li>
        </ul>

        <div class="text-end">
          <router-link to="/"> <button  @click="logout" type="button" class="btn btn-outline-light me-2">Deconnexion</button></router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
#bg-nav {
 background-color: #4E5166;
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
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 .25rem rgba(255, 255, 255, .25);
}

.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}

</style>