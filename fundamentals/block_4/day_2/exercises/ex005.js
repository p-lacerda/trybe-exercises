var numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// var max = arr.reduce(function(a, b) {
//     return Math.max(a, b);
//   });

let maiorValor = 0;

for(let number of numbers){
    if(maiorValor < number){
        maiorValor = number;
    }
}

console.log(maiorValor)