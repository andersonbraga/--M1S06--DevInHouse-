const obterIdadeMedia = async (nome) => {
  const url = `https://api.agify.io/?country_id=BR&name=${nome}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error", error);
  }
};
const form = document.getElementById("form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const nome = event.target.nome.value;
  const data = await obterIdadeMedia(nome);

  resultado.innerText = data.age;
});
