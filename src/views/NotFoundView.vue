<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <main class="not-found">
    <div class="content">
      <h1>404</h1>

      <h2>Ops! Café derramado...</h2>

      <p>Essa página não existe ou foi removida. Que tal voltar para a página inicial?</p>

      <button @click="router.push('/')">Voltar para Home</button>
    </div>
  </main>
</template>

<style scoped>
.not-found {
  min-height: 100dvh;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff9f2;
  text-align: center;
}

.content {
  max-width: 500px;

  padding: 40px;
}

h1 {
  font-family: 'Abril Fatface', serif;
  font-size: 10rem;
  margin: 0;
  color: #3e2723;
  line-height: 1;
}

h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.5rem;
  color: #6d4c41;
  margin: 20px 0;
}

p {
  font-size: 1.1rem;
  color: #795548;
  line-height: 1.6;
}

button {
  margin-top: 30px;
  background: #3e2723;
  color: #fff9f2;
  border: none;
  padding: 14px 30px;

  border-radius: 30px;

  font-size: 1rem;

  cursor: pointer;

  transition: 0.3s;
}

button:hover {
  transform: translateY(-3px);

  background: #5d4037;
}

/* Tablet */
@media (max-width: 768px) {
  .content {
    max-width: 90%;
    padding: 30px 20px;
  }

  h1 {
    font-size: 8rem;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }

  button {
    padding: 12px 26px;
  }
}

/* Celular */
@media (max-width: 480px) {
  .content {
    max-width: 100%;
    padding: 20px 16px;
  }

  h1 {
    font-size: 5.5rem;
  }

  h2 {
    font-size: 1.6rem;
    margin: 16px 0;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.5;
  }

  button {
    width: 100%;
    max-width: 280px;
    padding: 12px 20px;
    font-size: 0.95rem;
  }
}

/* Celulares muito pequenos */
@media (max-width: 360px) {
  h1 {
    font-size: 4.5rem;
  }

  h2 {
    font-size: 1.4rem;
  }

  p {
    font-size: 0.9rem;
  }

  button {
    font-size: 0.9rem;
  }
}
</style>
