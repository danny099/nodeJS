const http = require('http');

http.createServer(router).listen(3000)

function router(req, res) {
    console.log('nueva peticion ');
    console.log(req.url);

    switch(req.url){
        case '/hola':
            res.write('hola que tal');
            res.end();
            break;
        default:
            res.write('error 404')
            res.end();
    }

/*     res.writeHead(201, {'content-Type' : 'text'})

    res.write('holiwi este es mi http en nodeJS')

    res.end(); */
}

console.log('escuchando en el puerto 3000')
