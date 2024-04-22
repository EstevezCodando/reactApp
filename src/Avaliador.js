import React from "react";
import { FaStar } from "react-icons/fa";

export default function Avaliador(props) {
  function geraAvaliacao() {
    const avaliacao = [];
    for (let i = 0; i < props.quantidade; i++) {
      if (i < props.avaliacao) {
        avaliacao.push(<FaStar color="red" />);
      } else {
        avaliacao.push(<FaStar color="grey" />);
      }
    }
    return avaliacao;
  }
  return geraAvaliacao();
}
