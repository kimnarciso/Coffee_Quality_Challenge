<script setup>
import { computed, ref, onMounted, onUnmounted } from "vue";

import { RoundAltArrowRightIcon } from "@solar-icons/vue/bold-duotone/round-alt-arrow-right";
import { RoundAltArrowLeftIcon } from "@solar-icons/vue/bold-duotone/round-alt-arrow-left";

import RatingStars from "@/components/RatingStars.vue";


const props = defineProps({
  cafes: {
    type: Array,
    required: true,
  },
});


const carousel = ref(null);


const top6 = computed(() => {
  return [...props.cafes]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 6);
});


function mover(direcao) {

  if (!carousel.value) return;

  const largura = carousel.value.clientWidth;

  carousel.value.scrollBy({
    left: direcao * largura,
    behavior: "smooth",
  });

}


function proximo() {
  mover(1);
}


function anterior() {
  mover(-1);
}


let timer;


onMounted(() => {

  if(window.innerWidth <= 600) return;


  timer = setInterval(() => {

    if (!carousel.value) return;


    const final =
      carousel.value.scrollLeft + carousel.value.clientWidth >=
      carousel.value.scrollWidth - 10;


    if (final) {

      carousel.value.scrollTo({
        left:0,
        behavior:"smooth"
      });

    } else {

      proximo();

    }

  },3500);

});


onUnmounted(() => {
  clearInterval(timer);
});

</script>

<template>
  <section class="carousel">

    <button 
      class="arrow"
      @click="anterior"
    >
      <RoundAltArrowLeftIcon 
        color="#3E2723"
        :size="40"
      />
    </button>


    <div 
      class="viewport"
      ref="carousel"
    >

      <div class="track">

        <article
          v-for="cafe in top6"
          :key="cafe.id"
          class="card"
        >
          <div class="top">
            <h3>
              {{ cafe.cafe }}
            </h3>
            <div class="nota">
              <RatingStars 
                :value="cafe.nota"
              />
              <strong>
                {{ cafe.nota.toFixed(1) }}
              </strong>
            </div>
          </div>
          <p class="produtor">
            {{ cafe.produtor }}
          </p>
          <span class="categoria">
            {{ cafe.categoria }}
          </span>
          <div class="rodape">
            <span>
              Avaliação sensorial
            </span>
            <div>
              {{ cafe.aroma }}/10 ·
              {{ cafe.sabor }}/10 ·
              {{ cafe.corpo }}/10
            </div>
          </div>
        </article>
      </div>
    </div>
    <button 
      class="arrow"
      @click="proximo"
    >
      <RoundAltArrowRightIcon 
        color="#3E2723"
        :size="40"
      />
    </button>
  </section>
</template>

<style scoped>

.carousel {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
}


.viewport {
  width: 100%;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  scrollbar-width: none;

  -webkit-overflow-scrolling: touch;
}

.viewport::-webkit-scrollbar {
  display: none;
}


.track {
  display: flex;
  gap: 20px;
}


.card {

  flex: 0 0 calc((100% - 40px) / 3);

  scroll-snap-align: start;

  background: #F8F2EA;

  border-radius: 22px;

  padding: 25px;

  box-shadow:
    0 10px 25px rgba(62,39,35,.08);

  transition: .3s;

  cursor: pointer;

}


.card:hover {

  transform: translateY(-5px);

}


.top {

  display: flex;

  justify-content: space-between;

  align-items: flex-start;

  gap: 15px;

}


.top h3 {

  margin: 0;

  font-family: "Cormorant Garamond", serif;

  font-size: 1.6rem;

  color:#3E2723;

}



.nota {

  display:flex;

  flex-direction:column;

  align-items:flex-end;

  gap:5px;

}


.nota strong {

  background:#3E2723;

  color:#F3E2A9;

  width:45px;

  height:45px;

  border-radius:50%;

  display:flex;

  align-items:center;

  justify-content:center;

  font-size:1.1rem;

}



.produtor {

  margin:20px 0 15px;

  color:#795548;

  font-size:1rem;
.viewport {
  width: 100%;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  scrollbar-width: none;

  -webkit-overflow-scrolling: touch;
}

}



.categoria {

  display:inline-block;

  padding:6px 15px;

  border-radius:20px;

  background:#E7D2B7;

  color:#6D4C41;

  font-size:.85rem;

  font-weight:600;

}



.rodape {

  margin-top:25px;

  padding-top:15px;

  border-top:1px solid #E7D2B7;

  color:#8B5E3C;

  font-size:.9rem;

}


.rodape span {

  display:block;

  margin-bottom:8px;

  font-weight:600;

}



.arrow {

  border:none;

  background:transparent;

  cursor:pointer;

  display:flex;

  align-items:center;

  justify-content:center;

  transition:.2s;

}


.arrow:hover {

  transform:scale(1.1);

}



/* Tablet */

@media(max-width:900px){

  .card {

    flex:0 0 calc((100% - 20px) / 2);

  }

}



/* Celular */

@media(max-width:600px){

  .carousel {
    gap:5px;
  }

    .viewport {
    cursor: grab;
  }

  .viewport:active {
    cursor: grabbing;
  }

  .top {
    flex-direction:column;
  }

  .nota {
    flex-direction:row;
    align-items:center;
  }

  .arrow {
    display: none;
  }

  .track {
    gap:15px;
    padding: 0 10px;
  }


  .card {
    flex:0 0 85%;
    padding:20px;
  }
}



/* Celulares pequenos */

@media(max-width:380px){


  .card {

    padding:16px;

  }


  .top h3 {

    font-size:1.3rem;

  }


}

</style>