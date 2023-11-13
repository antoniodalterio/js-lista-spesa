'use strict';
const spesa = [
  'mazza',
  'palla',
  'guantone',
  'caschetto',
  'borsa',
  'protezioni',
  'paradenti',
];
let i = 0;
const lista = document.querySelector('ul');

while (i !== spesa.length) {
  const prodotto = document.createElement('li');
  prodotto.innerHTML = spesa[i];
  lista.append(prodotto);
  i++;
}
