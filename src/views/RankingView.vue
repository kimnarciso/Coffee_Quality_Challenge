<script setup>
import { computed } from "vue";
import { useAvaliacoes } from "@/data/avaliacoesStore";
import { CupIcon } from "@solar-icons/vue/bold-duotone/cup";
import LeaderboardTable from "@/components/LeaderboardTable.vue";

const { avaliacoes } = useAvaliacoes();


const ranking = computed(() => {

  return [...avaliacoes.value]
    .sort((a, b) => b.nota - a.nota);

});


const rankingSemPrimeiro = computed(() => {
  return ranking.value.slice(1);
});

</script>


<template>

<main class="container">


<section class="titulo">

<h1>
Ranking dos Cafés
</h1>

<p>
Confira os cafés com as maiores avaliações.
</p>

</section>



<section class="podio" v-if="ranking.length">


<div
class="primeiro"
>

<CupIcon color="#B8860B"
:size="45"
/>

<h2>
{{ ranking[0].cafe }}
</h2>


<strong>
{{ ranking[0].nota.toFixed(1) }}
</strong>


<p>
{{ ranking[0].produtor }}
</p>


</div>


</section>



<LeaderboardTable
 :cafes="rankingSemPrimeiro"
/>


</main>

</template>

<style scoped>

.container{

padding-top:120px;

width:90%;

margin:auto;

}



.titulo h1{

font-family:"Cormorant Garamond",serif;

font-size:4rem;

color:#3E2723;

}



.titulo p{

color:#6D4C41;

font-size:1.2rem;

}



.podio{

margin:40px 0;

display:flex;

justify-content:center;

}



.primeiro{

background:#F3E2A9;

width:350px;

padding:30px;

border-radius:25px;

text-align:center;

box-shadow:0 10px 30px rgba(0,0,0,.1);

}



.primeiro h2{

font-family:"Cormorant Garamond",serif;

color:#3E2723;

font-size:2rem;

}



.primeiro strong{

font-size:3rem;

color:#B8860B;

}



.primeiro p{

color:#795548;

}

</style>