function geraDivi (number) {
  const newArr = [number / 2, number / 3, number / 5, number / 10];
  return newArr;
}

const promise = new Promise((resolve, reject) => {
  let array = []
  for(let i = 0; i < 10; i += 1){
    const random = Math.floor(Math.random() * (50 - 1) + 1);
    array.push(random ** 2)
  }
  const arrayLength = array.reduce((acc, curr) => acc + curr, 0)  

  if (arrayLength < 8000) {
    return resolve(geraDivi(arrayLength));
  }
    reject(console.log('É mais de oito mil! Essa promise deve estar quebrada!'))
  
  })
  .then(arrayLength => console.log(arrayLength.reduce((acc, curr) => acc + curr, 0)));
