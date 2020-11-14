function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('hola ' + nombre)
        miCallback(nombre)
    }, 1000)
}

function adios(nombre, otroCallback){
    setTimeout(function () {
        console.log('adios ' + nombre)
        otroCallback()
    }, 1000)
}


console.log('iniciando proceso')

hola('Carlos', function (nombre) {
    adios(nombre, function () {
        console.log('terminando proceso')
    })
})
