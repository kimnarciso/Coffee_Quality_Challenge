<script setup>
import RatingStars from './RatingStars.vue'

defineProps({
  cafes: {
    type: Array,
    required: true,
  },
})

function posicao(index) {
  if (index === 0) return '🥇'
  if (index === 1) return '🥈'
  if (index === 2) return '🥉'

  return `${index + 1}º`
}
</script>

<template>
  <section class="lista">
    <div v-for="(cafe, index) in cafes" :key="cafe.id" class="ranking-card">
      <div class="posicao">
        <span>
          {{ posicao(index) }}
        </span>
      </div>

      <div class="info">
        <h2>
          {{ cafe.cafe }}
        </h2>

        <p>
          {{ cafe.produtor }}
        </p>

        <span>
          {{ cafe.categoria }}
        </span>
      </div>

      <div class="nota">
        <RatingStars :value="cafe.nota" />

        <strong>
          {{ cafe.nota.toFixed(1) }}
        </strong>
      </div>

      <RouterLink
        class="detalhes"
        :to="{
          name: 'coffee-details',
          params: {
            id: cafe.id,
          },
        }"
      >
        Ver detalhes
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.lista {
  display: flex;

  flex-direction: column;

  gap: 20px;
}

.ranking-card {
  background: #fff9f2;

  border: 1px solid #e7d2b7;

  border-radius: 20px;

  padding: 20px;

  display: flex;

  align-items: center;

  gap: 25px;

  transition: 0.3s;
}

.ranking-card:hover {
  transform: translateY(-4px);
}

.posicao span {
  font-size: 2rem;

  font-weight: bold;

  color: #8b5e3c;
}

.info {
  flex: 1;
}

.info h2 {
  margin: 0;

  color: #3e2723;
}

.info p {
  color: #795548;

  margin: 5px 0;
}

.info span {
  background: #f5e6d3;

  padding: 5px 12px;

  border-radius: 20px;

  color: #6d4c41;
}

.nota {
  display: flex;

  align-items: center;

  gap: 8px;

  color: #ffb700;

  font-size: 1.5rem;
}

@media (max-width: 700px) {
  .ranking-card {
    flex-direction: column;
    align-items: flex-start;
  }
}

.detalhes {
  text-decoration: none;
  background: #3e2723;
  color: #fff9f2;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.3s;
}

.detalhes:hover {
  background: #8b5e3c;
  transform: translateY(-2px);
}
</style>
