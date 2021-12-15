<template>

    <nav class="bg-hypa navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">
           <router-link class="navbar-brand" to="/">
              <img src="./images/hypatialogo.png" alt="Libreria Hypatia" height="50">
           </router-link>

            <button  class="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="background-color: white;">
                <span class="navbar-toggler-icon "></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
                <ul class="navbar-nav ms-auto flex-nowrap">
                    <li class="nav-item">
                      <router-link to="/" class="nav-link m-2 menu-item">
                        Inicio
                      </router-link>
                    </li>
                    <li class="nav-item">
                        <a href="/#editoriales" class="nav-link m-2 menu-item">
                          Editoriales
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/#eventos" class="nav-link m-2 menu-item">
                          Eventos
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/#contacto" class="nav-link m-2 menu-item">
                          Contacto
                        </a>
                    </li>
                    <li class="nav-item">
                      <router-link to="/ediciones" class="nav-link m-2 menu-item">
                        Hypatia Ediciones
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/resenas" class="nav-link m-2 menu-item">
                        Resenas / Blog
                      </router-link>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>


  <router-view/>
  
  
  <footer class="fixed-bottom">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <p><i class="fa fa-copyright"></i> Copyright 2021 por Librerias Hypatia
           | Design: <a href="https://www.shemevin.com" rel="sponsored" target="_parent">Shemevin</a></p>
        </div>
      </div>
    </div>
  </footer>

</template>

<style>



@font-face {
  font-family: 'sansationregular';
  src: url('./fonts/Sansation-Regular-webfont.ttf');
  font-weight: normal;
  font-style: normal;

}
*{
  font-family: 'sansationregular';
}
ul{
  text-transform: uppercase;
}
body{
  overflow-x: hidden !important;
}
.libroschidos{
  padding: 7%;
}

.bg-hypa{
  background-color:#0a0e28;

}
.bg-hypa-resto{
  background-color:#131b50;
}
.txtcolhyp{
  color:#f5a425;
}

.nav-link{
  color: #fff !important;
}

h1{
  color: #fff;
}
#h1evento{
  padding: 5%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  /*padding: 30px;*/
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/**Estilo del banner 1 */
.main-banner {
  position: relative;
  max-height: 100%;
  overflow: hidden;
  margin-bottom: -7px;
}
.main-banner .caption {
  text-align: center;
  position: absolute;
  width: 80%;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.banner1 {
  background-image: linear-gradient(to bottom, rgba(167, 185, 250, 0.877), rgba(82, 63, 245, 0.739)),url(images/banner1.jpg);
  min-height: 800px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
/**final banner1 */

/**seccion editoriales */
#editoriales{
  padding: 5%;
}
#editorialesban{
    background-image: linear-gradient(to bottom, rgba(167, 185, 250, 0.877), rgba(82, 63, 245, 0.739)), url(images/munimg1.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #0a0e28;
    padding: 120px 0px;
     background-attachment: fixed;
  background-position: center;
}
#contactoban{
  background-image: linear-gradient(to bottom, rgba(167, 185, 250, 0.877), rgba(82, 63, 245, 0.739)),url(images/bannerhypatia.jpg);
  min-height: 1000px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
/** seccion eventos */

#eventos{
  align-content: center;
}

/** seccion contactos */


/* Footer */

footer {
    background-color: #0a0e28;
    text-align: center;
}

footer p {
    margin-bottom: 0px;
    padding: 10px 0px;
    color: #fff;
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.5px;
}

footer p a,
footer p a:hover {
    color: #f5a425;
}
@media screen and (max-width: 767px) {
  footer p {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.25px;
  }
}

/** estilos varios */
.backyellow{
  background-color: #f5a425;
}

/** estilo de paginas */

#carruselinfinity{
  padding-top: 15vh;
}





</style>
<script>
export default {
 
}
</script>