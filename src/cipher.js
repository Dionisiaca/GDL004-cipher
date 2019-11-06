window.cipher = {
  encode: (offset, userMsg) => {  
  let encodeMsg= "";
  for (let i = 0; i < userMsg.length; i++) {
    let asciiMsg = userMsg.charCodeAt(i);
    if (65 <= asciiMsg && asciiMsg <=90) {
      encodeMsg += String.fromCharCode(
        ((asciiMsg - 65 + parseInt(offset)) % 26) + 65
      );
    } else if (97 <= asciiMsg && asciiMsg <= 122) {
      encodeMsg += String.fromCharCode(
        ((asciiMsg - 97 + parseInt(offset)) %26) + 97
      );
    } else {
      encodeMsg += userMsg.charAt(i);
    }
  }
  return encodeMsg;
  console.log(encodeMsg, "encodeMsg");
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

  /*CIFRADO*/
/*encode: (offset, userMsg) => {  
  let upperCaseMsg = userMsg.toUpperCase();
  let encodeMsg= "";
  for (let i = 0; i < userMsg.length; i++) {
    let result = (upperCaseMsg.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
    encodeMsg += String.fromCharCode(result);
  }
  return encodeMsg;*/