export default {
  global: {
    componenteFormativo: 'Creación de la automatización',
    descripcionCurso:
      'Para la creación de la automatización de un proceso, se debe tener en cuenta la identificación de ciertos requerimientos o necesidades en la empresa, que busca con la eficacia y precisión de las tareas, minimizando errores y teniendo la certeza de que los datos obtenidos son los deseados.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
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
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Herramientas de automatización',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Caso de estudio de la automatización',
            hash: 't_1_3',
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
            titulo: 'Control de flujos',
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
        titulo: 'Síntesis',
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
        'Alemonterotech.com. (2020). ¿Cuánto debo pagar si quiero implementar RPA con uno de los líderes del mercado en mi empresa?',
      link:
        'https://alemonterotech.com/cuanto-debo-pagar-si-quiero-implementar-rpa-con-uno-de-los-lideres-del-mercado-en-mi-empresa',
    },
    {
      referencia:
        'Colaboradores de los proyectos Wikimedia. (2021). Bucle (programación).',
      link:
        'https://es.wikipedia.org/w/index.php?title=Bucle_(programaci%C3%B3n)&oldid=136397850',
    },
    {
      referencia: 'Definiciones. (2021). Definición de automatización.',
      link: 'https://definicion.de/automatizacion',
    },
    {
      referencia: 'Desarrolloweb.com. (2021). <i>Bucle for each.</i>',
      link: 'https://desarrolloweb.com/articulos/bucle-for-each-vbscript.html',
    },
    {
      referencia:
        'Inforges.es. (2021). Microsoft Flow automatiza todas tus tareas.',
      link:
        'https://www.inforges.es/post/office365-microsoft-flow-automatiza-todas-tus-tareas',
    },
    {
      referencia:
        'Lenguajesdeprogramacion.net. (2019). ¿Qué es un while en programación?',
      link:
        'https://lenguajesdeprogramacion.net/diccionario/que-es-un-while-en-programacion',
    },
    {
      referencia: 'Logicbus.com.mx. (2021). ¿Qué es automatización?',
      link: 'https://www.logicbus.com.mx/automatizacion.php',
    },
    {
      referencia:
        '<i<Mozilla and individual contributors. (2021). do...while_.</i>',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/do...while',
    },
    {
      referencia:
        'Netcall. (2021). <i>Liberty RPA. AI-powered robotic process automation</i>',
      link:
        'https://www.netcall.com/platform/robotic-process-automation/?utm_source=automagica&utm_medium=web',
    },
    {
      referencia:
        'Nirvana, B. (2020). <i>Automagica open source RPA.</i> [Video] YouTube.',
      link: 'https://www.youtube.com/watch?v=OYUj_Gc3XrY&ab_channel=BotNirvana',
    },
    {
      referencia:
        'ProcessMaker.com. (2021). 15 ejemplos de automatización de procesos.',
      link:
        'https://www.processmaker.com/es/blog/15-process-automation-examples',
    },
    {
      referencia:
        'ProcessMaker.com. (2021). Orquestación de procesos vs. Automatización.',
      link:
        'https://www.processmaker.com/es/blog/process-orchestration-vs-automation',
    },
    {
      referencia: 'Robocorp.com. (2021). <i>Automation without boundaries.</i>',
      link: 'https://robocorp.com',
    },
    {
      referencia:
        'Rolón, E., Ruiz, F., García, F., y Piattini, M. (2005). Aplicación de métricas software en la evaluación de modelos de procesos de negocio. ResearchGate.',
      link:
        'https://www.researchgate.net/publication/251645101_aplicacion_de_metricas_software_en_la_evaluacion_de_modelos_de_procesos_de_negocio',
    },
    {
      referencia: 'Selenium.dev. (2021). <i>Selenium automates browsers.</i>',
      link: 'https://www.selenium.dev',
    },
    {
      referencia:
        'Tecnologiasmoviles.com. (2021). Método de <i>Java String</i> format() explicado con ejemplos.',
      link:
        'https://tecnologiasmoviles.com/metodo-de-java-string-format-explicado-con-ejemplos',
    },
    {
      referencia:
        'UiPath.com. (2021). <i>Automation platform - Leading RPA Company.</i>',
      link: 'https://www.uipath.com',
    },
    {
      referencia:
        'Universidad de Granada. (2001) Arrays y cadenas. Universidad de Granada.',
      link: 'https://ccia.ugr.es/~jfv/ed1/c/cdrom/cap5/f_cap52.htm',
    },
    {
      referencia: 'Universidad del País Vasco. (2004). Automatización.',
      link:
        'http://www.sc.ehu.es/sbweb/webcentro/automatica/webcqmh1/pagina%20principal/automatizacion/Automatizacion.htm',
    },
    {
      referencia:
        'Vestertraining.com. (2019). ¿Qué es y cómo funciona la automatización industrial?',
      link:
        'https://vestertraining.com/blog/automatizacion-industrial-que-es-como-funciona',
    },
    {
      referencia: 'Watir.com. (2021). <i>Watir Project.</i>',
      link: 'http://watir.com',
    },
    {
      referencia:
        'WorkMeter.com. (2021). <i>Software</i> de gestión de proyectos.',
      link: 'https://es.workmeter.com/software_gestion_proyectos#workproject',
    },
    {
      referencia:
        'Yooz, E. (2021). La importancia y los beneficios de la automatización de procesos.',
      link:
        'https://www.getyooz.com/es/blog/la-importancia-de-la-automatizacion-de-procesos',
    },
    {
      referencia:
        'Zapier.com. (2021). <i>The easiest way to automate your work.</i>',
      link: 'https://zapier.com',
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
      link: 'https://www.youtube.com/embed/laawNIdX9js',
    },
    {
      texto:
        'ISO/IEC/IEEE 29119 El nuevo estándar internacional para pruebas de software (2015). AEN/CTN 71/SC7/GT26 – Ingeniería del Software y Sistemas de Información – Pruebas del Software.',
      tipo: 'Presentación',
      descarga: ['/downloads/CF002_Anexo2_ISO29119-GT26-20151215.pdf'],
    },
    {
      texto: 'Economía de Rosquilla. (s.f.).',
      tipo: 'Plantilla',
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
      {
        nombre: 'Luis Eyder Ortíz',
        cargo: 'Experto temático',
        centro:
          'Centro de Teleinformática y Producción Industrial Regional Cauca',
      },
      {
        nombre: 'Gustavo Santis Mancipe',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
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
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Angela María Maldonado Jaime',
        cargo: 'Storyboard/Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Revisión video',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Mauricio Gómez Delgado',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Eugenia Mejía López',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Magdi Khalifah',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
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
