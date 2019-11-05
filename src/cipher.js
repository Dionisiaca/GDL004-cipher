window.cipher = {


encode: (offset, userMsg) => {  
  let encodeMsg= "";
  for (let i = 0; i < userMsg.length; i++) {
    let result = (userMsg.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
    encodeMsg += String.fromCharCode(result);
  }
  return encodeMsg;
},
  /*DESCIFRADO*/
  decode: (offset, userMsg) => {
  let decodeMsg= "";
  for (let i = 0; i < userMsg.length; i++) {
    let result = (userMsg.charCodeAt(i) - 90 - parseInt(offset)) % 26 + 90;
    decodeMsg += String.fromCharCode(result);
  }
  return decodeMsg
  }

}