import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Avaliador({ avaliacao, quantidade, titulo }) {
  const [selecionadas, setSelecionadas] = useState(avaliacao);

  function handleClick() {
    if (selecionadas >= quantidade) {
      setSelecionadas(0);
    } else {
      setSelecionadas(selecionadas + 1);
    }
  }

  function geraAvaliacao() {
    const avaliacao = [];

    for (let i = 0; i < quantidade; i++) {
      if (i < selecionadas) {
        avaliacao.push(<FaStar color="red" onClick={handleClick} />);
      } else {
        avaliacao.push(<FaStar color="grey" onClick={handleClick} />);
      }
    }
    return avaliacao;
  }
  return (
    <div style={{ margin: "5px", padding: "10px" }}>
      {geraAvaliacao()} {titulo}
    </div>
  );
}
