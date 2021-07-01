let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
    person: ['array1', 'array2', 'array3']
};

for (let key in names){
    console.log(`Olá ${names[key]}`)
}