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
width: min(1200px, 90%);
margin: 0 auto;
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
width: min(350px, 100%);
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

/* ==========================
   Notebook / Tablet
========================== */
@media (max-width: 992px) {
  .container {
    width: 95%;
    padding-top: 110px;
  }

  .titulo h1 {
    font-size: 3.2rem;
  }

  .titulo p {
    font-size: 1.1rem;
  }

  .primeiro {
    width: min(100%, 320px);
    padding: 24px;
  }

  .primeiro h2 {
    font-size: 1.8rem;
  }

  .primeiro strong {
    font-size: 2.7rem;
  }
}

/* ==========================
   Celular
========================== */
@media (max-width: 600px) {
  .container {
    width: 92%;
    padding-top: 100px;
  }

  .titulo {
    text-align: center;
  }

  .titulo h1 {
    font-size: 2.4rem;
    line-height: 1.1;
  }

  .titulo p {
    font-size: 1rem;
    margin-top: 8px;
  }

  .podio {
    margin: 30px 0;
  }

  .primeiro {
    width: 100%;
    max-width: 340px;
    padding: 22px 18px;
    border-radius: 20px;
  }

  .primeiro h2 {
    font-size: 1.6rem;
  }

  .primeiro strong {
    font-size: 2.4rem;
  }

  .primeiro p {
    font-size: .95rem;
  }
}

/* ==========================
   Celulares pequenos
========================== */
@media (max-width: 380px) {
  .titulo h1 {
    font-size: 2rem;
  }

  .titulo p {
    font-size: .9rem;
  }

  .primeiro {
    padding: 18px 14px;
  }

  .primeiro h2 {
    font-size: 1.4rem;
  }

  .primeiro strong {
    font-size: 2rem;
  }
}
</style>