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

  document.getElementById("showResult").inenrText = decodeSentence;
}

document.getElementById("encode").addEventListener("click", encodeSentence);

document.getElementById("decode").addEventListener("click", decodeSentence);