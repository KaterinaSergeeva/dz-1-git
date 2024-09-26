export function isWord(str){
    let arr = str.split(" ");
    if (arr.length > 1)  return false ;
      else return true ;
}

/* 2.Напишите функцию isWord, которая принимает на
вход текстовую строку. Функция возвращает true, если
строка состоит из одного слова и false, если из
нескольких.
*/