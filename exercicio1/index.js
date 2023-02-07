function sleep(valor) {
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(valor), 3000);
  }).then((valor) => {
    console.log(valor);
  });
}
sleep("Qualquer valor");
