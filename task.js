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


/* определить какой век по году*/
function century(year) {
  if (Number.isInteger(year)) {
    if(year % 100 == 0){
      return year / 100;
    }
    else {
      return Math.floor((year / 100 + 1));
    }
  }
  else {
    return 'not year';
  }
}

console.log(century(2022));


/* Конвертировать число в строку: 123 --> "123" */
function numberToString(num) {
  return num.toString();
}

console.log(typeof numberToString(123));


/* Конвертировать строку в число: "123" --> 123 */
var stringToNumber = function(str) {
    return parseInt(str);
} 

console.log(typeof stringToNumber('123'));


/* Вернет число в двоичном формате */
function toBinary(n){
  let bin = +(n.toString(2));
  // console.log(typeof bin);
  return bin;
}

console.log(toBinary(12));
