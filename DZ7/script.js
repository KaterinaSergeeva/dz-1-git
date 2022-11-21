const button = document.querySelector('.button');
button.addEventListener('click', onClick);
const input = document.querySelector('.text-field');
input.addEventListener('change',(e)=>hideButton(e.target.value));

function hideButton(value){
if (getInputText().length <1) {
    button.style.display = "none";
} else {
    button.style.display = "block";
}
}
hideButton(getInputText());

function onClick(){
    const text = getInputText();
    addParagraph(text);
    console.log(11111);
}

function getInputText(){
    
    return input.value;
}

function addParagraph(text){
    const paragraph = document.createElement('p');
    paragraph.innerText = text;
}



/*Сверстать страницу и подключить к ней файл со
скриптом. На странице должны быть три текстовых
параграфа, поле ввода и кнопка. Напишите скрипт,
который будет выполнять следующие условия:
1.Кнопка скрыта, если в поле ввода нет значения.
2.При клике на кнопку добавляется новый параграф,
содержащий текст из поля ввода.
3.*Если параграфов становится больше 5, первый из
них удаляется.*/