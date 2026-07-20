<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { RoundAltArrowRightIcon } from '@solar-icons/vue/bold-duotone/round-alt-arrow-right'
import { RoundAltArrowLeftIcon } from '@solar-icons/vue/bold-duotone/round-alt-arrow-left'
import RatingStars from "@/components/RatingStars.vue";

const top6 = computed(() => {
  return [...props.cafes]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 6);
});

const props = defineProps({
  cafes: {
    type: Array,
    required: true,
  },
})

const atual = ref(0)

const proximo = () => {
  if (atual.value < top6.value.length - 3) {
    atual.value++
  } else {
    atual.value = 0
  }
}


const anterior = () => {
  if (atual.value > 0) {
    atual.value--
  } else {
    atual.value = top6.value.length - 3
  }
}

let timer

onMounted(() => {
  timer = setInterval(proximo, 3000)
})

onUnmounted(() => {
  clearInterval(timer)
})


</script>

<template>
  <section class="carousel">
    <button class="arrow" @click="anterior">
      <RoundAltArrowLeftIcon color="#3d2416" size="45" />
    </button>

    <div class="viewport">
      <div
        class="track"
        :style="{
          transform: `translateX(-${atual * 33.33}%)`,
        }"
      >
        <div v-for="cafe in top6" :key="cafe.id" class="card">
          <div class="top">
            <h3>
              {{ cafe.cafe }}
            </h3>

            <div class="nota">
  <RatingStars :value="cafe.nota"/>

  <strong>
    {{ cafe.nota.toFixed(1) }}
  </strong>
</div>
          </div>

          <p>
            {{ cafe.produtor }}
          </p>

          <span>
            {{ cafe.categoria }}
          </span>

        </div>
      </div>
    </div>

    <button class="arrow" @click="proximo">
      <RoundAltArrowRightIcon size="45" />
    </button>
  </section>
</template>

<style scoped>
.carousel {
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
}

.viewport {
  overflow: hidden;
  width: 100%;
}

.track {
  display: flex;
  gap: 10px;
  transition: transform 0.5s ease;
}

.card {
  min-width: calc((100% - 20px) / 3);
  background: #F8F2EA;
  border-radius: 15px;
  padding: 22px;
  box-shadow: 0 8px 20px rgba(62, 39, 35, 0.08);
cursor: pointer;
}


.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top h3 {
  font-family: "Cormorant Garamond", serif;
  color: #3e2723;
  font-size: 1.5rem;
}

.top strong {
  background: #3e2723;
  color: #e7d2b7;
  padding: 10px 12px;
  border-radius: 50%;
}

.card p {
  color: #795548;
}

.card span {
    font-size: 14px;
    letter-spacing:1.5px;
    color:#7A5A3A;
}

.arrow {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.nota{
  display:flex;
  align-items:center;
  gap:8px;
}

@media (max-width: 900px) {
  .card {
    min-width: 100%;
  }
}
</style>
