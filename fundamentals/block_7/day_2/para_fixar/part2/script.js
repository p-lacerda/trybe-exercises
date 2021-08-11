const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };

  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };


// console.log(`${Object.keys(student1)[0]}: ${student1.Html}`)

const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    const arrayOfLevels = Object.values(student);
    for(index in arrayOfSkills){
        console.log(`${arrayOfSkills[index]}, Nível: ${arrayOfLevels[index]}`)
    }
};

console.log(Object.values(student1))

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);