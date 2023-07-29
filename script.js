const content = document.getElementById('content');
const input = document.getElementById('input');
const button = document.getElementById('button');

button.onclick = function() {
  if (input.value !== "") {
    var paragraph = document.createElement('p');

  }
  paragraph.innerText = input.value;

  paragraph.classList.add('paragraph-style');

  content.appendChild(paragraph);

  input.value = "";

  paragraph.onclick = function() {
    paragraph.classList.add('paragraph-clicked')
  }

  paragraph.ondblclick = function() {
    content.removeChild(paragraph);
  }
}