import './styles/style.css';
import $ from 'jquery';

const textAreaIn = document.querySelector('.message-field');
const textAreaOut = document.querySelector('.message-formatted');
const resetButton = document.querySelector('.reset-button');

textAreaIn.addEventListener('input', function () { 
  textAreaOut.innerHTML = textAreaIn.value.toLowerCase().trim().replace(/\s+/g, ' ').replace(/\n/g, ' ');
});

resetButton.addEventListener('click', function () { 
  textAreaIn.value = '';
  textAreaOut.innerHTML = '';
});