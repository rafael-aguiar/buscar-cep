const inputCep = document.querySelector('[data-cep="input"]');
const buttonCep = document.querySelector('[data-cep="button"]');
const inputResultado = document.querySelectorAll('[data-resultado] input');

buttonCep.addEventListener('click', handleClick);

function buscarCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
.then(response => response.json())
.then(response => {
  let i = 0;
  for (item in response) {
    inputResultado[i].value = response[item]
    i++;
  }
})
}

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
   if (cep !== '') {
     buscarCep(cep);
   } else {
     inputCep.placeholder = 'Insira um CEP válido!'
   }
}