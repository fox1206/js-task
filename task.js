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
  console.log(typeof bin);
  
  return bin;
}

function toBinary1(number){
  let b = '';
  let num = number;
  while (num !== 0) {
    bin = num % 2 + b;
    num = Math.floor(num / 2);
  }  
  return b;
}

console.log(toBinary1(12));


/* Создайте функцию, которая принимает целое число в качестве аргумента 
и возвращает "Четное" для четных чисел или "Нечетное" для нечетных чисел. */
function even_or_odd(number) {
  let n = number;
  return (n % 2 === 0) ? 'Even': 'Odd';
}

console.log(even_or_odd(21));


/* Учитывая строку цифр, вы должны заменить любую цифру ниже 5 на "0", 
а любую цифру 5 и выше - на "1". Верните результирующую строку. 1005981 ---> 0001110 */
function fakeBin(x){
  let str = String(x);
  let result = '';
  for(let i = 0; i <str.length; i++){
    if(str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 52){
      result += str[i] = '0';
    }
    else{
      result += str[i] = '1';
    }
  }
  return result;
}

console.log(fakeBin(23561));


/* Определите площадь наибольшего квадрата, 
который может поместиться внутри круга радиусом r. */
function areaLargestSquare(r) {
  let s = Math.pow(r, 2) * 2;
  return s;
}

console.log(areaLargestSquare(5));


/* Определите общее количество цифр в целом числе (n>=0), заданном в качестве входных данных для функции.
1 --> 1 , 369 --> 3 */
function digits(n) {
  let num = String(n).length;
  return Number(num);
}

console.log(digits(56999876666));


/* Дано целое число или число с плавающей запятой, 
найдите его противоположность */
function opposite(number) {
  return (number > 0) ? -number : Math.abs(number);
}

console.log(opposite(-20));


/* Поиск периметра фигуры */
function perimeterSequence(a,n) {
  let p = 0;
  for (let i = 0; i < n; i++) {
    p += 4 * a;
  }
  return p;
}

console.log(perimeterSequence(1, 3));


/* Создать функцию, которая удаляет первый и последний символы строки.  */
function removeChar(str){
  // let newStr = str.slice(1, str.length-1);
  // return newStr;
  let text = '';
  for (let i = 1; i < str.length-1; i++) {
    text += str[i]; 
  }
  return text;
 }

 console.log(removeChar("Hello"));


 /* Удалите пробелы из строки, а затем верните результирующую строку. */
 function noSpace(x){    
    let str = '';
    for (let i = 0; i < x.length; i++) {
      if(x.charCodeAt(i) != 32){
        str += x[i];
      }  
    }
    return str;
  }

  console.log(noSpace("Go to the hell"));

  /* Завершите решение так, чтобы оно возвращало значение true, 
  если переданный первый аргумент (строка) заканчивается 2-м аргументом (также строкой). */
  function solution(str, ending){
    return str.endsWith(ending);
  }

  console.log(solution("abcd", "cdp"));