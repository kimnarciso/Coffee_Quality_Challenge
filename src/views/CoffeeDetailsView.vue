<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAvaliacoes } from '@/data/avaliacoesStore'

import RatingStars from '@/components/RatingStars.vue'

const route = useRoute()

const { avaliacoes } = useAvaliacoes()

const cafe = computed(() => {
  return avaliacoes.value.find((item) => item.id == route.params.id)
})
</script>

<template>
  <main v-if="cafe" class="container">
    <section class="cabecalho">
      <h1>
        {{ cafe.cafe }}
      </h1>

      <p class="produtor">
        {{ cafe.produtor }}
      </p>

      <span class="categoria">
        {{ cafe.categoria }}
      </span>
    </section>

    <div class="nota">
      <div class="nota-info">
        <span>Nota final</span>

        <strong>
          {{ cafe.nota.toFixed(1) }}
        </strong>
      </div>

      <RatingStars :value="cafe.nota" />
    </div>

    <section class="descricao">
      <h2>Sobre o café</h2>

      <p>
        {{ cafe.descricao }}
      </p>
    </section>

    <section class="sensorial">
      <h2>Avaliação Sensorial</h2>

      <div class="avaliacoes">
        <div class="avaliacao-item">
          <span> Aroma </span>

          <strong>
            {{ cafe.aroma }}
          </strong>
        </div>

        <div class="avaliacao-item">
          <span> Sabor </span>

          <strong>
            {{ cafe.sabor }}
          </strong>
        </div>

        <div class="avaliacao-item">
          <span> Acidez </span>

          <strong>
            {{ cafe.acidez }}
          </strong>
        </div>

        <div class="avaliacao-item">
          <span> Corpo </span>

          <strong>
            {{ cafe.corpo }}
          </strong>
        </div>

        <div class="avaliacao-item">
          <span> Finalização </span>

          <strong>
            {{ cafe.finalizacao }}
          </strong>
        </div>
      </div>
    </section>

    <p class="data">Avaliado em {{ cafe.data }} às {{ cafe.hora }}</p>

    <RouterLink to="/ranking" class="voltar" @click="voltarRanking">
      Voltar para o ranking
    </RouterLink>
  </main>
</template>

<style scoped>
.container {
  padding-top: 120px;
  width: 90%;
  max-width: 1200px;
  margin: auto;
}

/* Cabeçalho */

h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 4rem;
  color: #3e2723;
  margin-bottom: 5px;
}

.produtor {
  color: #795548;
  font-size: 1.2rem;
}

.categoria {
  display: inline-block;
  margin-top: 15px;
  background: #f5e6d3;
  color: #6d4c41;
  padding: 8px 18px;
  border-radius: 30px;
  font-weight: 600;
}

.nota {
  background: #3e2723;
  border-radius: 20px;
  padding: 25px 35px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 35px 0;

  box-shadow: 0 10px 25px rgba(62, 39, 35, 0.15);
}

.nota-info {
  display: flex;
  flex-direction: column;
}

.nota-info span {
  color: #e7d2b7;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.nota strong {
  font-family: 'Abril Fatface', serif;
  font-size: 4rem;
  color: #f3e2a9;
  line-height: 1;
}

/* Descrição */

.descricao {
  background: #fff9f2;
  border-radius: 20px;
  border: 1px solid #e7d2b7;
  padding: 30px;
  margin-bottom: 30px;
}

.descricao h2,
.sensorial h2 {
  font-family: 'Cormorant Garamond', serif;
  color: #3e2723;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.descricao p {
  color: #795548;
  font-size: 1.1rem;
  line-height: 1.6;
}

/* Avaliação sensorial */

.sensorial {
  background: #fff9f2;
  border-radius: 20px;
  border: 1px solid #e7d2b7;
  padding: 30px;
}

.avaliacoes {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.avaliacao-item {
  background: #f5e6d3;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.avaliacao-item span {
  color: #6d4c41;
  font-size: 1.1rem;
}

.avaliacao-item strong {
  color: #8b5e3c;
  font-size: 1.5rem;
}

/* Data */

.data {
  margin: 30px 0;
  color: #8d6e63;
}

/* Botão voltar */

.voltar {
  display: inline-block;
  background: #3e2723;
  color: #fff9f2;
  text-decoration: none;
  border: none;
  padding: 12px 30px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;
}

.voltar:hover {
  background: #8b5e3c;
  transform: translateY(-3px);
}

/* Tablet */
@media (max-width: 900px) {
  .container {
    width: 94%;
    padding-top: 105px;
  }

  h1 {
    font-size: 3rem;
  }

  .nota {
    padding: 24px;
    gap: 20px;
  }

  .nota strong {
    font-size: 3.2rem;
  }

  .avaliacoes {
    grid-template-columns: 1fr;
  }
}

/* Celular */
@media (max-width: 600px) {
  .container {
    width: 92%;
    padding-top: 95px;
  }

  h1 {
    font-size: 2.3rem;
    line-height: 1.1;
  }

  .produtor {
    font-size: 1rem;
  }

  .categoria {
    font-size: .9rem;
    padding: 7px 15px;
  }

  .nota {
    flex-direction: column;
    text-align: center;
    padding: 20px;
    gap: 18px;
  }

  .nota strong {
    font-size: 2.8rem;
  }

  .descricao,
  .sensorial {
    padding: 20px;
  }

  .descricao h2,
  .sensorial h2 {
    font-size: 2rem;
  }

  .descricao p {
    font-size: 1rem;
  }

  .avaliacao-item {
    padding: 16px;
  }

  .avaliacao-item span {
    font-size: 1rem;
  }

  .avaliacao-item strong {
    font-size: 1.3rem;
  }

  .data {
    margin: 24px 0;
    text-align: center;
    font-size: .95rem;
  }

  .voltar {
    display: block;
    width: 100%;
    text-align: center;
    padding: 14px;
    box-sizing: border-box;
  }
}

/* Celulares pequenos */
@media (max-width: 380px) {
  h1 {
    font-size: 2rem;
  }

  .nota strong {
    font-size: 2.3rem;
  }

  .descricao h2,
  .sensorial h2 {
    font-size: 1.7rem;
  }

  .descricao,
  .sensorial {
    padding: 16px;
  }

  .avaliacao-item {
    padding: 14px;
  }
}
</style>
