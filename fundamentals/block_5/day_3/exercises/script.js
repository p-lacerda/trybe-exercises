function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

//1

  function createDezDaysList(){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const dezDaysAdd = document.querySelector('.week-days');

    for (let i = 0; i < dezDaysList.length; i+= 1){
      const numDay = dezDaysList[i];
      const dezDaysItem = document.createElement('li');
      dezDaysItem.innerHTML = numDay
      dezDaysItem.className = 'day';

     if(dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31){
      dezDaysItem.classList.add('holliday');
     }

     if(dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25){
      dezDaysItem.classList.add('friday');
     }
     dezDaysAdd.appendChild(dezDaysItem)
    };
  };

  createDezDaysList()

  //2

  function addButton(string, id){
    const botaoAtividades = document.querySelector('.buttons-container')
    const btn = document.createElement('button');
    btn.innerText = string;
    btn.id = id;
    botaoAtividades.appendChild(btn);
    
  }

  addButton('Feriados', 'btn-holliday')

  //3 

  document.querySelector('#btn-holliday').addEventListener('click', mudarCor)
  
    function mudarCor(color){
     for (let ind of document.querySelectorAll('.holliday')){
       ind.style.backgroundColor = 'red'
     }
  }

  //4
addButton('Sexta-Feira', 'btn-friday')

//5

document.querySelector('#btn-friday').addEventListener('click', mudarTexto)

function mudarTexto(){
  for (let ind of document.querySelectorAll('.friday')){
    ind.innerText = 'ITS FRIDAY'
  }
}

//6