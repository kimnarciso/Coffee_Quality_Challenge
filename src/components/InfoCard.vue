<script setup>
import {
  TeaCupIcon,
  CupFirstIcon,
  SortByTimeIcon
} from "@solar-icons/vue/line-duotone";

defineProps({
  titulo: String,
  valor: String,
  detalhe: String,
  icone: String
})
</script>

<template>
  <div class="card">
<div class="icon" :class="icone">

    <TeaCupIcon color="#8B5E3C" :size="40" v-if="icone === 'cafe'" />

    <CupFirstIcon color="#B8860B" :size="40" v-else-if="icone === 'trofeu'" />

    <SortByTimeIcon color="#A06A42" :size="40" v-else-if="icone === 'relogio'" />
</div>
<div class="info">

<h3>{{ titulo }}</h3>

<span class="valor" :class="icone">{{ valor }}</span>

<p class="descricao">{{ detalhe }}</p>
</div>
  </div>
</template>

<style scoped>
.card {
    display: flex;
    background-color: #f7ebda;
    gap: 20px;
    padding: 20px;
    border-radius: 15px;
      box-shadow: 0 15px 40px rgba(0,0,0,.08);
}
.info h3 {
    font-size: 1.5rem;
    font-family: "Cormorant Garamond", serif;
    font-weight: 600;
    color: #3d2416;
}
.icon {
    width: 85px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}

.icon.cafe {
    background-color: #efd1ab;
}

.valor.cafe {
    color: #8B5E3C;
    font-size: 2rem;
    font-weight: bold;
    font-family: "Abril Fatface", serif;
}

.icon.trofeu {
    background-color: #F3E2A9;
}

.valor.trofeu {
    color: #B8860B;
    font-size: 2rem;
    font-weight: bold;
    font-family: "Abril Fatface", serif;
}

.icon.relogio {
    background-color: #EADBC8;
}

.valor.relogio {
    color: #A06A42;
    font-size: 2rem;
    font-weight: bold;
    font-family: "Abril Fatface", serif;
}

.descricao {
  font-size: 15px;
  color: #6b5847;
  max-width: 300px;
}
</style>