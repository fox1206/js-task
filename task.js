/* функция для написания строки с заглавной буквы (содержащей одно слово)*/

function capitalizeWord(word) {
  let str = '';
  for (let i = 0; i < word.length; i++) {
    if(i == 0){
      str = word[i].toUpperCase();
    }
    else {
      str += word[i];
    }
  }
  return str;
}

console.log(capitalizeWord("maria"));