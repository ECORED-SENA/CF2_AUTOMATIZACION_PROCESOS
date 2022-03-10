<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Automatización de procesos informáticos

    p La automatización es un sistema donde las tareas de producción se transfieren desde los operadores humanos hacia un conjunto de elementos tecnológicos. Se podría decir que una automatización consta de dos partes: 
    .row
      img(src='@/assets/curso/vector1.svg' alt='AvatarTop')
      .col-lg-5.pos1
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.numero(src='@/assets/curso/1.png' alt='AvatarTop')
          .tarjeta.tarjeta--azul.med1
              .p-2
              h2 La parte operativa
              p Está directamente relacionada con la máquina, son los elementos que hacen que la máquina actúe, se mueva y realice la operación que se desea. 

      .col-lg-5.pos1
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.numero(src='@/assets/curso/2.png' alt='AvatarTop')
          .tarjeta.tarjeta--azul.med1
              .p-2
              h2 La parte de mando
              p Suele ser programable, es un sistema de fabricación automatizado, en el centro del sistema, está el autómata programable. 
    br
    .titulo-segundo.color-acento-contenido(data-aos="zoom-in")
    h2(data-aos="zoom-in") 1.1 Definición y características de automatización
    br
    p También se puede decir que la automatización es el conjunto de procesos informáticos, mecánicos y electromecánicos, operando con una mínima o casi nula intervención humana. Se utilizan normalmente para optimizar y realizar mejoras en el funcionamiento de procesos en las industrias, campo, estadios o cualquier lugar que posea un sistema informático y desee operar sus labores de manera más ágil y eficiente. La automatización logra realizar tareas que se desarrollan por sí solas sin la participación de un individuo.
      

</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
