import { ref } from "vue";
import { avaliacoes as listaAvaliacoes } from "./avaliacoes";


const salvas = JSON.parse(
  localStorage.getItem("avaliacoes")
) || [];


const avaliacoes = ref(
  salvas.length ? salvas : listaAvaliacoes
);


export function useAvaliacoes() {


  function adicionarAvaliacao(avaliacao) {

    const novaAvaliacao = {
      ...avaliacao,
      id: Date.now(),
      criadaPeloUsuario: true
    };


    avaliacoes.value.unshift(novaAvaliacao);


    localStorage.setItem(
      "avaliacoes",
      JSON.stringify(avaliacoes.value)
    );

  }


  return {
    avaliacoes,
    adicionarAvaliacao
  };

}