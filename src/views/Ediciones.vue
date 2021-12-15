<template>
  
  <div class="ediciones" style="padding:0%;margin-bottom: 100px;
   clear: both;">
    
    <div class="container">
       
        <div class="row">
          <div class="col-12">

            <div id="logoedicion" style="padding:10vh;">

              <img src="../images/hypatiaediciones.png" alt="Hypatia Ediciones" class="img-fluid"> 
              
            </div>
             
          </div>
            
        </div>

        <!--acomodo de publicaciones-->
        <div class="row">
          <div class="card mx-auto" style="width: 18rem;">
              <img src="../images/infinitywarscard.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Infinity Wars</h5>
                <p class="card-text">Primer libro publicado por Hypatia Ediciones :) </p>
                <router-link to="/infinity" class="btn" style="background-color: #f5a425;">Ver Más</router-link>
               
              </div>
          </div>
        </div>


    </div>
    
    
  </div>
</template>
<script>
    export default {
      
    }
</script>