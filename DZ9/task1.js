export function isRightTriangle(a,b,c){
    if (
        Math.pow(a,2)+Math.pow(b,2)===Math.pow(c,2) ||
        Math.pow(a,2)+Math.pow(c,2)===Math.pow(b,2) ||
        Math.pow(c,2)+Math.pow(b,2)===Math.pow(a,2)
    ){
        return console.log("Right triangle")
    } else {
        return console.log("Triangle is not rectangular")
    }

}

/* 1.Даны длины трёх сторон треугольника. Определить,
является ли треугольник прямоугольным.*/