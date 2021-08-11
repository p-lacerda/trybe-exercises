const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
  
//DESAFIO 1 
  function mudaTurno(object, key, value){ 
    let newObject = {
      [key]: value
    };

    // let newKey = key

    // 1. newObject[newKey] = value
    // 2. object[key] = value
    return Object.assign(object, newObject)
  }

console.log(mudaTurno(lesson2, 'turno', 'noite'))

//DESAFIO 2
  function listaChave(object){ 
    return Object.keys(object);
  }
  console.log(listaChave(lesson3))