<script>
import Avatar from './Avatar.vue';

export default {
    name: "Response",
    components: { Avatar },
}
</script>

<template>
 <div class="d-flex gap-2 p-1 fs- text">
   
<Avatar></Avatar>
<div class="d-flex flex-column gap-1 p-1 comment">
<p>Nom du commentataire</p>
<p>Merci pour le com</p>
</div>
</div>
</template>

<style scoped>
#profile {
    width: 25px;
    height: 25px;
    border-radius: 50%;
}
.comment{
    background-color: rgba(177, 160, 160, 0.486);
    border-radius: 5px;
    width: 100%;
    
}
.card-body > .d-flex {
    margin-bottom: 1rem;
    
}
.d-flex p:nth-child(1) {
    font-weight: bold;
}
.card { 
    width: 25rem; 
}
</style>