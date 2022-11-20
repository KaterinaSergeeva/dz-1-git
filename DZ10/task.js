function regEx(){
    let str = prompt('Enter something: ');
    const regexpDate = /\d{1,2}[\.\/-]\d{2}[\.\/-]\d{2,4}/;
    const regexpEmail = /[a-zA-Z0-9_\.]+@[a-z0-9]+\.[a-z]{2,5}/;
    const regexpPhone = /\+?\d{1,3}[\s\(\-]{0,1}\d{3}[\s\)\-]{0,1}\d{3}[\s\-]{0,1}\d{2}[\s\-]{0,1}\d{2}/;
    
    if (regexpDate.test(str)) {
        console.log("It's a date!");
    } else if (regexpEmail.test(str)){
        console.log("It's email!");
    } else if (regexpPhone.test(str)){
        console.log("It's phone number!");
    } else {
        console.log("Brrrr, something else");
    }
}

/* Пользователь вводит текстовую строку. Определить с
помощью регулярного выражения, является ли
введённая строка:
1.Датой.
2.Адресом электронной почты.
3.*Номером телефона. */