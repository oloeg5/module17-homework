function revertString(str) {
  let revertedStr = "";
  
  for (let i = str.length - 1; i >= 0; i--) {
    revertedStr += str[i];
  }
  return revertedStr;
}

function repeatWord(word, count) {
	let words = '';
  if(typeof word === "string"){
    for (let i = 1; i <= count; ++i) {
  	words += word + i + ', ';
  }
  return words;}
  if(typeof word === "number" || "boolean"){
    word = String(word);
    for (let i = 1; i <= count; ++i) {
      words += word + i + ', ';
    }
    return words;}
}

module.exports = repeatWord; 