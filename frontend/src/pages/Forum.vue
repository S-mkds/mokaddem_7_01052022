<script>
import Card from "../components/Card.vue";
import Comment from "../components/Comment.vue";
export default {
    name: "Forum",
    components: { Card, Comment },
   
}
</script>

<template>
<h1 class="form-wall d-flex justify-content-center">Bienvenue chez Groupomania</h1>
    <Comment></Comment>
    <Card></Card>
    <Card></Card>
</template>

<style scoped>

</style>