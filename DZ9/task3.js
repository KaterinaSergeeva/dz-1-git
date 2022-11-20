function equation(){
    let [a,b,c] = prompt('Enter a,b,c: ').split(',');
    a = Number(a);
    b = Number(b);
    c = Number(c);
    let D = b*b - 4*a*c;
    if (D<0) {
        console.log("No valid roots");
    } else if (D=0) {
        let x = -b/(2*a);
        console.log(`X = ${x}`);
    } else {
        let x1 = (-b-Math.sqrt(D))/(2*a);
        let x2 = (-b+Math.sqrt(D))/(2*a);
        console.log(`X1 = ${x1}, X2 = ${x2}`);
    }
}

/* *Пользователь вводит числа a, b и c. Написать
программу, выводящую корни квадратного
уравнения с коэффициентами a, b и c. */