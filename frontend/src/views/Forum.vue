<script>
import Card from "../components/Card.vue";
import Comment from "../components/Comment.vue";
import LogoutNavbar from "../components/layout/LogoutNav.vue";
export default {
    name: "Forum",
    components: { Card, Comment, LogoutNavbar },
}
</script>

<template>
<LogoutNavbar></LogoutNavbar>
 <img class="img-log d-block mx-auto" src="..\assets\logo/icon-above-font.svg" alt="" width="180" height="180">
    <Comment></Comment>
    <Card></Card>
    <Card></Card>
</template>

<style scoped>

</style>