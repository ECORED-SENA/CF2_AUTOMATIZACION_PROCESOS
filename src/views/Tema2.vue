<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
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
