<script>
import LoginVue from './views/Login.vue'
import signInVue from './views/SignUp.vue'
import NavbarVue from './components/layout/Navbar.vue'
import SidebarVue from "./components/layout/Sidebar.vue"


export default {
  name: "App",
  components: {
   LoginVue,
   signInVue,
   NavbarVue,
   SidebarVue,
  }
}

</script>

<template>
<!-- <navbar-vue></navbar-vue> -->
<!-- <SidebarVue></SidebarVue> -->
  <router-view></router-view>
</template>

<style>
p {
  color: white !important;
}
h {
  color: white !important;
}
body {
 background-color: #FFD7D7 !important;
}

</style>
