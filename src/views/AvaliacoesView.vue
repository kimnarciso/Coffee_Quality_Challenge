<script setup>
import { computed } from 'vue'

import RatingForm from '@/components/RatingForm.vue'
import CoffeeCard from '@/components/CoffeeCard.vue'
import CoffeeCarrossel from '@/components/CoffeeCarrossel.vue'
import { useAvaliacoes } from '@/data/avaliacoesStore'

import { CupIcon } from '@solar-icons/vue/line-duotone/cup'
import { StarIcon } from '@solar-icons/vue/line-duotone/star'
import { RankingIcon } from '@solar-icons/vue/line-duotone/ranking'

const { avaliacoes, adicionarAvaliacao } = useAvaliacoes()

const totalAvaliacoes = computed(() => {
  return avaliacoes.value.length
})

const maiorNota = computed(() => {
  if (!avaliacoes.value.length) return '0.0'

  return Math.max(...avaliacoes.value.map((cafe) => cafe.nota)).toFixed(1)
})

const mediaGeral = computed(() => {
  if (!avaliacoes.value.length) return '0.0'

  const soma = avaliacoes.value.reduce((total, cafe) => total + cafe.nota, 0)

  return (soma / avaliacoes.value.length).toFixed(1)
})

const historico = computed(() => {
  return avaliacoes.value.filter(
    cafe => cafe.criadaPeloUsuario
  );
});
</script>

<template>
  <main class="container">
    <section class="titulo">
      <h1>Avaliações de Cafés</h1>

      <p>Analise características, notas e qualidade dos cafés participantes.</p>
    </section>


    <section class="resumos">
      <div class="resumo">
        <div class="icone">
          <CupIcon color="#8B5E3C" :size="30" />
        </div>

        <div>
          <span>Cafés Avaliados</span>
          <strong>{{ totalAvaliacoes }}</strong>
        </div>
      </div>

      <div class="resumo destaque">
        <div class="icone">
          <RankingIcon color="#B8860B" :size="30" />
        </div>

        <div>
          <span>Maior Nota</span>
          <strong>{{ maiorNota }}</strong>
        </div>
      </div>

      <div class="resumo">
        <div class="icone">
          <StarIcon color="#8B5E3C" :size="30" />
        </div>

        <div>
          <span>Média Geral</span>
          <strong>{{ mediaGeral }}</strong>
        </div>
      </div>
    </section>
    <section class="melhores">
      <h2>Melhores Avaliações</h2>
          <CoffeeCarrossel
  :cafes="avaliacoes"
/>
    </section>

    <section class="conteudo">

      <div class="formulario">
        <h2>Nova avaliação</h2>

        <RatingForm @salvar="adicionarAvaliacao" />
      </div>
    </section>

    <section class="historico">

  <h2>
    Histórico de avaliações
  </h2>

  <div class="historico-grid">

    <CoffeeCard
      v-for="cafe in historico"
      :key="cafe.id"
      :cafe="cafe"
    />

  </div>

</section>
  </main>
</template>

<style scoped>
.container {
  padding-top: 120px;
  width: 90%;
  margin: auto;
}

.titulo {
  margin-bottom: 35px;
}

.titulo h1 {
  font-size: 70px;
  font-family: "Cormorant Garamond", serif;
  color: #3d2416;
}

.titulo p {
  font-size: 20px;
  color: #6b5847;
  margin-top: 10px;
}

.resumos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-bottom: 40px;
}

.resumo {
  background:#FFF9F2;
  border:1px solid #E7D2B7;
  padding: 25px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0 15px 40px rgba(0,0,0,.08);
}

.resumo strong {
    display: block;
    color: #8B5E3C;
    font-size: 2rem;
    font-weight: bold;
    font-family: "Abril Fatface", serif;
}

.resumo span {
    font-size:18px;
    letter-spacing:2px;
    color:#7A5A3A;
}

.icone {
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #efd1ab;
}

.destaque .icone {
    background-color: #F3E2A9;
}

.destaque strong {
    color: #B8860B;
}

.melhores h2 {
  font-family: "Cormorant Garamond", serif;
  margin: 20px;
  font-size: 2.5rem;
    color: #3d2416;
}

.conteudo {

  margin: 5vh;
  display: grid;
  gap: 30px;
}

.formulario {
  padding:0;
  background:transparent;
}


.formulario h2 {
  color: #67452a;
  text-align: center;
  font-size: 3.5rem;
  margin-bottom: 2vh;
  font-family: "Cormorant Garamond", serif;
}
.historico{
  margin-top:50px;
}

.historico h2{
  color:#3E2723;
  font-family:"Cormorant Garamond", serif;
  font-size:2.5rem;
  margin-bottom:25px;
}


.historico-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
  gap:25px;
}
@media (max-width: 900px) {
  .resumos {
    grid-template-columns: 1fr;
  }

  .conteudo {
    grid-template-columns: 1fr;
  }
}
</style>
