<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Desarrollo e implementación
    p Para el desarrollo e implementación se utilizará la herramienta <i>UiPath</i>, la cual incluye desarrollo de aplicaciones sin programación, es decir lo puede hacer una persona sin amplios conocimientos de programación, tiene reconocimiento óptico de caracteres (OCR), inteligencia artificial (IA) y aprendizaje automático. Se puede complementar de igual forma con diferentes tipos de programación.  La siguiente imagen muestra una vista del sitio web de <i>UiPath</i>:
    br
    br
    .titulo-sexto.color-acento-contenido.pos13
      h5 Figura 1
      p Página de Inicio de <i>UiPath</i>

    figure.col-10.pos12(data-aos="slide-right")
      .video
        iframe(src="https://www.uipath.com" allowtransparency="true" frameborder="0" scrolling="no" width="640" height="390")

    separador

    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in").pos5.col-12
      h2(data-aos="zoom-in") 2.1 Instalación de UiPath
    p Los pasos generales para la descarga de UiPath son los siguientes:

    .tarjeta.p-4.mb-5.col-10.pos12.azul(data-aos="slide-right")
        SlyderA(tipo="b")
          
          div
            figure
              img.bor(src='@/assets/template/slyder1.jpg', alt='Texto que describa la imagen')   
              .tarjeta.colorcajon7
                img(src='@/assets/curso/1.1.png').col-1.pos14 
                p.negro.col-12 Ingresar a la página oficial de <i>UiPath</i>, <a href="https://www.uipath.com/">https://www.uipath.com/</a> para realizar la respectiva instalación de la herramienta, se solicita una cuenta.
        
          div
            figure
              img.bor(src='@/assets/template/slyder2.jpg', alt='Texto que describa la imagen')
              .tarjeta.colorcajon7 
                img(src='@/assets/curso/2.2.png').col-1.pos14 
                p.negro.col-12 Dirigirse hacia <i>automation Cloud</i>, que es la nube de automatización donde se pueden hacer varias automatizaciones.

          div
            figure
              img.bor(src='@/assets/template/slyder3.jpg', alt='Texto que describa la imagen')
              .tarjeta.colorcajon7 
                img(src='@/assets/curso/3.png').col-1.pos14 
                p.negro.col-12 Dentro de la nube aparece el orquestador (<i>Orchestrator Services</i>), para las automatizaciones mucho más avanzadas.

          div
            figure
              img.bor(src='@/assets/template/slyder4.jpg', alt='Texto que describa la imagen')
              .tarjeta.colorcajon7 
                img(src='@/assets/curso/4.png').col-1.pos14 
                p.negro.col-12 Ingresar a la parte <i>download studio</i>, para descargar <i>uiPath studio</i>. Seleccionar la plataforma <i>studio</i> y no <i>studio X</i>, ya que es más completo.

    .row(data-aos="slide-right")
      .tarjeta.colorblue.p-3.mb-5(data-aos="zoom-in")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/video.png")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.text-small Se invita al aprendiz a ver el siguiente video, en el que podrá ver en detalle el procedimiento para realizar el proceso de registro e instalación de <i>UiPath</i>.
      figure.mb-5(data-aos="slide-right")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/wUHUjMZvINg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    Separador

    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in").pos5.col-12
      h2(data-aos="zoom-in") 2.2 <i>Workflows</i>   

    img.col-5.pos15(src='@/assets/curso/vector7.jpg' alt='AvatarTop')(data-aos="slide-left")
    .col-6.pos9
      p Para empezar a trabajar una automatización se debe reconocer el <i>Workflow</i>, ambiente de trabajo:
      ul.lista-ul.lista-ul--color
        li 
          i.fas.fa-angle-right
          p Se crea en primer lugar un nuevo proceso, dentro de proyectos. 
        li 
          i.fas.fa-angle-right
          p Se ubica la carpeta donde se van a guardar dichos procesos (la cual trae por defecto la carpeta de UiPath)
        li 
          i.fas.fa-angle-right
          p Los procesos son las automatizaciones que se van a realizar. 
        li 
          i.fas.fa-angle-right
          p Siempre se debe seleccionar abrir el <i>Workflow</i>, ambiente de trabajo (para conocer poco a poco las herramientas).
        li 
          i.fas.fa-angle-right
          p Se procede a crear el ambiente de trabajo para las automatizaciones. 
    br   
    br
    p.tx Llegar a conocer de fondo todas las funcionalidades que ofrece <i>UiPath</i> es bastante complejo, puesto que se pueden realizar automatizaciones sencillas y complejas, estas últimas relacionadas con lenguajes de programación, Java, C++ y muchos más. 
    br
    br
    br
    br
    .row(data-aos="slide-left")
      .tarjeta.colorblue.p-3.mb-5.col-9
        .row.justify-content-around.align-items-center
          .col-1.col-sm-1.col-lg-1
            img(src="@/assets/curso/video.png")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.text-small Se invita al aprendiz a ver el siguiente video, en el que podrá ver en detalle el procedimiento para realizar la creación de un <i>Workflow</i>.
    .row(data-aos="slide-left")
      figure.col-12.pos17
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/wUHUjMZvINg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    br
    separador

    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in").pos5.col-12
      h2(data-aos="zoom-in") 2.3 Control de flujos 

    img.col-5.pos15(src='@/assets/curso/vector8.jpg' alt='AvatarTop')(data-aos="slide-left")
    .col-6.pos9
      p Los controladores de flujo permiten monitoreo y control en tiempo real. Es la capacidad de
      ul.lista-ul.lista-ul--color
        li 
          i.fas.fa-angle-right
          | Controlar la variación. 
        li 
          i.fas.fa-angle-right
          | Reducir errores.
        li 
          i.fas.fa-angle-right
          | Mejorar la calidad. 
        li 
          i.fas.fa-angle-right
          | Aumentar la eficiencia de los procesos.
    .row.col-12  
      h3 Tipos y estructura de datos
      p Una variable es el valor de un objeto que puede cambiar o variar, de ahí su nombre de variable. Antes de crear una variable se debe declarar o nombrar, luego se le asocia un identificador, nombre y tipo de visibilidad, van muy relacionadas con los tipos de datos, estos son:
    br
    .cajon-b.colorcajon8(data-aos="slide-up")
      h3 Descripción de algunos tipos de datos
    br
    .tabla-a.color-acento-contenido.mb-5.col-8.pos12(data-aos="slide-up")
      table
        thead
          tr
            th Tipos de datos
            th Descripción
           
        tbody
          tr
            td Int
            td Resolución 1841 de 2013
          tr
            td Char
            td Carácter

          tr
            td Float
            td Almacena valores reales en punto flotante

          tr
            td Double
            td Almacena valores reales en doble precisión

          tr
            td Void
            td Se utiliza para definir una función que no devuelve ningún valor o declarar puntos genéricos.

    br
    .cajon-b.colorcajon8(data-aos="slide-up")
      h3 Diagrama estructuras de datos
    br
    img.col-8.pos12(src='@/assets/template/grafica3.svg')(data-aos="slide-up")
    separador

    #t_2_4
    .titulo-segundo.color-acento-contenido(data-aos="zoom-in").pos5.col-12
      h2(data-aos="zoom-in") 2.4 Automatización del proceso 
    br
    p A continuación se relacionan algunos conceptos involucrados en la automatización de procesos:
    .titulo-sexto.color-acento-contenido(data-aos="slide-up")
      p Tabla 1 Conceptos generales de automatización de procesos
    .tabla-b.color-acento-contenido.mb-5(data-aos="slide-up")
      .tabla-b__header
        h5.mb-0 Conceptos generales de automatización de procesos
      table
        tr
          th Automatización de procesos
          td Es la manera de emplear tecnología para realizar tareas sin necesidad de la intervención humana.<br/><br/>Las labores rutinarias, manuales y responsabilidades son transferidas a las máquinas.
        tr
          th Orquestación de procesos
          td Las organizaciones pueden tener una, muchas o miles de automatizaciones a través de sus sistemas.<br/><br/>Para coordinar todas las automatizaciones, es necesario la orquestación de procesos.<br/><br/>La orquestación es la estrategia para la ejecución de las Automatizaciones de manera coordinada y eficiente. La orquestación encadena de manera eficaz las automatizaciones que funcionan en diferentes entornos. 
        tr
          th Secuencia de eventos
          td Con el uso de la orquestación, se logran identificar diferentes tareas y secuenciarlas para lograr velocidad y eficiencia.
        tr
          th Elimina redundancias
          td Ayuda a identificar nuevas oportunidades aumentando la eficiencia. Si dos flujos de trabajo corren en paralelo, la orquestación puede unir los flujos de trabajo para ejecutar una tarea en vez de dos.
        tr
          th Promulga políticas estandarizadas
          td La orquestación reúne todas las automatizaciones bajo un solo paraguas. Es como el conductor de un tren, enlazando coches, mantiene los movimientos a muy buena velocidad y permite la comunicación entre las automatizaciones.
        tr
          th Encajes de la Automatización y la Orquestación
          td La automatización ayuda a eliminar tareas y la orquestación las reúne a todas y las enruta.
        tr
          th Ahorro de costes
          td Pueden reducir los costos y eliminar costos innecesarios.
        tr
          th Procesos más regulados
          td Se pueden realizar políticas masivas que de manera ágil filtran a cada automatización dentro del sistema, sin necesidad de entrar a cada una.
        tr
          th Mayor agilidad
          td Mayor agilidad La automatización y la orquestación abren un nuevo mercado de herramientas en la nube, en la cual se pueden seleccionar servicios preconstruidos y adicionar o ajustar a las necesidades.
    separador

    
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in").pos5.col-12
      h2(data-aos="zoom-in") 2.5 Evaluación de procesos de negocio
    p Los procesos de negocio y procesos de <i>software</i> son similares puesto que capturan las principales características de una serie de actividades que se ordenan para lograr una meta específica.<br/><br/>El objetivo de un proceso de negocio es obtener resultados beneficiosos, generalmente de un producto o servicio para los clientes o usuarios del proceso. Algunos ejemplos de la documentación de un proceso son:
    .tarjeta.p-4.mb-5.col-10.pos12.azul(data-aos="slide-up")
        SlyderA(tipo="b")
          
          div
            figure
              img.bor(src='@/assets/template/slyder1.1.svg', alt='Texto que describa la imagen').m-t1-top2
              .tarjeta.colorcajon7
                p.negro.col-12 El director del DCC recibe una petición de un académico para una comisión en el exterior. Esta debe estar acompañada de la documentación pertinente.
        
          div
            figure
              img.bor(src='@/assets/template/slyder1.2.svg', alt='Texto que describa la imagen')
              .tarjeta.colorcajon7 
                p.negro.col-12 Ejemplo de orden de compra, reclamos, productos defectuosos.

          div
            figure
              img.bor(src='@/assets/template/slyder1.3.svg', alt='Texto que describa la imagen')
              .tarjeta.colorcajon7 
                p.negro.col-12 Ciclo de vida del BPM como un proceso de mejoramiento continuo

    Separador
    
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="zoom-in").pos5.col-12
      h2(data-aos="zoom-in") 2.6 Informe de documentación y pruebas
    p Las tareas que se deben realizar para determinar un formato de pruebas son:
    br
    br
    img(src='@/assets/curso/vector9.jpg').imgpos3
    .row.mb-5(data-aos="slide-left")
      .col-md-12.mb-5.mb-md-0
        LineaTiempoD.color-acento-contenido
          p.text-small(numero="1" titulo="Diseño de las pruebas").m-3
            ul(style="list-style-type: square")
              p Identificar la técnica o técnicas de pruebas para utilizar en las pruebas, dependiendo del sistema lo que se quiere probar.

          p.text-small(numero="2" titulo="Generación de los casos de pruebas").m-3
            ul(style="list-style-type: square")
              p Ayudan a determinar el conjunto de entradas, las condiciones de la ejecución y los resultados esperados para el objetivo particular.

          p.text-small(numero="3" titulo="Definir procedimientos de las pruebas").m-3
            ul(style="list-style-type: square")
              p Se trata de especificar cómo se llevan a cabo los procesos de pruebas, quien lo realiza, cuándo y demás descripciones.
          
          p.text-small(numero="4" titulo="Ejecución de la prueba").m-3
            ul(style="list-style-type: square")
              p Se ejecuta la prueba aplicando los casos que se han generado previamente y logrando identificar los posibles fallos que se producen al comparar los resultados.

          p.text-small(numero="5" titulo="Realización del informe").m-3
            ul(style="list-style-type: square")
              p Con los resultados de los casos de prueba aplicados, se verifica y se documentan los que pasaron satisfactoriamente, los fallos y errores.

    .cajon-b.colorcajon9(data-aos="slide-up")
      span Se solicita al aprendiz ver el video 
      span.text-bold ¿Cómo escribir los casos de pruebas?
      span , ubicado en la sección de material complementario, algunas técnicas de pruebas son:
    .tarjeta.cajontitle4
      img(src='@/assets/curso/accion.png').col-4.imgpos4
      p.col-5.tx2 A nivel mundial se ha establecido un formato estándar para la realización de los campos de pruebas, revisar la ISO 29119. 
      .row.tx3.col-4
          a.anexo.mb-4(:href="obtenerLink('/downloads/CF002_Anexo2_ISO29119-GT26-20151215.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p ISO/IEC/IEEE 29119 El nuevo estándar internacional para pruebas de software (2015, diciembre). AEN/CTN 71/SC7/GT26 – Ingeniería del Software y Sistemas de Información – Pruebas del Software.

      p.col-5.tx4 Se invita al aprendiz a consultar la plantilla ejemplo para referenciar las pruebas, ubicada en la sección de material complementario.      

      .row.tx3.col-4
          a.anexo(:href="obtenerLink('/downloads/OKEst_CF002_Anexo3_Plantilla-Pruebas.xlsx')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-xml.svg")
            .anexo__texto
              p <b>Anexo.</b>  Plantilla de pruebas.

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
