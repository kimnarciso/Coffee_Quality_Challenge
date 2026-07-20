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

    <h2>{{ cafe.cafe }}</h2>

    <p class="produtor">
      {{ cafe.produtor }}
    </p>

    <span>
      {{ cafe.categoria }}
    </span>

    <p class="descricao">
      {{ cafe.descricao }}
    </p>

  </div>


<div class="avaliacao">
  <RatingStars :value="cafe.nota"/>

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
padding:25px;
background: #FFF9F2;
border-radius:18px;
border:1px solid #eadbc8;
}

.info{
max-width:70%;
}

.avaliacao{
  display:flex;
  align-items:center;
  gap:10px;
}


.avaliacao strong{
  color:#8B5E3C;
  font-size:1.1rem;
}


</style>