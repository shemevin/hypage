<template>
  
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    
      <!-- ***** Main Banner Area Start ***** -->
      <section class="section main-banner banner1" data-section="section1">
          <div class="header-text">
              <div class="caption">
                  <h1 class="fade-in-text" style="color: white;">Librería Salvaje</h1>
              </div>
          </div>
      </section>
      <!-- ***** Main Banner Area End ***** -->
        
      <section id="editoriales">
        <div class="container">
            <div class="row">
                <h1>
                  EDITORIALES <br>
                  <img src="../images/book.svg" alt="Libro" width="100" height="50">
                </h1>
            </div>
        </div>
      </section>


        
      <section id="editorialesban">

        <div class="container">

          
          <div class="row">
            
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 5"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="5000">
                  <img src="../images/paraisoperdido.jpg" class="h-75 d-inline-block img-fluid" alt="Paraíso Perdido">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Paraíso Perdido</h5>
                    <!--<p class="text-break">Es una editorial independiente fundada en Guadalajara, México, en 1998.<br> Publican libros impresos, electrónicos e incluso audiolibros de cuento, novela, ensayo literario y crónica.</p>-->
                    <a href="https://editorialparaisoperdido.com/" target="_blank">Sitio Web</a>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src="../images/sextopiso.jpg" class="h-75 d-inline-block img-fluid" alt="Sexto Piso">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Editorial Sexto Piso</h5>
                    <a href="https://sextopiso.mx/" target="_blank">Sitio Web</a>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="../images/era.jpg" class="h-75 d-inline-block img-fluid" alt="Editorial Era">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Editorial Era</h5>
                    <a href="https://www.edicionesera.com.mx/" target="_blank">Sitio Web</a>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="../images/circulopoesia.jpg" class="h-75 d-inline-block img-fluid" alt="...">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Círculo de Poesía</h5>
                    <a href="https://circulodepoesia.com/" target="_blank">Sitio Web</a>
                  </div>
                </div>

                    <div class="carousel-item">
                  <img src="../images/almadia.jpg" class="h-75 d-inline-block img-fluid" alt="...">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Almadía</h5>
                    <a href="https://almadiaeditorial.com/" target="_blank">Sitio Web</a>
                  </div>
                </div>
                        <div class="carousel-item">
                  <img src="../images/trilce.jpg" class="h-75 d-inline-block img-fluid" alt="...">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Trilce Ediciones</h5>
                    <a href="https://www.trilce.mx/" target="_blank">Sitio Web</a>
                  </div>
                </div>
            
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>


          </div>

        </div>

      </section>

      <section id="eventos">

        <div class="container">
          <div class="row">

            <h1 id="h1evento">
              EVENTOS <br>
                <img src="../images/book.svg" alt="Libro" width="100" height="50" >
            </h1>

            <div class="card-group">
              <div class="card">
                <img src="../images/hypatiatalks.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Hypatia Talks</h5>
                  <p class="card-text">La hospitalidad de la palabra en la Librería.</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">
                    <router-link to="/hypatiatalks">Ver más</router-link>
                  </small>
                </div>
              </div>
              <div class="card">
                <img src="../images/anforalog.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Ánfora</h5>
                  <p class="card-text">Lecturas y comenta con sentido.</p>
                </div>
                <div class="card-footer">
                  <a href="/anfora">Ver más</a>
                </div>
              </div>
              <div class="card">
                <img src="../images/remate.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Remate Librero</h5>
                  <p class="card-text">Libros en promo: literatura e infantil, técnicos y poesía, ciencias y humanidades. Tendremos envíos a toda la República también</p>
                </div>
                <div class="card-footer">
                  <a href="/rematelibrero">Ver más</a>
                </div>
              </div>
            </div>


          </div>

        </div>
      </section>


      <section id="contacto">
            
            <h1 style="padding: 2%; margin-top:5%">
              CONTACTO <br>
               <img src="../images/book.svg" alt="Libro" width="100" height="50" >
            </h1>
            
            <div class="container">
            
              <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-6" style="padding:2%; text-shadow: 2px 2px 4px #000000;">
                  <h4 style="color: white;">Telefono: <b>6621699804</b></h4>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6" style="padding:2%; text-shadow: 2px 2px 4px #000000;">
                  <h4 style="color: white;">Correo: <b>contacto@libreriashypatia.com</b></h4>
                </div>
              </div>
 
            </div>

      </section>
      
      <section id="contactoban">
        <div class="container">
        
          <div class="row">
            

            <h2 style="color: white; text-shadow: 2px 2px 4px #000000; margin-top:5%;">Dirección:</h2>
            <h4 style="color: white; text-shadow: 2px 2px 4px #000000;">Zoila Reyna de Palafox #86 entre Everardo Monroy y Coahuila, colonia 5 de mayo</h4>
            <h5 class="txtcolhyp" style="text-shadow: 2px 2px 4px #000000;">Hermosillo, Sonora</h5>
            
            
            <!--Mapa-->
   
              <GMapMap
                    :center="center"
                    :zoom="18"
                    map-type-id="terrain"
                    style="width: 1000vh; height: 800px"
                >
                  <GMapCluster>
                    <GMapMarker
                        :key="index"
                        v-for="(m, index) in markers"
                        :position="m.position"
                        :clickable="true"
                        :draggable="true"
                        @click="center=m.position"
                    />
                  </GMapCluster>
              </GMapMap>


          </div>
        </div>
      </section>
      
      <section>
        <div class="container">
          <div class="row">
            
            <div class="col-md-4 col-xs-4 col-sm-4" style="text-align: center;">
                <a href="https://www.facebook.com/libreriashypatia" target="_blank">
                    <img src="../images/facebook.svg" alt="Facebook Hypatia" width="40" height="40">
                </a>
            </div>
            <div class="col-md-4 col-xs-4 col-sm-4" style="text-align: center;">
                <a href="https://www.instagram.com/libreriahypatia/" target="_blank">
                  <img src="../images/instagram.svg" alt="Instagram Hypatia" width="40" height="40">
                </a>
            </div>
            <div class="col-md-4 col-xs-4 col-sm-4" style="text-align: center;">
                <a href="https://api.whatsapp.com/send?phone=526621699804" target="_blank">
                  <img src="../images/whatsapp.svg" alt="6621699804" width="40" height="40">
                </a>
            </div>

          </div>
        </div>
      </section>
  </div>


</template>

<script>

    export default {
      components:{
      
      
      },
      name: 'App',
      data() {
        

        return {
          
          

          center: {lat: 29.0878857, lng: -110.949414},
          markers: [
            {
              position: {
                lat: 29.087853394368437, lng:  -110.94887160444507
              },
            }, // Along list of clusters
          ]
     
   
        
        
    }
  },
   created:function(){

        

    },
  methods:{

  },
  
}

  
         
    
</script>

<style>
 
</style>
