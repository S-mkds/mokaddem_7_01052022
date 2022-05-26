<script>
export default { 
    name:"Navbvar"
}
</script>

<template>
<header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        
          <img src="../../assets/logo/icon-left-font-monochrome-white.svg" alt="logo" class="img-icon bi me-2 p-2" width="160" height="50" />
        

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><router-link  to="/fil-actu" class="nav-link px-2 text-white">Fil d'actualité</router-link></li>
          <li><routerLink to="/contact" class="nav-link px-2 text-white">Contact</routerLink></li>
        </ul>

       

        <div class="text-end">
          <router-link to="/"> <button  type="button" class="btn btn-outline-light me-2">Connexion</button></router-link>
          <router-link to="/signin"> <button type="button" class="btn btn-warning">Inscription</button></router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

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