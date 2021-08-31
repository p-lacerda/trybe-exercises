const compromissos = ['compromisso1', 'compromisso2', 'compromisso3']

const Task = (value) => {
  const somevalue = value.map((val) => val)
  return (
    console.log(somevalue)
  );
}

Task(compromissos)