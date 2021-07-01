function escada(degraus) {
    const escadaArray = []
    const espacoChar = ' ';
    const degrauChar = '#';

    for(let i = 1; i <= degraus; i++){
        const espacosParaAdd = espacoChar.repeat(degraus - i)
        const degrausParaAdd = degrauChar.repeat(i);

        escadaArray.push(degrausParaAdd);
    }

    return escadaArray;
}

console.log(escada(3));
