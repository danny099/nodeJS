function asincrona(callback) {
    setTimeout(function () {
        try {
            let a = 3 + z
            callback(null, a)
        } catch (err) {
            callback(err, null)
        }
    }, 1000)
}

asincrona(function (err, dato) {
    if (err) {
        console.error('tenemos un error')
        console.error(err)
        return false
    }
    console.log('todo ok')
})
