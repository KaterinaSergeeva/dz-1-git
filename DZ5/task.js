export function massives(firstArr){
  // let firstArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];//Array.from({length: 10}, () => Math.floor(Math.random() * 100));
   let secondArr = firstArr.map((num) => num * 2);
   let maxOfFirstArr = Math.max.apply(null,firstArr);
   let minfFirstArr = Math.min.apply(null,firstArr);
   //console.log(firstArr);
   //console.log(secondArr);
   console.log(maxOfFirstArr);
   console.log(minfFirstArr);
}

/* Создайте массив целых чисел из 10 элементов.

1.Выведите в консоль сумму всех элементов массива.
2.Создайте новый массив на основе исходного, в
котором каждый элемент будет вдвое больше
элемента исходного массива с таким же индексом.
(a[1] = 3, b[1] = 6, где a — исходный массив, b — новый
массив).
3.*Найдите и выведите в консоль наибольший и
наименьший элементы исходного массива. */