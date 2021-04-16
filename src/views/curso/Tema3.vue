<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
        .titulo-principal__numero
          .h3 3
        .h3 Matriz de riesgos informáticos 

    p.mb-5 La construcción de la matriz de riesgos informáticos en una organización es el insumo más importante para identificar cuáles son esos activos que son necesarios para el cumplimiento de su misión y visión, toda vez que permite conocer cuáles son esas amenazas y la probabilidad de que tienen cada una de ellas de materializarse y provocar un impacto determinado en la organización, el identificarlas nos facilitara el proceso de definir y seleccionar cuales son las alternativas de mitigación que se podrán aplicar a fin de poder realizar una gestión adecuada del riesgo.

    .titulo-segundo
      #t_3_1.h4 3.1 Fundamentos de la matriz de riesgos

    p.mb-5 La matriz se basa en el método de análisis de riesgo con un grado de riesgo, usando la fórmula:

    .tarjeta.tarjeta--gris.p-0      
      .tarjeta.tarjeta--acento(style="border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;")
        p(style="color:white;").text-center Riesgo = probabilidad de amenaza y magnitud de daño (impacto)
      .row.justify-content-center.align-items-center.p-5
        .col-12.col-lg-6
          p La probabilidad de amenaza y magnitud de daño pueden tomar los valores y condiciones respectivamente:
            br
            br
            | #[strong 1 = Insignificante (incluido Ninguna)]
            br
            | #[strong 2 = Baja]
            br
            | #[strong 3 = Mediana]
            br
            | #[strong 4 = Alta] 
        .col-12.col-lg-6
          figure
            img(src="@/assets/tema_3/img_3_1_01.svg", alt="Matriz grafo riesgo", style="width:250px; display:block; margin: 0 auto;")         
      hr(style="margin: 0 3rem;")   

      .row.justify-content-center.align-items-center.p-5.mb-5
        .col-12.col-lg-7.me-0.me-lg-5.mb-4.mb-lg-0
          p El riesgo, que es el producto de la multiplicación de Probabilidad de Amenaza por Magnitud de Daño, está agrupado en tres rangos, y para su mejor visualización, se aplica diferentes colores.
        .col-12.col-lg-auto
          p #[strong Bajo Riesgo = 1 – 6] #[strong(style="color: green") (Verde)]
          p #[strong Medio Riesgo = 8 – 9] #[strong(style="color: orange;") (Amarillo)]
          p #[strong Alto Riesgo = 12 – 16] #[strong(style="color: red;") (Rojo)]

    .hr--blank

    .titulo-segundo
      #t_3_2.h4 3.2 Uso de la matriz

    p.mb-5 En la columna datos e información se deben de ingresar todos los activos identificados previamente en las fases anteriores de acuerdo a su clasificación y valuación, es donde debemos ingresar los sistemas de información, equipos, personal entre otros que de acuerdo a la valuación de activos se determine son importantes y necesarios para que la empresa pueda lograr el cumplimiento de sus objetivos.
      br
      br
      | En la clasificación se debe seleccionar según el análisis previo a que tipos de criterios podría verse afectado el activo, esta clasificación puede ser de tres tipos:

    .row.justify-content-center.mb-5
      .col-10.col-lg-4.mb-4.mb-lg-0
        .tarjeta.tarjeta--acento(style="height:100%; background: linear-gradient(180deg, rgb(155, 35, 92), rgb(83, 19, 49));")
          .row.justify-content-center
            .col-12.mt-5
              figure
                img(src="@/assets/tema_3/icon_3_2_01.svg", alt="alt", style="width:140px; display:block; margin: 0 auto;")
            .col-12.mb-5
              p(style="color:white").text-center Confidencial, privado, sensitivo
      .col-10.col-lg-4.mb-4.mb-lg-0
        .tarjeta.tarjeta--base-01(style="height:100%; background: linear-gradient(180deg, rgb(101, 125, 137), rgb(51, 63, 69));")
          .row.justify-content-center
            .col-12.mt-5
              figure
                img(src="@/assets/tema_3/icon_3_2_02.svg", alt="alt", style="width:140px; display:block; margin: 0 auto;")
            .col-12.mb-5
              p(style="color:white").text-center Obligación por ley / Contrato / Convenio
      .col-10.col-lg-4.mb-4.mb-lg-0
        .tarjeta.tarjeta--base-02(style="height:100%; background: linear-gradient(180deg, rgb(67, 119, 149), rgb(34, 60, 75));")
          .row.justify-content-center
            .col-12.mt-5
              figure
                img(src="@/assets/tema_3/icon_3_2_03.svg", alt="alt", style="width:140px; display:block; margin: 0 auto;")
            .col-12.mb-5
              p(style="color:white").text-center Costo de recuperación (tiempo, económico, material, imagen, emocional)

    p.mb-5 Esta clasificación obedece a entender e identificar en cuál de las anteriores clasificaciones puede estar inmerso el activo a fin de poder definir su impacto y nivel de importancia que tiene para la operación de la organización.
      br
      br
      | El siguiente paso será valuar la probabilidad de las amenazas que podrían surtir algún efecto sobre los ACTIVOS ocasionando pérdidas materiales o inmateriales de estos, para ello se debe dar un valor para cada una de ellas, estos valores pueden ser los siguientes:

    .row.justify-content-center.mb-5
      .col-auto
        .tarjeta.tarjeta--acento.px-5
            p(style="color:white;").text-center Probabilidad de Amenaza [1 = Insignificante, 2 = Baja, 3= Mediana, 4 = Alta]

    p.mb-5 De esta manera la matriz hace el cálculo automático y permite valuar el riesgo informático logrando de esta manera tener una matriz de riesgos lista para su posterior análisis y desarrollo del plan de tratamiento de riesgos. 

    figure.mb-5
      img(src="@/assets/tema_3/img_3_2_01.png", alt="Matriz de riesgo construida")
      figcaption Matriz de riesgo construida

    p.mb-5 Dependiendo del color de cada celda, podemos sacar conclusiones no solo sobre el nivel de riesgo que corre cada elemento de información de sufrir un daño significativo, causado por una amenaza, sino también sobre las medidas de protección necesarias. (Velázquez Martínez, 2011).

    .hr--blank

    .titulo-segundo
      #t_3_3.h4 3.3 Adaptación de la matriz 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg.me-0.me-lg-5.mb-5.mb-lg-0
        p La matriz trabaja con una colección de diferentes amenazas y elementos de información. Ambas colecciones solo representan una aproximación a la situación común de una organización, pero no necesariamente reflejan la realidad de una organización específica. Entonces si hay necesidad de adaptar la matriz a la situación real de una organización, solo hay que ajustar los valores de las amenazas y de los datos de información.
      .col-auto
        figure
          img(src="@/assets/tema_3/img_3_3_01.svg", alt="Adaptación de la matriz")         

    .tarjeta.tarjeta--amarilla.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/componentes/action_3_3_01.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-2 Matriz de análisis de riesgo
              p.text-small A continuación puede descar en formato Excel el formato de matriz de análisis de riesgo para que eventualmente realice la adaptación de la matriz y ejecute los fundamentos y uso de la misma.
            .col-sm-auto
              a.boton.boton--b(:href="obtenerLink('/downloads/Anexo1_Matriz_Riesgo.xls')" target="_blank")
                span Descargar
                i.fas.fa-file-download
        

                

    






        
    

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
