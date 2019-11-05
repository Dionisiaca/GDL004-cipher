/*BOTONES CIFRAR Y DESCIFRAR*/
function encodeSentence(){

  let offset = document.getElementById("offset").value;
  let userMsg = document.getElementById("userMsg").value;
  let encodeSentence = window.cipher.encode(offset, userMsg);
  console.log(encodeSentence, "encodeSentence");
  document.getElementById("showResult").innerHTML = encodeSentence;

}

function decodeSentence(){
  let offset = document.getElementById("offset").value;
  let userMsg = document.getElementById("userMsg").value;
  let decodeSentence = window.cipher.decode(offset, userMsg);
  console.log(decodeSentence, "decodeSentence");
  document.getElementById("showResult").innerHTML = decodeSentence;
}

document.getElementById("encode").addEventListener("click", encodeSentence);

document.getElementById("decode").addEventListener("click", decodeSentence);

/*BOTON RESET*/