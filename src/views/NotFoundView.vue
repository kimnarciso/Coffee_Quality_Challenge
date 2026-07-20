<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>


<template>

<main class="not-found">

  <div class="content">

    <h1>404</h1>

    <h2>Ops! Café derramado...</h2>

    <p>
      Essa página não existe ou foi removida.
      Que tal voltar para a página inicial?
    </p>


    <button @click="router.push('/')">
      Voltar para Home
    </button>

  </div>

</main>

</template>


<style scoped>

.not-found{

min-height:100vh;

display:flex;

justify-content:center;

align-items:center;

background:#FFF9F2;

text-align:center;

}


.content{

max-width:500px;

padding:40px;

}


h1{

font-family:"Abril Fatface", serif;

font-size:10rem;

margin:0;

color:#3E2723;

line-height:1;

}


h2{

font-family:"Cormorant Garamond", serif;

font-size:2.5rem;

color:#6D4C41;

margin:20px 0;

}


p{

font-size:1.1rem;

color:#795548;

line-height:1.6;

}



button{

margin-top:30px;

background:#3E2723;

color:#FFF9F2;

border:none;

padding:14px 30px;

border-radius:30px;

font-size:1rem;

cursor:pointer;

transition:.3s;

}


button:hover{

transform:translateY(-3px);

background:#5D4037;

}


</style>