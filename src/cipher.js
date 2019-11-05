window.cipher = {

  /*CIFRADO*/
encode: (offset, userMsg) => {  
  let upperCaseMsg = userMsg.toUpperCase();
  let encodeMsg= "";
  for (let i = 0; i < userMsg.length; i++) {
    let result = (upperCaseMsg.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
    encodeMsg += String.fromCharCode(result);
  }
  return encodeMsg;
},
  /*DESCIFRADO*/
  decode: (offset, userMsg) => {
  let upperCaseMsg = userMsg.toUpperCase();
  let decodeMsg= "";
  for (let i = 0; i < userMsg.length; i++) {
    let result = (upperCaseMsg.charCodeAt(i) - 90 - parseInt(offset)) % 26 + 90;
    decodeMsg += String.fromCharCode(result);
  }
  return decodeMsg;
  }

}