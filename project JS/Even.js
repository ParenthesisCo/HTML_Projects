const numbers = [1, 2, 3, 4];

let Even = numbers.filter(function (value) {
    return value % 2 == 0;
})

console.log(Even);
