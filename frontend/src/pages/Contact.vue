<script>
export default {
    name: "contact"
}
</script>

<template>
<div class="container">
    <div class="card">
        <div class="top-div">
            <h2>Contactez nous!</h2>
            <p>Si vous avez besoin d'une aide pour rejoindre notre forum</p>
        </div>
        <div class="stats">
            <div class="stats1">
                <span><i class="fa fa-map-marker"></i></span>
                <span>Marseille</span>
            </div>
            <div class="stats1">
                <span><i class="fa fa-phone"></i></span>
                <span>0651124731</span>
            </div>
            <div class="stats1">
                <span><i class="fa fa-envelope"></i></span>
                <span>mokaddem-s@hotmail.com</span>
            </div>
        </div>
        <div class="card1">
            <div class="left">
                <div class="form-control">
                    
                    <input type="text" required="required">
                    <span> Nom Prénom</span>
                    <i class="fa fa-users"></i>
                </div>
                <div class="form-control">
                    
                    <input type="text" required="required">
                    <span>E-mail</span>
                    <i class="fa fa-envelope"></i>
                </div>
                <div class="form-control">
                    
                    <input type="text" required="required">
                    <span>Numéro de téléphone</span>
                    <i class="fa fa-mobile-phone"></i>
                </div>
            </div>
            <div class="right">
                <div class="text-area">
                   <textarea required="required"></textarea>
                   <span>Message</span>
                </div>
            </div>
        </div>
        
        <div class="button">
            <button>Envoyez</button>
        </div>
        
    </div>
</div>
</template>

<style scoped>
*{
    margin:0;
    padding:0;
}
.container{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
}

.card{
    background-color:#fff2e0;
     z-index:10;
    font-family: 'Poppins', sans-serif;
    padding:20px;
    border-radius:20px;
    
}
.top-div{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
.top-div h2{
    font-weight:900;
   
}
.top-div p{
    font-size: 10px;
    font-weight:900;
    color:#8d8dab;
     font-family: 'Poppins', sans-serif;
}
.stats{
    display:flex;
    margin:20px;
    justify-content:space-between;
}
.stats1{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    cursor:pointer;
    transition:all 0.5s;
    padding:10px;
}
.stats1 span:nth-child(1){
    color:#e2304b;
    font-size:18px;
}
.stats1 span:nth-child(2){
    font-weight:800;
    font-size:11px;
  
}

.stats1:hover{
    background-color:white;
}
.card1{
    margin-top:40px;
    position:relative;
    background-color:#fff;
    border-radius:10px;
    overflow:hidden;
    display:flex;
    gap:20px;
    padding:10px;
    height:100%;
    gap:20px
}


.card1 .form-control{
    width:100%;
    position:relative;
}

.card1 .form-control input[type="text"]{
 width:100%;   
 height:30px;
 box-sizing:border-box;
 border:none;
 outline:none;
  margin-top:25px;
  padding:0 24px;
  box-sizing:border-box;
  background-color:#f9f9fb;
 
}
.card1 .form-control span{
    position:absolute;
   top:32px;
   font-size:12px;
    left:24px;
}
.card1 .form-control i{
    position:absolute;
    top:33px;
    left:3px;
    font-size:14px;
}
.card1 .form-control .fa-mobile-phone{
    position:absolute;
    top:30px;
    left:3px;
    font-size:22px;
}
.form-control input:focus~span,.form-control input:valid~span{
    top:6px;
    font-size:12px;
    font-weight:800;
}
.text-area{
    position:relative;
    
}
.card1 .right{

    margin-top:24px;
    box-sizing:border-box;
}
.card1 .right textarea{
    height:140px;
    resize:none;
    width:100%;
    border:none;
    outline:none;
    background-color:#f9f9fb;
    padding-top:7px;
     padding-left:10px;
     box-sizing:border-box;
}
.card1 .right .text-area span{
    position:absolute;
    top:7px;
    left:10px;
    font-size:12px;
}
.text-area textarea:focus~span,.text-area textarea:valid~span{
    top:-20px !important;
    font-size:12px;
    font-weight:800;
}
.button{
    display:flex;
    justify-content:center;
    position:relative;
}

.button button{
    height:30px;
    width:200px;
    border:none;
    background-color:#5f30e2;
    color:#fff;
    font-size:12px;
    border-radius:10px;
    margin-top:10px;
}












@media(max-width:400px){
    .card1{
        display:block;
    }
}

</style>