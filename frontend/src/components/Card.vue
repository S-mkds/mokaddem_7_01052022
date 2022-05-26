<script>


export default {
    name: "Card",

}
</script>

<template>
<div  class="align-card form-wall">
<div class="card mb-3 d-flex p-2 ">
     <div class="card-header">  <div class="d-flex gap-2">
<div class="d-flex flex-column">
<p id="name-commentary">Nom du commentataire</p>
</div>
</div>
</div>
<!--  response her  -->
  <img src="https://picsum.photos/400/200" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="fst-italic">Last updated 3 mins ago</small></p>
  </div>
 <div class="d-flex gap-2 p-1 fs- text">
 
<div class="d-flex flex-column gap-1 p-1 comment">
<p>Nom du commentataire</p>
<p>Merci pour le com</p>
</div>
</div>
    <div class="d-flex p-1 gap-2">
    <textarea name="textarea" aria-label="Poster une réponse" maxlength="150" rows="2" cols="90" id="floatingTextarea" placeholder="Votre Réponse" data-v-133ed8df=""></textarea>
    <input class="btn btn-primary ms-auto" type="submit" name="submitInfo" value="Envoyer" aria-label="submit post">
    </div>
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

#name-commentary {
    font-weight: bold;
}
.form-wall {
    padding-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: black;
}
#profile {
    width: 25px;
    height: 25px;
    border-radius: 50%;
}
.card-body > .d-flex {
    margin-bottom: 1rem;
    padding: 1rem;
}

.card { 
    width: 60rem; 
    background-color: rgba(204, 204, 203, 0.96) !important;
}
</style>