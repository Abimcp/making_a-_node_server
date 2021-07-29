
const http = require('http');

const requestListener = (req, res) => {
    response.setHeader('Access-Control-Allow-Origin', '*'); // NEW LINE
    response.writeHead(200);
    res.statusCode = 200;
    let body;

    switch (req.url) {
        case '/':

            body = { message: `hi from the other side` }
            break;
        case '/dog':
            if (req.method === 'GET') {
                body = { message: ` woof and bones and shiz` }
            } else if (req.method === 'DELETE') {
                body = [];
                statusCode = 204;
            }
            break;
        case '/unicorn':
            if (req.method === 'GET') {
                body = { message: ` unicorn horny` }
            } else if (req.method === 'DELETE') {
                body = [];
                statusCode = 204;
            }
            break;
        case '/cat':
            if (req.method === 'GET') {
                body = { message: ` cats scratch - die` }
            } else if (req.method === 'DELETE') {
                body = [];
                statusCode = 204;
            }
            break;
        default:
            body = { message: `if you are not a dog, cat, unicorn then just leave` }
            break;
    }


    body = body && JSON.stringify(body)
    res.end(body)
}


const host = 'localhost';
const port = 8000;
const server = http.createServer(requestListener);
server.listen(port, host, () => console.log(`All cylinders now firing on http://${host}:${port} `))

const closeServer = cd => server.close(cd);

module.exports = {
    closeServer
}

