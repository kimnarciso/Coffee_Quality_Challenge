<script setup>
  import { StarIcon } from '@solar-icons/vue/bold/star'
defineProps({
  value:{
    type:Number,
    required:true
  }
});


const getRatingWidth = (rating) => {
  return `${(Math.max(0, Math.min(rating, 10)) / 10) * 100}%`;
};

</script>


<template>

<div class="stars">

  <div class="stars-background">
    <span v-for="n in 5" :key="`bg-${n}`">
      <StarIcon class="star"/>
    </span>
  </div>


  <div 
    class="stars-filled"
    :style="{ width: getRatingWidth(value) }"
  >
    <span v-for="n in 5" :key="`fill-${n}`">
      <StarIcon color="#ffb700" class="star"/>
    </span>
  </div>

</div>

</template>


<style scoped>

.stars{
position:relative;
display:inline-flex;
line-height:1;
}

.stars-background,
.stars-filled{
display:flex;
gap:3px;
}

.stars-background{
color:#D7CFC7;
}

.stars-filled{
position:absolute;
top:0;
left:0;
overflow:hidden;
color:#C89B3C;
white-space:nowrap;
}

.star {
  width: 24px;
  height: 24px;
}

/* Tablet */
@media (max-width: 768px) {
  .star {
    width: 22px;
    height: 22px;
  }
}

/* Celular */
@media (max-width: 480px) {
  .star {
    width: 18px;
    height: 18px;
  }

  .stars-background,
  .stars-filled {
    gap: 2px;
  }
}
</style>