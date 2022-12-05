export function month(){
    const num = Number(prompt('Enter the number: '));
    switch (num){
        case 1:
            return console.log("January");
            break;
        case 2:
            return console.log("February");
            break;
        case 3:
            return console.log("March");
            break;
        case 4:
            return console.log("April");
            break;
        case 5:
            return console.log("May");
            break;
        case 6:
            return console.log("June");
            break;
        case 7:
            return console.log("July");
            break;
        case 8:
            return console.log("August");
            break;
        case 9:
            return console.log("September");
            break;
        case 10:
            return console.log("October");
            break;
        case 11:
            return console.log("November");
            break;
        case 12:
            return console.log("December");
            break;
        default: console.log("There is no month");
    
    }

}

/* Запросить у пользователя ввод числа от 1 до 12.
Вывести в консоль название месяца, соответствующее
этому числу (1 — январь, 2 — февраль и т.д.).
*/