<script setup>
import { computed } from "vue";
import InfoCard from "./InfoCard.vue";

import { useAvaliacoes } from "@/data/avaliacoesStore";

const { avaliacoes } = useAvaliacoes();


const quantidade = computed(() => {
  return avaliacoes.value.length;
});


const ultimaAvaliacao = computed(() => {
  return avaliacoes.value[0];
});


const maiorNota = computed(() => {

  if (!avaliacoes.value.length) return null;

  return avaliacoes.value.reduce((maior, cafe) =>
    cafe.nota > maior.nota ? cafe : maior
  );

});

</script>

<template>
<div class="cards">
<InfoCard
  titulo="Total de Cafés Avaliados"
  :valor="quantidade.toString()"
  detalhe="avaliações realizadas"
  icone="cafe"
/>

<InfoCard
  titulo="Café com Maior Nota"
  :valor="maiorNota?.nota ?? '--'"
  :detalhe="maiorNota?.cafe ?? 'Sem avaliações'"
  icone="trofeu"
/>

<InfoCard
  titulo="Última Avaliação"
  :valor="ultimaAvaliacao?.nota ?? '--'"
  :detalhe="ultimaAvaliacao ? `${ultimaAvaliacao.cafe} • ${ultimaAvaliacao.data} às ${ultimaAvaliacao.hora}` : 'Sem avaliações'"
  icone="relogio"
/>
</div>
</template>

<style scoped>
.cards {
  display: flex;
  gap: 30px;
  margin: 40px auto;
  justify-content: center;
}

@media (max-width: 900px) {
  .cards {
    gap: 15px;
  }
}

@media (max-width: 600px) {
  .cards {
    flex-direction: column;
    align-items: center;
    margin: 30px;
  }
}

/* Celular */
@media (max-width: 380px) {
  .cards {
    flex-direction: column;
    align-items: center;
    margin: 20px;
  }
}
</style>