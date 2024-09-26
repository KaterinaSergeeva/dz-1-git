export function pow(a,x){
    let result =1;

    for (let i = 1; i <= x; i++){
        result = result * a;
    }

    return result;
}

/* Напишите функцию pow(a, x), которая вернёт
значение числа a, возведённого в степень x. */