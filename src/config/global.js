export const global = {
  componenteFormativo: 'Formato matriz de riesgo',
  descripcionCurso:
    'El propósito del componente es proporcionar una guía para realizar una matriz de riesgo. Las evaluaciones de riesgos son parte de un proceso general de gestión de riesgos, que proporciona la información necesaria para determinar los ejes de acción apropiados en respuesta a los riesgos identificados. En particular se tiene un formato como guía para llevar a cabo cada uno de los pasos en el proceso de evaluación de riesgos, es decir, prepararse para la evaluación, realizar la evaluación, comunicar los resultados de la evaluación y hacer un uso efectivo de la matriz.',
  imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
  fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
}

export const menuPrincipal = {
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
      titulo: 'Concepto de riesgo',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '1.1',
          titulo: 'Tipos de riesgo',
          hash: 't_1_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.2',
          titulo: 'Matriz de riesgos informáticos',
          hash: 't_1_2',
        },
      ],
    },
  ],
  subMenu: [
    // {
    //   nombreRuta: 'actividad',
    //   icono: 'far fa-question-circle',
    //   titulo: 'Actividad didáctica',
    //   desarrolloContenidos: true,
    // },
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
}

export const creditos = {
  liderEquipo: {
    nombre: 'Maria Camila Garcia Santamaria',
    cargo: 'Líder del equipo',
  },
  contenidoInstruccional: [
    {
      nombre: 'Rafael Neftalí Lizcano Reyes',
      cargo: 'Asesor metodológico y pedagógico',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Henry Eduardo Bastidas Paruma',
      cargo: 'Experto temático',
      centro: 'Centro de Comercio y Servicios',
      regional: 'Regional Tolima',
    },
    {
      nombre: 'Carlos Andrés Rodríguez',
      cargo: 'Diseñador Instruccional',
      centro: 'Centro de Diseño y Metrología',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'Oscar Absalón Guevara',
      cargo: 'Evaluador Instruccional',
      centro: 'Centro de Gestión Industrial',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'María Isabel Román Rueda',
      cargo: 'Revisora de estilo',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
  ],
  desarrolloProducto: [
    {
      nombre: 'Francisco José Lizcano Reyes',
      cargo: 'Responsable del equipo',
    },
    {
      nombre: 'Leyson Fabian Castaño Perez',
      cargo: 'Soporte organizacional',
    },
    {
      nombre: [
        'Eulises Orduz Amezquita',
        'José Jaime Luis Tang Pinzón',
        'Maria Camila Ovalle Ospina',
        'Lady Adriana Ariza Luque',
        'Oleg Litvin',
        'Wilson Andres Arenales Cáceres',
      ],
      cargo: 'Diseño web y Producción Audiovisual',
    },
    {
      nombre: [
        'Daniel Ricardo Mutis Gómez',
        'Jhon Jairo Urueta Alvarez',
        'Lizeth Karina Manchego Suarez',
      ],
      cargo: 'Desarrollo Front-End',
    },
    {
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
  ],
  gestoresRepositorio: [
    {
      nombre: 'Milady Tatiana Villamil Castellanos',
      cargo: ['Desarrollo front-end', 'Validación de recursos'],
      centro: 'Centro de comercio y servicios',
      regional: 'Regional Tolima',
    },
  ],
}

export const referencias = [
  {
    referencia:
      'Cevallos, M., Dennise, J., & Alice, N. S. B. (2009). Administración de riesgos de tecnología de información de una empresa del sector informático.',
    link: 'http://www.dspace.espol.edu.ec/bitstream/123456789/261/1/437.pdf',
  },
  {
    referencia:
      'Matalobos, J. (2009), Análisis de Riesgos de Seguridad, [Trabajo de grado].',
    link: 'http://oa.upm.es/1646/1/PFC_JUAN_MANUEL_MATALOBOS_VEIGAa.pdf',
  },
  {
    referencia:
      'SIGWEB. (s. f.). Matriz de Riesgo, Evaluación y Gestión de Riesgos.',
    link:
      'http://www.sigweb.cl/wp-content/uploads/biblioteca/MatrizdeRiesgo.pdf',
  },
  {
    referencia:
      'SGSI - 08 Análisis y valoración de riesgos. Metodologías. (2010, 12 mayo). [Vídeo]. YouTube.',
    link: 'https://www.youtube.com/watch?v=g7EPuzN5Aw',
  },
  {
    referencia:
      'Romero C., M. I., Figueroa M, G. L., Vera N., D. S., Álava C., J. E., Parrales A, G. R., Álava M, C. J., Murillo Q, Á. L., & Castillo M, M. A. (2018). INTRODUCCIÓN A LA SEGURIDAD INFORMÁTICA Y EL ANÁLISIS DE VULNERABILIDADES. 3ciencias.',
    link:
      'https://www.3ciencias.com/wp-content/uploads/2018/10/Seguridad-inform%C3%A1tica.pdf',
  },
  {
    referencia:
      'Velázquez Martínez, A. I. (2011). Aplicación de la Seguridad Informática. aplicación de seguridad informática.',
    link:
      'http://aplicaciondeseguridadinformatica.blogspot.com/2011/08/b-clasificacion-de-los-principales.html',
  },
]

export const glosario = [
  {
    termino: 'Confidencialidad',
    significado:
      'propiedad que determina que la información sólo esté disponible y sea revelada a individuos, entidades o procesos autorizados',
  },
  {
    termino: 'Disponibilidad',
    significado:
      'propiedad de que la información sea accesible y utilizable por solicitud de una entidad autorizada, cuando ésta así lo requiera.',
  },
  {
    termino: 'Integridad',
    significado:
      'propiedad de salvaguardar la exactitud y estado completo de los activos',
  },
  {
    termino: 'Riesgo',
    significado:
      'es todo tipo de vulnerabilidades, amenazas que pueden ocurrir sin previo aviso y producir numerosas pérdidas para las empresas',
  },
  {
    termino: 'SP-830',
    significado:
      'special Publication 830, Guía de gestión de riesgo para sistemas de tecnología de la información – recomendaciones del instituto nacional de estándares y tecnología',
  },
]

export const complementario = [
  {
    texto:
      'Sena, L., & Tenzer, S. M. (2004). Introducción a Riesgo informático. Facultad de Ciencias Económicas y de Administración. Universidad de la República de Montevideo. ',
    tipo: 'PDF',
    descarga:
      '/downloads/complementarios/FCEA_Catedra_Introduccion_a_la_Computacion.pdf',
  },
]
