function newObj(object, key, value){
    newObject = object;
    newObject = {
    
    };

    let newKey = key;
    let newValue = value;
    newObject[newKey] = newValue;

    return newObject
}

console.log(newObj('usuario', 'idade', 18))
