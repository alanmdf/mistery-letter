window.onload = function() {
  const textInput = document.getElementById('carta-texto');
  const button = document.getElementById('criar-carta');
  const paragraph = document.getElementById('carta-gerada');

  button.addEventListener('click', generateLetter);
  button.addEventListener('click', showErrorMessage);

  function generateLetter () {
    console.log(textInput.value.length);
    paragraph.innerHTML = '';
    const inputValue = textInput.value;
    const spanArray = inputValue.split(' ');
    for (let index = 0; index < spanArray.length; index += 1) {
      const span = document.createElement('span');
      span.innerHTML = spanArray[index];
      paragraph.appendChild(span);
    }
  }

  function showErrorMessage () {
    if (textInput.value.trim() === '') {
    const errorMessage = document.createElement('span');
    errorMessage.innerHTML = 'Por favor, digite o conteúdo da carta.';
    paragraph.appendChild(errorMessage);
    }
  }
}
// let blankSpace = ' ';
