<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 Finalmente y con el fin de sintetizar el contenido de este componente formativo se presenta el siguiente mapa conceptual:

    .row.justify-content-center.mb-5
      .col-6
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
  
    .tarjeta.col-12.col-md-8.color-acento-botones.p-3.mb-5.center(style='background-color:#EBF6FF')
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/template/icono-pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Descargar Síntesis
              p.text-small  Con el fin de sintetizar el contenido de este componente formativo se presenta el siguiente mapa conceptual  
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/síntesis.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download


</template>

<script>
export default {
  name: 'Sintesis',
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
