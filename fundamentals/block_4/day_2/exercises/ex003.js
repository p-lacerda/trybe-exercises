let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var sum = numbers.reduce(function(a, b){
    return a + b / numbers.length;
}, 0);

console.log(sum);