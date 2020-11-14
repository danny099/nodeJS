let i = 0
let interval = setInterval(function () {
    console.log('holi =)')
    if (i === 3) {
        clearInterval(interval)
    }
    i++
}, 1000)

setImmediate(function () {
    console.log('hola')
})

