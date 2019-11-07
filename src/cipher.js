window.cipher = {
 /*CIFRADO*/ 
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
        ((asciiMsg - 97 + parseInt(offset)) % 26) + 97
      );
    } else {
      encodeMsg += userMsg.charAt(i);
    }
  }
  return encodeMsg;

},
  /*DESCIFRADO*/
  decode: (offset, userMsg) => {
  let decodeMsg = "";
  for (let i = 0; i < userMsg.length; i++) {
    let asciiMsg = userMsg.charCodeAt(i);
    if (65 <= asciiMsg && asciiMsg <= 90){
      decodeMsg += String.fromCharCode(
        ((asciiMsg + 65 - parseInt(offset)) % 26) + 65
      );
    } else if (97 <= asciiMsg && asciiMsg <= 122){
      decodeMsg += String.fromCharCode(
        ((asciiMsg - 97 - parseInt(offset) + 52) % 26) + 97
      );
    } else {
      decodeMsg += userMsg.charAt(i);
    }
  }
  return decodeMsg;
}};