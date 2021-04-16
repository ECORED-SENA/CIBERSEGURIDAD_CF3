<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción
    
    figure.mb-5
      img(src="@/assets/introduccion/img_intro.png", alt="Ciberseguridad")
    
    p El aumento de la visibilidad del riesgo de ciberseguridad organizacional ha creado una mayor necesidad de precisión, exactitud y puntualidad en los modelos de evaluación de riesgos. A medida que las empresas confían en los sistemas de información y la tecnología de la información, aumenta el riesgo inherente a su infraestructura digital. La matriz de riesgos, una forma de análisis que es muy anterior a las computadoras que continúa convirtiéndose en una parte formal e importante de la gestión de riesgos de seguridad.
      br
      br
      | Durante el desarrollo del componente formativo se deben adquirir los conocimientos referentes a la construcción de una matriz de riesgos informáticos mediante la aplicación de un formato ya preestablecido siguiendo las recomendaciones hecha por la norma ISO 27001.   

</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
