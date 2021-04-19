<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
        .titulo-principal__numero
          .h3 2
        .h3 Tipos de riesgo

    p.mb-5 No todas las amenazas informáticas pueden generar el mismo impacto en un activo, esto nos permite poder clasificar los riesgos en varios niveles los cuales son:

    .c-tarjeta.c-tarjeta--gradient.mb-5
      .c-tarjeta__txt
        ul.lista-ul
          li(style="color:white;") 
            i.fas.fa-angle-right
            | #[strong Alto:] el impacto generado sobre la organización a muy corto plazo puede ocasionar pérdidas o desarticulación de sus procesos core del negocio.
          li(style="color:white;") 
            i.fas.fa-angle-right
            | #[strong Medio:] el impacto provocado no es tan evidente en el corto plazo, pero si no se corrige con el tiempo puede generar pérdidas o desarticulación de la organización.
          li(style="color:white;") 
            i.fas.fa-angle-right
            | #[strong Bajo:] el impacto causa un daño aislado, que no perjudica a ningún componente de la organización.
      .c-tarjeta__figure
        figure
          img(src="@/assets/tema_2/img_2_01.png", alt="Tipos de riesgo")
    

    p El análisis de riesgos es el primer punto de la gestión de la seguridad de la información de una organización, y es necesario para realizar la gestión de los riesgos, es decir, tomar la decisión de eliminarlos, ignorarlos, transferirlos o mitigarlos y controlarlos, es decir realizar la gestión de riesgos.
    

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
