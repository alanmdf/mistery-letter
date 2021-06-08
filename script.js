window.onload = function() {
  const textInput = document.getElementById('carta-texto');
  const button = document.getElementById('criar-carta');
  const paragraph = document.getElementById('carta-gerada');

  button.addEventListener('click', generateLetter);

  function generateLetter () {
    const inputValue = textInput.value;
    paragraph.innerHTML = '';
    const spanArray = inputValue.split(' ');
    for (let index = 0; index < spanArray.length; index += 1) {
      const span = document.createElement('span');
      span.innerHTML = spanArray[index];
      paragraph.appendChild(span);
    }
  }
}