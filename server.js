const http = require('http');

//Create Server
http
    .createServer((request, response) => {
        response.writeHead(200, { 'Content-Type': 'application/json' });

        if(request.url === '/produto'){
            response.end(JSON.stringify({
                message: 'Rota de Produto'
            }));
        }

        if(request.url === '/usuario'){
            response.end(JSON.stringify({
                message: 'Rota de Usuários'
            }));
        }

        response.end(JSON.stringify({
            message: 'Qualquer outra Rota'
        }));
    }).listen(3000, () => console.log('Servidor está rodando na porta 3000!'));

