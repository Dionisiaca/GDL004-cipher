/*BOTON INGRESAR*/
document.getElementById("getin").addEventListener("click", startCipher);

function startCipher(){
  let secretPassword = document.getElementById("password").value;
  if (secretPassword == "1234") {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("cipherScreen").style.display = "block";
  }else {
    alert("INVALID PASSWORD. Try with 1234");
  }
}

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
let resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", resetData);
function resetData() {
  document.getElementById("offset").value = "";
  document.getElementById("userMsg").value = "";
  document.getElementById("showResult").value = ""; /* no sé que indicador poner para que borre el texto traducido*/
  
}

/*BOTON SALIR*/
document.getElementById("exitBtn").addEventListener("click", exitCipher);

function exitCipher(){
  /*let exitAction = document.getElementById("exitBtn");*/
  document.getElementById("cipherScreen").style.display = "none";
  document.getElementById("startScreen").style.display = "block";
  document.getElementById("password").value = "";
  

}

/*BOTON INFO*/
document.getElementById("info").addEventListener("click", showInfo);

function showInfo(){
  document.getElementById("infoScreen").style.display = "block";
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("cipherScreen").style.display = "none";
}

/*BOTON GO BACK*/
document.getElementById("back").addEventListener("click", goBack);

function goBack(){
  document.getElementById("infoScreen").style.display = "none";
  document.getElementById("startScreen").style.display = "block";
  document.getElementById("cipherScreen").style.display = "none";
}
