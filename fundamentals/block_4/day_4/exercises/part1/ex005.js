//5

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};

let info2 = {
    personagem: 'Tio Patinhas',
    origem: `Christmas on Bear Mountain, Dell's Four Color Comics #178`,
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};



for(let information in info, info2){
delete info.recorrente
delete info2.recorrente;
console.log(`${info[information]} e ${info2[information]}`)

}
console.log(`Ambos iguais`)

