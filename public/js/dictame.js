window.onload = function() {
  // onClick event for "Enviar" button
  document.getElementById('send').onclick = function() {
    document.getElementById('textArea').hidden = true;   // hide the textarea
    textAreaVal = document.getElementById('textArea').value;  // get the value entered by the user
    document.getElementById('userText').innerHTML = textAreaVal; // set the value to a hidden span
    document.getElementById('userText').hidden = false;  // show the span containing the user text
    document.getElementById('originText').hidden = false; // show original text
    document.getElementById('send').hidden = true; // hide the "Solucón" button
    document.getElementById('back').hidden = false; // show the "Atras" button
    document.getElementById('yourLabel').hidden = false; // show label
    fetch("js/textos.json")
    .then(response => response.json())
    .then(texts => {
    	document.getElementById('originText').innerHTML = texts.text1;	
    })
  }

  // onClick event for "Atras" button
  document.getElementById('back').onclick = function(){
    document.getElementById('textArea').value = "";
    document.getElementById('textArea').hidden = false;   // show the textarea
    document.getElementById('userText').hidden = true;  // hide the span containing the user text
    document.getElementById('originText').hidden = true; // hide original text
    document.getElementById('yourLabel').hidden = true; // hide label
    document.getElementById('send').hidden = false; // show the "Solucón" button
    document.getElementById('back').hidden = true; // hide the "Solucón" button
  }
}
