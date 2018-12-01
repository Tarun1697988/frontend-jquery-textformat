import './styles/style.css';

const textAreaIn = document.querySelector('.message-field');
const textAreaOut = document.querySelector('.message-formatted');
const resetButton = document.querySelector('.reset-button');


function textTransform (text) {
	const removeDoubleSpaceRegExp = /\s+/g;
	const removeLineTransitionRegExp = /\n/g;

	return text.toLowerCase().trim()
    .replace(removeDoubleSpaceRegExp, ' ')
    .replace(removeLineTransitionRegExp, ' ');
}

function addText (element, text) {
	return element.innerHTML = text;
}

textAreaIn.addEventListener('input', function () {
	let textInput = textTransform(textAreaIn.value);

	addText(textAreaOut, textInput);
});

resetButton.addEventListener('click', function () {
	textAreaOut.innerHTML = '';
});