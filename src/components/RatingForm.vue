<script setup>
import { reactive, computed } from 'vue'
import { StarIcon } from '@solar-icons/vue/bold/star'

const emit = defineEmits(['salvar'])

const avaliacao = reactive({
  cafe: '',
  produtor: '',
  categoria: 'Especial',

  aroma: 0,
  sabor: 0,
  acidez: 0,
  corpo: 0,
  finalizacao: 0,
})

const criterios = [
  {
    nome: 'aroma',
    titulo: 'Aroma',
  },
  {
    nome: 'sabor',
    titulo: 'Sabor',
  },
  {
    nome: 'acidez',
    titulo: 'Acidez',
  },
  {
    nome: 'corpo',
    titulo: 'Corpo',
  },
  {
    nome: 'finalizacao',
    titulo: 'Finalização',
  },
]

const notaFinal = computed(() => {
  const valores = [
    avaliacao.aroma,
    avaliacao.sabor,
    avaliacao.acidez,
    avaliacao.corpo,
    avaliacao.finalizacao,
  ]

  const soma = valores.reduce((total, valor) => total + valor, 0)

  return (soma / 5).toFixed(1)
})

function selecionarNota(campo, nota) {
  avaliacao[campo] = nota
}

function limpar() {
  avaliacao.cafe = ''
  avaliacao.produtor = ''
  avaliacao.categoria = 'Especial'

  avaliacao.aroma = 0
  avaliacao.sabor = 0
  avaliacao.acidez = 0
  avaliacao.corpo = 0
  avaliacao.finalizacao = 0
}

function salvar() {
  if (!avaliacao.cafe.trim()) {
    alert('Informe o nome do café.')
    return
  }

  if (!avaliacao.produtor.trim()) {
    alert('Informe o produtor do café.')
    return
  }

  if (!avaliacao.categoria.trim()) {
    alert('Selecione uma categoria.')
    return
  }

  const novaAvaliacao = {
    id: Date.now(),

    cafe: avaliacao.cafe,
    produtor: avaliacao.produtor,
    categoria: avaliacao.categoria,
    descricao: avaliacao.descricao,
    aroma: avaliacao.aroma,
    sabor: avaliacao.sabor,
    acidez: avaliacao.acidez,
    corpo: avaliacao.corpo,
    finalizacao: avaliacao.finalizacao,

    nota: Number(notaFinal.value),

    data: new Date().toLocaleDateString('pt-BR'),

    hora: new Date().toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    }),
  }

  emit('salvar', novaAvaliacao)

  limpar()
}
</script>

<template>
  <form class="form" @submit.prevent="salvar">
    <section class="grupo">
      <h3>Informações do Café</h3>

      <label> Nome do Café </label>

      <input v-model="avaliacao.cafe" placeholder="Ex: Café Bourbon Amarelo" />

      <label> Produtor </label>

      <input v-model="avaliacao.produtor" placeholder="Ex: Fazenda Primavera" />

      <label>Descrição</label>
      <textarea class="desc"
        v-model="avaliacao.descricao"
        placeholder="Ex: Acidez brilhante de limão siciliano, corpo aveludado e notas marcantes de chocolate ao leite e caramelo no final."
      ></textarea>

      <label> Categoria </label>

      <select v-model="avaliacao.categoria">
        <option>Especial</option>

        <option>Premium</option>

        <option>Tradicional</option>
      </select>
    </section>

    <section class="grupo">
      <h3>Avaliação Sensorial</h3>

      <div v-for="criterio in criterios" :key="criterio.nome" class="criterio">
        <div class="titulo-criterio">
          <span>
            {{ criterio.icone }}
            {{ criterio.titulo }}
          </span>

          <strong> {{ avaliacao[criterio.nome] }}/10 </strong>
        </div>

        <div class="estrelas">
          <button
            type="button"
            v-for="n in 10"
            :key="n"
            @click="selecionarNota(criterio.nome, n)"
            :class="{
              ativo: n <= avaliacao[criterio.nome],
            }"
          >
            <StarIcon size="24" />
          </button>
        </div>
      </div>
    </section>

    <section class="resultado">
      <span> Nota Final </span>

      <strong>
        {{ notaFinal }}
      </strong>
    </section>

    <div class="acoes">
      <button type="button" class="limpar" @click="limpar">Limpar</button>

      <button class="salvar">Salvar Avaliação</button>
    </div>
  </form>
</template>

<style scoped>
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.grupo {
  background: #fff9f2;
  border-radius: 22px;
  padding: 30px;
  border: 1px solid #ead8c5;
}

.grupo h3 {
  letter-spacing: 3px;
  font-size: 2rem;
  color: #3e2723;
  margin-bottom: 25px;
}

label {
  display: block;
  color: #6d4c41;
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 8px;
}
.desc {
  height: 200px;
}
textarea::placeholder {
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
}
.desc,
input,
select {
  width: 100%;
  padding: 14px 18px;
  border-radius: 12px;
  border: 1px solid #d9c1a8;
  background: #faf5ef;
  color: #3e2723;
  font-size: 1rem;
  outline: none;
  margin-bottom: 20px;
  transition: 0.3s;
}
.desc:focus,
input:focus,
select:focus {
  border-color: #8b5e3c;
  background: #fff;
}

.criterio {
  padding: 18px 0;
  border-bottom: 1px solid #eee0d2;
}

.criterio:last-child {
  border-bottom: none;
}

.titulo-criterio {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.titulo-criterio span {
  color: #5d4037;
  font-size: 1.1rem;
  font-weight: 600;
}

.titulo-criterio strong {
  background: #f5e6d3;
  color: #8b5e3c;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
}

.estrelas {
  display: flex;
  gap: 8px;
}

.estrelas button {
  border: none;
  background: none;
  cursor: pointer;
  font-size: 28px;
  color: #d8c8b8;
  transition: 0.2s;
  padding: 0;
}

.estrelas button:hover {
  transform: scale(1.15);
}

.estrelas button.ativo {
  color: #ffb700;
}

.resultado {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #3e2723;
  padding: 25px 30px;
  border-radius: 18px;
  color: #e7d2b7;
}

.resultado span {
  font-size: 1.2rem;
  letter-spacing: 1px;
}

.resultado strong {
  font-size: 2rem;
  font-family: 'Abril Fatface', serif;
  color: #f3e2a9;
}

.acoes {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
}

.acoes button {
  padding: 13px 30px;
  border-radius: 12px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
}

.limpar {
  background: transparent;
  border: 2px solid #8b5e3c;
  color: #8b5e3c;
}

.limpar:hover {
  background: #f5e6d3;
}

.salvar {
  background: #3e2723;
  border: 2px solid #3e2723;
  color: #e7d2b7;
}

.salvar:hover {
  background: #5d4037;
}

/* ==========================
   Tablet
========================== */
@media (max-width: 900px) {
  .grupo {
    padding: 24px;
  }

  .grupo h3 {
    font-size: 1.8rem;
  }

  .resultado {
    padding: 22px 24px;
  }

  .resultado strong {
    font-size: 1.8rem;
  }
}

/* ==========================
   Celular
========================== */
@media (max-width: 600px) {
  .grupo {
    padding: 18px;
    border-radius: 18px;
  }

  .grupo h3 {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 20px;
  }

  label {
    font-size: .9rem;
  }

  input,
  select,
  .desc {
    padding: 12px 14px;
    font-size: .95rem;
  }

  .desc {
    height: 150px;
  }

  .titulo-criterio {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .titulo-criterio span {
    font-size: 1rem;
  }

  .estrelas {
    flex-wrap: wrap;
    gap: 6px;
  }

  .estrelas button svg {
    width: 22px;
    height: 22px;
  }

  .resultado {
    flex-direction: column;
    gap: 10px;
    text-align: center;
    padding: 20px;
  }

  .resultado span {
    font-size: 1rem;
  }

  .resultado strong {
    font-size: 2rem;
  }

  .acoes {
    flex-direction: column;
    gap: 12px;
  }

  .acoes button {
    width: 100%;
  }
}

/* ==========================
   Celulares pequenos
========================== */
@media (max-width: 380px) {
  .grupo {
    padding: 15px;
  }

  .grupo h3 {
    font-size: 1.35rem;
  }

  .titulo-criterio span {
    font-size: .95rem;
  }

  .titulo-criterio strong {
    font-size: .8rem;
  }

  .estrelas {
    gap: 4px;
  }

  .estrelas button svg {
    width: 18px;
    height: 18px;
  }

  .resultado strong {
    font-size: 1.7rem;
  }
}
</style>
