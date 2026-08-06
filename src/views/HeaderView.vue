<script setup>
import { useRoute } from "vue-router";

import { UserCircleIcon } from '@solar-icons/vue/line-duotone/user-circle'


import { HouseIcon as HouseBold } from "@solar-icons/vue/bold-duotone/house";
import { HouseIcon as HouseLine } from "@solar-icons/vue/line-duotone/house";

import { ClipboardListIcon as ClipboardBold } from "@solar-icons/vue/bold-duotone/clipboard-list";
import { ClipboardListIcon as ClipboardLine } from "@solar-icons/vue/line-duotone/clipboard-list";

import { CupIcon as CupBold } from "@solar-icons/vue/bold-duotone/cup";
import { CupIcon as CupLine } from "@solar-icons/vue/line-duotone/cup";


const route = useRoute();


</script>

<template>
<header>
    <div class="logo">
    <img src="/imagens/logo.png" alt="logo">
  </div>

  <div class="navegacao">
    <RouterLink to="/" class="icon-style" :class="{ ativo: route.path === '/' }">
  <Transition name="icon" mode="out-in">
    <HouseBold v-if="route.path === '/'" key="house-bold" :size="28" />
    <HouseLine v-else key="house-line" :size="28" />
  </Transition>
  <p>Home</p>
</RouterLink>

<RouterLink to="/avaliacoes" class="icon-style" :class="{ ativo: route.path === '/avaliacoes' }">
  <Transition name="icon" mode="out-in">
    <ClipboardBold v-if="route.path === '/avaliacoes'" key="clipboard-bold" :size="28"/>
    <ClipboardLine v-else key="clipboard-line" :size="28" />
  </Transition>
  <p>Avaliações</p>
</RouterLink>

<RouterLink to="/ranking" class="icon-style" :class="{ ativo: route.path === '/ranking' }">
  <Transition name="icon" mode="out-in">
    <CupBold v-if="route.path === '/ranking'" key="cup-bold" :size="28" />
    <CupLine v-else key="cup-line" :size="28" />
  </Transition>
  <p>Ranking</p>
</RouterLink>
  </div>
  <div class="profile">
      <UserCircleIcon :size="40" />
  </div>
</header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 10px 6px;

  width: 100%;
  z-index: 999;

  background: #E7D2B7;
  box-shadow: 0px -4px 8px 3px #3E2723;
  border-radius: 0 0 10px 10px;
}

.navegacao {
  display: flex;
  align-items: center;
  gap: 28px;
}

.profile {
  padding-right: 20px;
}

.icon-style p {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
}


.icon-style {
  display: flex;
  align-items: center;
  gap: 8px;

  position: relative;
  text-decoration: none;
  color: #3b2418;
  cursor: pointer;
}



.icon-style::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;

  width: 100%;
  height: 2px;
  background: #3b2418;

  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.icon-style:hover::after {
  transform: scaleX(1);
}
.logo img {
width: 70px;
}
.icon-enter-active,
.icon-leave-active {
  transition: opacity .2s ease;
}

.icon-enter-from,
.icon-leave-to {
  opacity: 0;
}

.icon-enter-to,
.icon-leave-from {
  opacity: 1;
}


.icon-style.ativo {
  color: #3E2723;
  font-weight: 600;
}

.icon-style.ativo::after {
  transform: scaleX(1);
}

/* ==========================
   Tablet
========================== */
@media (max-width: 900px) {
  header {
    padding: 10px 20px;
  }

  .logo img {
    width: 60px;
  }

  .navegacao {
    gap: 6vw;
  }

  .icon-style p {
    font-size: .9rem;
  }
}

/* ==========================
   Celular
========================== */
@media (max-width: 650px) {
  header {
    padding: 10px 15px;
  }
  .logo img {
    width: 55px;
  }
.navegacao {
  display: flex;
  align-items: center;
  gap: clamp(18px, 5vw, 80px);
}

  .icon-style {
    flex-direction: column;
    gap: 2px;
  }

  .icon-style p {
    display: none;
  }

  .icon-style::after {
    bottom: -8px;
  }

  .icon-style svg {
    width: 26px;
    height: 26px;
  }

  .logo {
    flex-shrink: 0;
  }
}

/* ==========================
   Celulares pequenos
========================== */
@media (max-width: 420px) {
  header {
    padding: 8px 10px;
  }

  .logo img {
    width: 48px;
  }

  .navegacao {
    gap: 12px;
  }

  .icon-style svg {
    width: 24px;
    height: 24px;
  }

  .icon-style::after {
    height: 1.5px;
  }

  header > div:last-child svg {
    width: 34px;
    height: 34px;
  }
}
</style>