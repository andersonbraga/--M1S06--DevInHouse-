const temporizado = () => {
  const interval = setInterval(() => {
    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleTimeString("pt-BR");

    console.log(dataAtual);
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
  }, 10000);
};
temporizado();
