export default {
  global: {
    componenteFormativo: 'Creación de la automatización',
    descripcionCurso:
      'Para la creación de la automatización de un proceso, se debe tener en cuenta la identificación de ciertos requerimientos o necesidades en la empresa, que busca con la eficacia y precisión de las tareas, minimizando errores y teniendo la certeza de que los datos obtenidos son los deseados.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Automatización de procesos informáticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición y características de automatización',
            hash: 'encabezados',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Herramientas de automatización',
            hash: 'parrafos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Caso de estudio de la automatización',
            hash: 'botones',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Desarrollo e implementación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Instalación de <i>UiPath</i>',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '<i>Workflows</i>',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Control de Flujos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Automatización del proceso',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Evaluación de procesos de negocio',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Informe de documentación y pruebas',
            hash: 't_2_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Netcall. (2021). Liberty RPA. AI-powered robotic process automation.',
      link:
        'https://www.netcall.com/platform/robotic-process-automation/?utm_source=automagica&utm_medium=web',
    },
    {
      referencia: 'Automatización. (2004).',
      link:
        'http://www.sc.ehu.es/sbweb/webcentro/automatica/webcqmh1/pagina%20principal/automatizacion/Automatizacion.htm',
    },
    {
      referencia: 'Desarrolloweb. (2021). Bucle For Each.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000025549',
    },
    {
      referencia:
        'Colaboradores de los proyectos Wikimedia. (2021). Bucle (programación).',
      link:
        'https://es.wikipedia.org/w/index.php?title=Bucle_(programaci%C3%B3n)&oldid=136397850',
    },
    {
      referencia:
        'alemonterotech (2020). ¿Cuánto debo pagar si quiero implementar RPA con uno de los líderes del mercado en mi empresa?',
      link:
        'https://alemonterotech.com/cuanto-debo-pagar-si-quiero-implementar-rpa-con-uno-de-los-lideres-del-mercado-en-mi-empresa',
    },
    {
      referencia: 'Definicion.de. (2021). Definición de automatización.',
      link: 'https://definicion.de/automatizacion',
    },
    {
      referencia: 'Mozilla and individual contributors (2021). do...while.',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/do...while',
    },
    {
      referencia: 'UiPath (2021). Automation Platform - Leading RPA Company.',
      link: 'https://www.uipath.com',
    },
    {
      referencia: 'Logicbus. (2021).  ¿Qué es automatización?',
      link: 'https://www.logicbus.com.mx/automatizacion.php',
    },
    {
      referencia:
        'Tecnologías Moviles. (2021). Método de Java String format() explicado con ejemplos.',
      link:
        'https://tecnologiasmoviles.com/metodo-de-java-string-format-explicado-con-ejemplos',
    },
    {
      referencia:
        'Nirvana, B. (2020). Automagica Open Source RPA. [Video] Youtube.',
      link: 'https://www.youtube.com/watch?v=OYUj_Gc3XrY&ab_channel=BotNirvana',
    },
    {
      referencia: 'Robocorp. (2021). Automation without Boundaries.',
      link: 'https://robocorp.com',
    },
    {
      referencia:
        'ProcessMaker. (2021).  Orquestación de procesos vs. Automatización.',
      link:
        'https://www.processmaker.com/es/blog/process-orchestration-vs-automation',
    },
    {
      referencia: 'Universidad de Granada. (2001) Arrays y cadenas.',
      link: 'https://ccia.ugr.es/~jfv/ed1/c/cdrom/cap5/f_cap52.htm',
    },
    {
      referencia:
        'Lenguajesdeprogramacion  (2019) ¿Qué es un While en programación?',
      link:
        'https://lenguajesdeprogramacion.net/diccionario/que-es-un-while-en-programacion',
    },
    {
      referencia:
        '¿Qué es y cómo funciona la automatización Industrial? (2019, Julio 12).',
      link:
        'https://vestertraining.com/blog/automatizacion-industrial-que-es-como-funciona',
    },
    {
      referencia:
        'Rolón, E., Ruiz, F., García, F., & Piattini, M. (2005). Aplicación de Métricas Software en la Evaluación de Modelos de Procesos de Negocio. ResearchGate.',
      link:
        'https://www.researchgate.net/publication/251645101_aplicacion_de_metricas_software_en_la_evaluacion_de_modelos_de_procesos_de_negocio',
    },
    {
      referencia: 'Selenium. (2021).',
      link: 'https://www.selenium.devdatascope',
    },
    {
      referencia: '(2021) Top 5 herramientas para automatizar procesos.',
      link:
        'https://datascope.io/es/blog/las-5-mejores-herramientas-para-automatizar-procesos',
    },
    {
      referencia: 'UNO. (2021)',
      link:
        'https://www.inforges.es/post/office365-microsoft-flow-automatiza-todas-tus-tareas',
    },
    {
      referencia: 'Watir Project. (2021). Watir Project.',
      link: 'http://watir.com',
    },
    {
      referencia: 'WorkMeter. (2021). Software_gestion_proyectos.',
      link: 'https://es.workmeter.com/software_gestion_proyectos#workproject',
    },
    {
      referencia:
        'Yooz. (2021). La importancia y los beneficios de la automatización de procesos.',
      link:
        'https://www.getyooz.com/es/blog/la-importancia-de-la-automatizacion-de-procesos',
    },
    {
      referencia: 'Zapier. (2021). The easiest way to automate your work.',
      link: 'https://zapier.com',
    },
    {
      referencia:
        'ProcessMaker. (2021).  15 Ejemplos de Automatización de Procesos',
      link:
        'https://www.processmaker.com/es/blog/15-process-automation-examples',
    },
  ],
  glosario: [
    {
      termino: 'Atendidos',
      significado: 'Con intervención humana.',
    },
    {
      termino: 'Casos de prueba',
      significado: 'Casos de prueba Descripción de pruebas.',
    },
    {
      termino: 'Desatendidos',
      significado: 'Su intervención humana.',
    },
    {
      termino: 'RPA',
      significado:
        'Automatización robótica de procesos, por sus siglas en inglés.',
    },
    {
      termino: 'UiPath',
      significado: 'Herramienta de automatización.',
    },
  ],
  complementario: [
    {
      texto:
        'Quality-Stream. (2020). Cómo Escribir Casos de Pruebas | Paso a paso.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=laawNIdX9js&ab_channel=Quality-Stream',
    },
    {
      texto:
        'ISO/IEC/IEEE 29119 El nuevo estándar internacional para pruebas de software (2015). AEN/CTN 71/SC7/GT26 – Ingeniería del Software y Sistemas de Información – Pruebas del Software.',
      tipo: 'Página web',
      descarga:
        'https://in2test.lsi.uniovi.es/gt26/presentations/ISO29119-Presentacion-GT26-20151215.SanSebastian.pdf',
    },
    {
      texto: 'Economía de Rosquilla. (s.f.).',
      tipo: 'Página web',
      descarga: ['/downloads/OKEst_CF002_Anexo3_Plantilla-Pruebas.xlsx'],
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
