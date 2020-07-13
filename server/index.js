//Cargarmos las librerías necesaria del core de node.js
const http = require('http');
const url = require('url');

//Definimos variables a usar.
const hostname = '127.0.0.1';
const port = 3000;

//Creamos el objeto servidor donde pasamos los dos parámetros.
const server = http.createServer((req, res) => {
    let pathName = url.parse(req.url).pathname;
    mystatus = 200;
    switch (pathName) {
        case '/':
            mytext = 'Hello World\n';
            break;
        case '/About':
            mytext = 'About us\n';
            break;
        case '/Contact':
            mytext = 'email: uno@quesea.es\nNombre: PuesYo';
            break;
        default:
            mystatus = 404;
            mytext = 'MEC';
            break;
    }
    console.log(pathName);
    res.statusCode = mystatus;
    res.setHeader('Content-Type', 'text/plain');
    res.end(mytext);
});

//Activamos nuestro servidor.
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});