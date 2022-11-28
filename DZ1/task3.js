export function sumInputNubers(){
    const num = window.prompt('Enter the number: ');
    const digit3 = num % 10;
    const digit1 = (num - num % 100)/100;
    const digit2 = (num - digit1 * 100 - digit3)/10;
    return  console.log(digit1 + digit2 + digit3); 
}


/*3.*Написать программу, которая запрашивает у
пользователя ввод трёхзначного числа, а потом
выводит в консоль сумму цифр введённого числа.*/