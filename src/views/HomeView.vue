<script setup>
import { ref } from "vue";
const hover = ref(false);

import { ClipboardListIcon as ClipboardBold } from "@solar-icons/vue/bold-duotone/clipboard-list";
import { ClipboardListIcon as ClipboardLine } from "@solar-icons/vue/line-duotone/clipboard-list";
import BannerView from "./BannerView.vue";



import { useRouter } from "vue-router";


const router = useRouter();


</script>

<template>
<main>
<BannerView/>
<button
  :class="{ ativo: hover }"
  @mouseenter="hover = true"
  @mouseleave="hover = false"
  @click="router.push('/avaliacoes')"
>
  <Transition name="icon" mode="out-in">
    <ClipboardLine
      color="#E7D2B7"
      v-if="!hover"
      key="line"
      :size="30"
    />

    <ClipboardBold
      color="#3E2723"
      v-else
      key="bold"
      :size="30"
    />
  </Transition>

  Ver Avaliações
</button>


</main>
</template>

<style scoped>
button {
    background-color: #3E2723;
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 1.2rem;
    padding: 10px 25px;
    margin: 2vh auto;
    border: none;
    color: #E7D2B7;
    border-radius: 10px;
    opacity: 1;
  transition: opacity 0.2s ease, background-color 0.2s ease, color 0.2s ease;
}


button.ativo {
    background-color: transparent;
    border: 2px solid #3E2723;
    color: #3E2723;
}
.icon-enter-active,
.icon-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.icon-enter-from,
.icon-leave-to {
  opacity: 0;

}

.icon-enter-to,
.icon-leave-from {
  opacity: 1;

}


</style>