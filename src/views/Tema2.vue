<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Automatización de procesos informáticos
    p Para el desarrollo e implementación se utilizará la herramienta UiPath, la cual incluye desarrollo de aplicaciones sin programación, es decir lo puede hacer una persona sin amplios conocimientos de programación, tiene reconocimiento óptico de caracteres (OCR), inteligencia artificial (IA) y aprendizaje automático. Se puede complementar de igual forma con diferentes tipos de programación.  La siguiente imagen muestra una vista del sitio web de UiPath:
    br
    br
    .titulo-sexto.color-acento-contenido.pos13
      h5 Página de Inicio de UiPath

    figure.col-10.pos12
      .video
        iframe(src="https://www.uipath.com" allowtransparency="true" frameborder="0" scrolling="no" width="640" height="390")

    .titulo-segundo.color-acento-contenido(data-aos="zoom-in").pos5.col-12
      h2(data-aos="zoom-in") 2.1 Instalación de UiPath
    p Los pasos generales para la descarga de UiPath son los siguientes:

    .tarjeta.p-4.mb-5.col-10.pos12.azul
        SlyderA(tipo="b")
          
          div
            figure
              img.bor(src='@/assets/template/slyder1.jpg', alt='Texto que describa la imagen')
              .tarjeta.colorcajon7
                img(src='@/assets/curso/1.1.png').col-1.pos14 
                p.negro.col-12 Ingresar a la página oficial de UiPath,  https://www.uipath.com/ para realizar la respectiva instalación de la herramienta, se solicita una cuenta.
        
          div
            figure
              img.bor(src='@/assets/template/slyder2.jpg', alt='Texto que describa la imagen')
              .tarjeta.colorcajon7 
                img(src='@/assets/curso/2.2.png').col-1.pos14 
                p.negro.col-12 Dirigirse hacia Automation Cloud, que es la nube de Automatización donde se pueden hacer varias automatizaciones.

          div
            figure
              img.bor(src='@/assets/template/slyder3.jpg', alt='Texto que describa la imagen')
              .tarjeta.colorcajon7 
                img(src='@/assets/curso/3.png').col-1.pos14 
                p.negro.col-12 Dentro de la nube aparece el Orquestador (Orchestrator Services), para las Automatizaciones mucho más avanzadas.

          div
            figure
              img.bor(src='@/assets/template/slyder4.jpg', alt='Texto que describa la imagen')
              .tarjeta.colorcajon7 
                img(src='@/assets/curso/4.png').col-1.pos14 
                p.negro.col-12 Ingresar a la parte Download Studio, para descargar UiPath Studio. Seleccionar la plataforma Studio y no Studio X, ya que es más completo.

    .tarjeta.colorblue.p-3.mb-5(data-aos="zoom-in")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/video.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-small Se invita al aprendiz a ver el siguiente video, en el que podrá ver en detalle el procedimiento para realizar el proceso de registro e instalación de UiPath.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://youtu.be/lciNSmdzKdA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador

    .titulo-segundo.color-acento-contenido(data-aos="zoom-in").pos5.col-12
      h2(data-aos="zoom-in") 2.2 Workflows   

    img.col-5.pos15(src='@/assets/curso/vector7.jpg' alt='AvatarTop')
    .col-6.pos9
      p Para empezar a trabajar una automatización se debe reconocer el Workflow, ambiente de trabajo:
      ul.lista-ul.lista-ul--color
        li 
          i.fas.fa-angle-right
          | Se crea en primer lugar un nuevo proceso, dentro de proyectos. 
        li 
          i.fas.fa-angle-right
          | Se ubica la carpeta donde se van a guardar dichos procesos (la cual trae por defecto la carpeta de UiPath)
        li 
          i.fas.fa-angle-right
          | Los procesos son las automatizaciones que se van a realizar. 
        li 
          i.fas.fa-angle-right
          | Siempre se debe seleccionar abrir el Workflow, ambiente de trabajo (para conocer poco a poco las herramientas).
        li 
          i.fas.fa-angle-right
          | Se procede a crear el ambiente de trabajo para las automatizaciones. 
    br   
    br
    p.tx Llegar a conocer de fondo todas las funcionalidades que ofrece UiPath es bastante complejo, puesto que se pueden realizar automatizaciones sencillas y complejas, estas últimas relacionadas con lenguajes de programación, Java, C++ y muchos más. 
    br
    .tarjeta.colorblue.p-3.mb-5.pos16
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/video.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-small Se invita al aprendiz a ver el siguiente video, en el que podrá ver en detalle el procedimiento para realizar la creación de un Workflow.
    figure.col-12.pos17
      .video
        iframe(width="560" height="315" src="https://youtu.be/lciNSmdzKdA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
