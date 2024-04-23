import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

export default function Avaliador({ avaliacao, quantidade, titulo }) {
  const chaveLocalStorage = `avaliacao-${titulo}`;
  const avaliacaoInicial = localStorage.getItem(chaveLocalStorage) || avaliacao;

  const [selecionadas, setSelecionadas] = useState(
    parseInt(avaliacaoInicial, 10)
  );

  useEffect(() => {
    localStorage.setItem(chaveLocalStorage, selecionadas);
  }, [selecionadas]);

  function handleClick(novaAvaliacao) {
    setSelecionadas(novaAvaliacao);
  }

  function geraAvaliacao() {
    const estrelas = [];
    for (let i = 1; i <= quantidade; i++) {
      estrelas.push(
        <FaStar
          key={i}
          color={i <= selecionadas ? "red" : "grey"}
          onClick={() => handleClick(i)}
        />
      );
    }
    return estrelas;
  }

  return (
    <div style={{ margin: "5px", padding: "10px" }}>
      {geraAvaliacao()} {titulo}
    </div>
  );
}
