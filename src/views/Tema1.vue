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
    
    .cajon-b.colorcajon3.col-10(data-aos="zoom-in")
      p Las retroalimentaciones y capacidades de realizar ajustes con los datos o información, es la que indica lo autosuficiente que puede llegar a ser un sistema automatizado, por ejemplo:
      
    .row
      .col-lg-4.pos2
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img.numero(src='@/assets/curso/1.png' alt='AvatarTop')
          .tarjeta.tarjeta--azul.med2
              h2 Alta dependencia
              p Un brazo robótico que se utiliza en el armado de autos, utilizando sensores y programación, ejecuta las tareas sin intervención humana.

      .col-lg-4.pos2
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img.numero(src='@/assets/curso/2.png' alt='AvatarTop')
          .tarjeta.tarjeta--azul.med2
              h2 Sistema semiautomatizado
              p Un tanque de leche industrial tiene sensor de temperatura, y su apagado o prendido es manual. 
    br

    .col-4.pos3
      h4 Las características de la automatización son:
      ul.lista-ul.lista-ul--color
        li 
          i.fas.fa-angle-right
          | Mejorar la productividad de la empresa.
        li 
          i.fas.fa-angle-right
          | Reducir los costes y mejorar la calidad de producción.
        li 
          i.fas.fa-angle-right
          | Mejorar las condiciones de los trabajadores.
        li 
          i.fas.fa-angle-right
          | Incrementar la seguridad.
        li 
          i.fas.fa-angle-right
          | Mejorar la disponibilidad de los productos.
        li 
          i.fas.fa-angle-right
          | Simplificar las operaciones frente a grandes conocimientos que se requieran de los trabajadores.
        li 
          i.fas.fa-angle-right
          | Optimizar la calidad de productos a través de los procesos constantes y repetitivos.
        li 
          i.fas.fa-angle-right
          | Reduce esfuerzos y tiempos de producción.
        li 
          i.fas.fa-angle-right
          | Minimiza los errores e incrementa la seguridad del personal.
        li 
          i.fas.fa-angle-right
          | La reparación de las máquinas supone un menor costo.
        li 
          i.fas.fa-angle-right
          |Permite el ahorro en la eficiencia y producción.  vector2.svg

    img.col-5.pos4(src='@/assets/curso/vector2.svg' alt='AvatarTop')
    br
    .titulo-segundo.color-acento-contenido(data-aos="zoom-in").pos5.col-12
      h2(data-aos="zoom-in") 1.1 Definición y características de automatización
    br
    br
    img.col-4.pos6(src='@/assets/curso/vector4.jpg' alt='AvatarTop')
    p.col-8  Dentro de los grandes desafíos para el desarrollo económico se encuentra la automatización de procesos. Es una de las grandes características de la Revolución Industrial 4.0, refiriéndose a las capacidades de los sistemas tecnológicos para ejecutar tareas que originalmente son realizadas por los humanos.<br/><br/>Dentro de la automatización se encuentra ajustada la tecnología de la información, que también puede ser entendida como el conjunto de herramientas que controlan, corrigen y visualizan el estado de diversas tareas y flujos de trabajo, y aparte de esto generan reportes específicos de todos los procesos de producción de la organización.<br/><br/>Dichas características convierten a la automatización en un gran aliado para las empresas, facilitando la productividad, permitiendo que el talento humano de la empresa se enfoque en la dimensión real, obteniendo un mayor desempeño, mientras se identifican áreas donde existan margen de errores para la reducción de costos y mejoras en los resultados empresariales y permitiendo dar soluciones con las operaciones autómatas.
    .cajon-b.colorcajon4.col-10(data-aos="zoom-in")
      p.col-12 Los sistemas, en la automatización, se van regulando a sí mismos, por lo cual cada resultado de un proceso incide en su conjunto, integrándolo y modificándolo. Seguidamente tendrá ciertas restricciones que se configuran previamente, sin intervención humana, entonces el sistema estará evaluando, comparando y realizando ajustes y las mismas correcciones en tiempo real, las ventajas de la automatización de procesos son:
    img.col-10.pos7(src='@/assets/curso/ventajas.jpg')      

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
