// Задание 7.

/*
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, 
то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и 
так далее.
*/

let arr2 = [1, 'string', 5, 10, 7, null, true, '*', 24, 0, NaN, false, 40, 25];
let even = 0;
let odd = 0;

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] !== true && arr2[i] % 2 === 1) {
        // console.log(`Нечетный элемент ${arr2[i]}`);
        odd++;
    } else if ((arr2[i] === isNaN || arr2[i] !== null && arr2[i] !== 0 && arr2[i] !== false) && arr2[i] % 2 === 0) {
        // console.log(`Четный элемент ${arr2[i]}`);
        even++;
    }
}
console.log(`Количество четных элементов - ${even}`);
console.log(`Количество нечетных элементов - ${odd}`);

//======================================================================================================================