<script>
import LoginVue from './pages/Login.vue'
import signInVue from './pages/signIn.vue'
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
<NavbarVue></NavbarVue>
<!-- <SidebarVue></SidebarVue> -->
  <router-view></router-view>
</template>

<style scoped>
p {
  color: black !important;
}
h {
  color: black !important;
}
body {
  background-color: rgba(171, 170, 169, 0.057) !important;
}

</style>
