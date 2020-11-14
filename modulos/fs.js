const fs = require('fs')

function leer(ruta, callback) {
    fs.readFile(ruta, (err, data) => {
        callback(data.toString())
    })
}

function escribir(ruta, contenido, callback) {
    fs.writeFile(ruta, contenido, function (err) {
        if (err) {
            console.log('fallo =(', err)
        } else {
            console.log('se ha escrito correctamente')
        }
    })
}

function eliminar(ruta, callback) {
    fs.unlink(ruta,  function (err) {
        if (err) {
            console.log('fallo =(', err)
        } else {
            console.log('se ha eliminado correctamente')
        }
    })
}

//--------

//leer(__dirname + '/archivo.txt', console.log)

//escribir(__dirname + '/archivo1.txt', 'soy un archivo nuevo', console.log)

eliminar(__dirname + '/archivo1.txt', console.log)
