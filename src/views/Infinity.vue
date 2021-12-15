<template>
    
    <div class="infinity">
        
        <div class="container">
            <div class="row">
                
                <div style="padding-top: 15vh;">
                    <h1>Infinity Wars</h1>
                    <h4 style="color: #f5a425;">Paco Alonso</h4>
                </div>
      
                <div id="prologoinf">
                    <h5 style="color: white;">Prólogo por <b style="text-shadow: 2px 2px 4px #000000;"> Ellen María Vasconcellos </b> </h5>
                    <br>
                    <p class="container" style="color:white; text-align: justify; text-justify: inter-word;">
                        Siempre un riesgo escribir sobre el libro ajeno terminada la lectura y tener que hablar ¿Lo nuestro ya fue? ¿Nunca fue? ¿Es? ¿Siempre será? La lectura reverbera como una canción en una sala cerrada.
                    </p>
                    <p class="container" style="color:white; text-align: justify; text-justify: inter-word;">
                      Guerras infinitas, una vez Paco me explicó la diferencia entre táctica y estrategia; jugábamos ajedrez. 
                        Acá llego otra vez sin ningún objetivo o plan, otro error. Escuché atentamente, sin embargo, lo olvidé (¿es cierto?) algo me suena de cada paso se aprovecha todo pero con el objetivo en mente. Tantas guerras e intentos de paz / tanta paz e intentos de guerra; fracasos desde la línea de fuego a la última línea de defensa. Así fue/es/será este libro que leí/leo/leeré. Recuerda: el pasado también forma parte de un plan, un olor de ceniza por pasar desapercibida a la vista / un sentido agrio y dulce por ser llamada a la batalla.
                        Leer a Paco es, sin armas, ser piel vulnerable / estar lista, las victorias se sienten bien en el silencio, estallar y estrellar, tornarse primera pieza, provocar el jaque-mate.
                    </p>
  

                </div>
            </div>

            <div class="row gallery" style="padding-bottom:3vh;">
                <div class="col-sm-12 col-md-4 col-lg-4">
                    <img class="thumbnail zoom" src="../images/infinity1.jpg" width="300" height="300">
                </div>
                  <div class="col-sm-12 col-md-4 col-lg-4">
                    <img class="thumbnail zoom" src="../images/infinity2.jpg" width="300" height="300">
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4">
                    <img class="thumbnail zoom" src="../images/infinity3.jpg" width="300" height="300">
                </div>
            </div>
            <div class="row gallery" style="padding-bottom:3vh;">
                <div class="col-sm-12 col-md-4 col-lg-4">
                    <img class="thumbnail zoom" src="../images/infinity4.jpg" width="300" height="300">
                </div>
                  <div class="col-sm-12 col-md-4 col-lg-4">
                    <img class="thumbnail zoom" src="../images/infinity5.jpg" width="300" height="300">
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4">
                    <img class="thumbnail zoom" src="../images/infinity6.jpg" width="300" height="300">
                </div>
            </div>
                <div class="row gallery" style="padding-bottom:3vh;">
                <div class="col-sm-12 col-md-4 col-lg-4">
                    <img class="thumbnail zoom" src="../images/infinity7.jpg" width="300" height="300">
                </div>
                  <div class="col-sm-12 col-md-4 col-lg-4">
                    <img class="thumbnail zoom" src="../images/infinity8.jpg" width="300" height="300">
                </div>
            </div>


        </div>


        
       



        <!-- <div  id="carruselinfinity">
            
           <vueper-slides class="no-shadow image-fluid" :dragging-distance="50" fixed-height="1000px">

              <vueper-slide  v-for="(slide, i) in slides" :key="i" :image="slide.image" :title="slide.title" :content="slide.content" :link="slide.link" />
            
            </vueper-slides>

        </div>-->
           

    </div>
</template>

<script>
export default {
    name: 'App',
    data(){
        return{

        }
        
    },
    methods:{
 
    }
}
</script>
<style>
.gallery{    
margin-left: 3vw;     
margin-right:3vw;  
}    

.zoom {      
-webkit-transition: all 0.35s ease-in-out;    
-moz-transition: all 0.35s ease-in-out;    
transition: all 0.35s ease-in-out;     
cursor: -webkit-zoom-in;      
cursor: -moz-zoom-in;    
cursor: zoom-in;

}     

.zoom:hover,  
.zoom:active,   
.zoom:focus {
/**adjust scale to desired size, 
add browser prefixes**/
-ms-transform: scale(2.5);    
-moz-transform: scale(2.5);  
-webkit-transform: scale(2.5);  
-o-transform: scale(2.5);  
transform: scale(2.5);    
position:relative;      
z-index:100;  
}

/**To keep upscaled images visible on mobile, 
increase left & right margins a bit**/  
/*@media only screen and (max-width: 768px) {   
.gallery {      
margin-left: 15vw;       
margin-right: 15vw;
}
}*/
</style>

