function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('hola ' + nombre)
            resolve(nombre)
        }, 1000)
    });

}

function hablar(nombre) {
    return new Promise ((resolve, reject) => {
        setTimeout(function () {
            console.log('bla bla bla')
            resolve(nombre)
            reject('error =(')
        }, 1000)
    })
}

function adios(nombre){
    return new Promise ((resolve, reject) => {
        setTimeout(function () {
            console.log('adios ' + nombre)
            resolve()
        }, 1000)
    })

}


//------
console.log('iniciando el proceso')

hola('carlos')
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('terminando el proceso')
    })
    .catch(error => {
        console.error('fallo =(')
        console.error(error)
    })

