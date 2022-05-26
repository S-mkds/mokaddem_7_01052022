<script>

export default { 
    name: "Comment",
}
</script>

<template>
<div class="form-wall container-sm mx-auto d-flex justify-content-center ">
 <form action="#" method="post">
      <textarea name="textarea" aria-label="Poster un commentaire" maxlength="300" rows="2" cols="80" id="floatingTextarea" placeholder="Votre commentaire" ></textarea>
      <br>
      <input class="btn btn-primary" aria-label="Post d'un commentaire" type="submit" name="submitInfo" value="Publier le commentaire">
  <div class="form-group">
    <input type="file" class="form-control-file " aria-label="Publication une image" id="exampleFormControlFile1"> 
  </div>
  <hr class="dropdown-divider" />
  
    </form>
  </div>
</template>

<style scoped>
#profile {
    width: 25px;
    height: 25px;
    border-radius: 50%;
}
.card-body > .d-flex {
    margin-bottom: 1rem;
    padding: 1rem;
}
.d-flex p:nth-child(1) {
    font-weight: bold;
}
.card { 
    width: 25rem; 
}

</style>