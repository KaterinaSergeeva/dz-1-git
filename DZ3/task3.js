export function mean(){
    const N = prompt('Enter the number: ');
    let counter=0;
    let sumOdd=0;
    for(let i=1;i<=N;i++){   
        if(i%2 !==0){
            sumOdd=sumOdd+i;
            counter+=1;
        }
    }
    console.log(sumOdd/counter);
}

/*Запросить у пользователя ввод числа N. Вывести в
консоль среднее арифметическое всех нечётных
чисел от 1 до N.*/