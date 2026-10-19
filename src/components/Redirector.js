// src/components/Redirector.js

import React, { useEffect } from 'react';

const Redirector = () => {
  useEffect(() => {
    // URLs de destino
    const urlAte2025 = 'https://horario-ifpr-assis-chateaubriand.netlify.app/docs/2026.1.1/intro';
    const urlAPartirDe2026 = 'https://horario-ifpr-assis-chateaubriand.netlify.app/docs/intro';

    // Data de corte: 16 de Dezembro de 2025
    // O JavaScript conta meses de 0 a 11, então Dezembro é 11.
    const cutoffDate = new Date(2025, 11, 16); 
    const currentDate = new Date();

    // Verifica se a data atual é anterior à data de corte
    if (currentDate < cutoffDate) {
      // Redireciona para a URL antiga (versão 2026.1.1)
      window.location.replace(urlAte2025);
    } else {
      // Redireciona para a URL nova (versão mais recente)
      window.location.replace(urlAPartirDe2026);
    }
  }, []); // O array vazio [] garante que este efeito rode apenas uma vez

  // Mensagem exibida enquanto o redirecionamento ocorre
  return (
    <div>
      <h1>Redirecionando...</h1>
      <p>Você será redirecionado para o site oficial dos horários em instantes.</p>
      <p>
        Caso o redirecionamento não funcione, por favor, use um dos links abaixo:
      </p>
      <ul>
        <li><a href="https://horario-ifpr-assis-chateaubriand.netlify.app/docs/2026.1.1/intro">Acessar horário válido até 15/12/2025</a></li>
        <li><a href="https://horario-ifpr-assis-chateaubriand.netlify.app/docs/intro">Acessar horário válido a partir de 16/12/2025</a></li>
      </ul>
    </div>
  );
};

export default Redirector;