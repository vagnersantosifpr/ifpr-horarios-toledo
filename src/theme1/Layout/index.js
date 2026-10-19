// src/theme/Layout/index.js

import React, { useEffect } from 'react';
// Importação original do componente Layout que estamos envolvendo
import Layout from '@theme-original/Layout'; 

export default function LayoutWrapper(props) {
  useEffect(() => {
    // A mesma lógica de antes, agora em um escopo global
    const urlAte2025 = 'https://horario-ifpr-assis-chateaubriand.netlify.app/docs/2026.1.1/intro';
    const urlAPartirDe2026 = 'https://horario-ifpr-assis-chateaubriand.netlify.app/docs/intro';

    const cutoffDate = new Date(2025, 11, 16); // 16 de Dezembro de 2025
    const currentDate = new Date();

    if (currentDate < cutoffDate) {
      window.location.replace(urlAte2025);
    } else {
      window.location.replace(urlAPartirDe2026);
    }
  }, []); // Executa apenas uma vez

  // Enquanto o script de redirecionamento acima está sendo executado,
  // exibimos uma mensagem simples em vez de renderizar o site inteiro.
  // Isso evita que o conteúdo antigo apareça rapidamente antes do redirecionamento.
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Redirecionando...</h1>
      <p>Você está sendo redirecionado para a versão oficial do quadro de horários.</p>
    </div>
  );

  // Nota: Não estamos mais renderizando o <Layout {...props} /> original
  // porque o único propósito deste site agora é redirecionar.
}