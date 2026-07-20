# ☕ Coffee Championship

Sistema desenvolvido para uma cooperativa de cafés especiais com o objetivo de registrar avaliações sensoriais e classificar os melhores cafés da safra através de um ranking.

A aplicação permite cadastrar cafés, realizar avaliações, visualizar histórico, consultar detalhes dos cafés e acompanhar a classificação geral.

---

# 📌 Telas da Aplicação

## 🏠 Home

Página inicial com apresentação do campeonato, resumo das avaliações e acesso às funcionalidades.



## 📝 Avaliações

Tela responsável pelo cadastro de novas avaliações e visualização do histórico de cafés avaliados.



## 🏆 Ranking

Página que apresenta os cafés classificados pela maior pontuação, mostrando o pódio e a tabela de classificação.


---

# 🚀 Tecnologias utilizadas

- Vue.js 3
- Vite
- JavaScript
- HTML
- CSS
- Vue Router
- LocalStorage

---

# 📚 Conceitos Vue.js utilizados

## Componentes

A aplicação foi dividida em componentes reutilizáveis:

- `CoffeeCard.vue`
  - Exibe informações resumidas dos cafés.

- `RatingForm.vue`
  - Responsável pelo cadastro das avaliações.

- `LeaderboardTable.vue`
  - Exibe o ranking dos cafés.

- `RatingStars.vue`
  - Componente utilizado para mostrar as notas através de estrelas.

- `CoffeeCarousel.vue`
  - Exibe os cafés com maiores avaliações em formato de carrossel.

A divisão em componentes facilita a organização e reutilização do código.

---

## Props

Foram utilizadas props para enviar informações entre componentes.

Exemplo:

- Envio dos dados de um café para o `CoffeeCard`.
- Envio da lista de cafés para o `LeaderboardTable`.

---

## Emits

O formulário utiliza eventos emitidos para enviar uma nova avaliação para o componente responsável pelo armazenamento.

Fluxo:

```
RatingForm
    ↓
emit("salvar")
    ↓
avaliacoesStore
```

---

## Computed Properties

Foram utilizados `computed` para criar valores calculados automaticamente:

- Quantidade total de avaliações
- Média geral dos cafés
- Maior nota
- Ranking ordenado
- Última avaliação cadastrada

---

## Vue Router

Foram criadas três rotas principais:

| Rota | Página |
|---|---|
| `/` | Página inicial |
| `/avaliacoes` | Cadastro e histórico das avaliações |
| `/ranking` | Classificação dos cafés |

Também foi criada uma página de detalhes para visualizar informações completas de cada café.

---

## LocalStorage

As avaliações cadastradas são armazenadas no navegador utilizando LocalStorage, permitindo que os dados continuem disponíveis após atualizar a página.

---

# ⚙️ Funcionalidades

✅ Cadastro de avaliações  
✅ Cálculo automático das notas  
✅ Histórico de avaliações cadastradas  
✅ Ranking dos cafés por pontuação  
✅ Visualização detalhada dos cafés  
✅ Carrossel dos melhores cafés  
✅ Persistência dos dados no navegador  

---

# 👩‍💻 Desenvolvimento

Projeto desenvolvido utilizando Vue.js 3 com organização baseada em componentes.