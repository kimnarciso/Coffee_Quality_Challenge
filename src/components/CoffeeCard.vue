<script setup>
import RatingStars from "./RatingStars.vue";

defineProps({
  cafe: {
    type: Object,
    required: true
  }
});
</script>

<template>

<div class="card">

  <div class="info">

    <div class="cabecalho">

      <h2>
        {{ cafe.cafe }}
      </h2>

      <span class="categoria">
        {{ cafe.categoria }}
      </span>

    </div>


    <p class="produtor">
      {{ cafe.produtor }}
    </p>


    <p class="descricao">
      {{ cafe.descricao || "Sem descrição disponível." }}
    </p>


  </div>


  <div class="avaliacao">

    <RatingStars 
      :value="cafe.nota"
    />


    <strong>
      {{ cafe.nota.toFixed(1) }}
    </strong>

  </div>


</div>

</template>


<style scoped>

.card {

display:flex;

justify-content:space-between;

align-items:center;

gap:30px;

padding:28px;

background:#FFF9F2;

border:1px solid #E7D2B7;

border-radius:22px;

box-shadow:
0 10px 25px rgba(62,39,35,.06);

transition:.3s;

}


.card:hover {

transform:translateY(-4px);

box-shadow:
0 15px 30px rgba(62,39,35,.12);

}



.info {

flex:1;

}



.cabecalho {

display:flex;

align-items:center;

gap:15px;

flex-wrap:wrap;

}



h2 {

margin:0;

font-family:"Cormorant Garamond", serif;

font-size:2rem;

color:#3E2723;

}



.categoria {

background:#F5E6D3;

color:#6D4C41;

padding:6px 15px;

border-radius:20px;

font-size:.85rem;

font-weight:600;

}



.produtor {

margin:8px 0;

color:#795548;

font-size:1.05rem;

}



.descricao {
  margin-top:15px;
  color:#6B5847;
  line-height:1.5;

  display:-webkit-box;
  line-clamp:2;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
  overflow:hidden;
}



.avaliacao {

display:flex;

flex-direction:column;

align-items:center;

gap:12px;

}



.avaliacao strong {

background:#3E2723;

color:#F3E2A9;

width:55px;

height:55px;

border-radius:50%;

display:flex;

align-items:center;

justify-content:center;

font-size:1.3rem;

font-family:"Abril Fatface", serif;

}



/* Tablet */

@media(max-width:800px){

.card{

flex-direction:column;

align-items:flex-start;

}


.avaliacao{

flex-direction:row;

width:100%;

justify-content:space-between;

}


}



/* Celular */

@media(max-width:500px){

.card{

padding:20px;

}


h2{

font-size:1.6rem;

}


.descricao{

font-size:.95rem;

}


}

</style>