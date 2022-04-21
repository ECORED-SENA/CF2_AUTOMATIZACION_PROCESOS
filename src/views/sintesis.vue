<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 Finalmente y con el fin de sintetizar el contenido de este componente formativo se presenta el siguiente mapa conceptual:

    .row.justify-content-center.mb-5
      .col-6
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
  
    .row.col-md-4.mb-5.center
      a.anexo(style='background-color:#E9F4FD')(:href="obtenerLink('/downloads/Síntesis.pdf')" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-pdf.svg")
        .anexo__texto
          p <b>Anexo.</b>  Plantilla de pruebas.


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
