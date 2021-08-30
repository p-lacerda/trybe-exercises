const obj = {
    name: 'Paulo',
    nota: '10',
    aniversario: 'Abril'
};

//Não prático
// console.log(obj.name)
// console.log(obj.nota)
// console.log(obj.aniversario)

//Prático
const { name } = obj;
console.log(name)


/// ----------------- Default Destructuring

const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
  const { nationality = 'Brasileiro' } = person;
  console.log(nationality)

// --------------------- Default Param
// const greeting = (user) => {
//     if(user === undefined){
//         console.log(`Welcome Stranger!!`)
//     } else {
//         console.log(`Welcome ${user}`)
//     }
// }

// greeting(); // Welcome undefined!

//Segunda forma ----------------------------------

// const greeting = (user) => {
//     const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
//     console.log(`Welcome ${userDisplay}!`);
//   };
  
//   greeting(); // Welcome usuário!