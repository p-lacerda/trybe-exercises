let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var sum = numbers.reduce(function(a, b){
    return a + b / numbers.length;
}, 0);

    if(sum > 20){
        console.log("valor maior que 20")
    } else {
        console.log("valor menor ou igual a 20")
    }
