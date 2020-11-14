function otraFuncion() {
    return seRompe()
}

function seRompe() {
    return 3 + z
}

function seRompeAsincrona(callback) {
    setTimeout(function () {
    try {
        return 3 + z
    } catch (error) {
        console.error('error en funcion asincrona')
        callback(error)
    }

    }, '1000')
}

try {
    //otraFuncion()
    seRompeAsincrona(function (error) {
        console.error(error)
    })
} catch (err) {
    console.error('se rompio ' + err.message)
}


