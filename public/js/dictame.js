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
    document.getElementById('yourText').hidden = false; // show label
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
    document.getElementById('yourText').hidden = true; // hide label
    document.getElementById('send').hidden = false; // show the "Solucón" button
    document.getElementById('back').hidden = true; // hide the "Solucón" button
  }

  var audiosList = ["./audios/dictation1.mp3","./audios/dictation2.mp3","./audios/dictation3.mp3"];
  var audiosTitle = ["Bear breaks into house","10 New Year's Resolutions You Probably Won't Keep","Strange Things Happened at Halloween"];
  var indx = -1;
  
  document.getElementById('forward').onclick = function(){
  	indx++;
  	if (indx >= audiosList.length) {
  		indx = 0;
  	}
  	document.getElementsByTagName("audio")[0].src = audiosList[indx];
  	document.getElementById('h4title').firstChild.textContent = audiosTitle[indx];
  }

}//finish function
