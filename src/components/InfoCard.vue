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
<div class="top">
    <div class="icon" :class="icone">

    <TeaCupIcon color="#8B5E3C" :size="40" v-if="icone === 'cafe'" />

    <CupFirstIcon color="#B8860B" :size="40" v-else-if="icone === 'trofeu'" />

    <SortByTimeIcon color="#A06A42" :size="40" v-else-if="icone === 'relogio'" />

</div>
<div class="titulo">
        <h3>{{ titulo }}</h3>
</div>
</div>
<div class="info">


<span class="valor" :class="icone">{{ valor }}</span>

<p class="descricao">{{ detalhe }}</p>
</div>
  </div>
</template>

<style scoped>
.card {
    background-color: #f7ebda;
    gap: 20px;
    padding: 20px;
    border-radius: 15px;
      box-shadow: 0 15px 40px rgba(0,0,0,.08);
      text-align: center;
      max-width: 300px;
}
.titulo h3 {
    font-size: 1.5rem;
    font-family: "Cormorant Garamond", serif;
    font-weight: 600;
    color: #3d2416;
    text-align: left;
}
.top {
    display: flex;
    gap: 16px;
    align-items: start;
}
.icon {
    display: flex;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}

.icon.cafe {
    background-color: #efd1ab;
    width: 100px;
}
.valor {
    font-size: 2.7rem;
    font-family: "Abril Fatface", serif;
}
.valor.cafe {
    color: #8B5E3C;

}

.icon.trofeu {
    background-color: #F3E2A9;
    width: 90px;
}

.valor.trofeu {
    color: #B8860B;
}

.icon.relogio {
    background-color: #EADBC8;
}

.valor.relogio {
    color: #A06A42;

}

.descricao {
  font-size: 15px;
  color: #6b5847;
  max-width: 300px;
}

/* ==========================
   Tablet
========================== */
@media (max-width: 900px) {
  .card {
    padding: 18px;
    gap: 16px;
  }

  .icon {
    width: 70px;
    height: 70px;
    flex-shrink: 0;
  }

.icon.trofeu {
    width: 70px;
}
.icon.cafe {
    width: 70px;
}

  .titulo h3 {
    font-size: 1.3rem;
  }

  .valor {
    font-size: 1.8rem !important;
  }
}

/* ==========================
   Celular
========================== */
@media (max-width: 600px) {
  .card {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px 16px;
    gap: 14px;
    min-width: 320px;
    margin: 0 20px;
  }

  .icon {
    width: 64px;
    height: 64px;
  }

  .icon :deep(svg) {
    width: 30px;
    height: 30px;
  }

  .titulo h3 {
    font-size: 1.6rem;
  }

  .valor {
    display: block;
    font-size: 2rem !important;
    margin: 4px 0;
  }

  .descricao {
    max-width: 100%;
    font-size: .95rem;
  }
}

/* ==========================
   Celulares pequenos
========================== */
@media (max-width: 380px) {
  .card {
    padding: 16px 14px;
  }

  .icon {
    width: 56px;
    height: 56px;
  }

  .icon :deep(svg) {
    width: 26px;
    height: 26px;
  }

  .titulo h3 {
    font-size: 1.1rem;
  }

  .valor {
    font-size: 1.4rem !important;
  }

  .descricao {
    font-size: .9rem;
  }
}
</style>