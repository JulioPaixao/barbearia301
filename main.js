const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 3001;

const server = http.createServer((req, res) => {
    let url = req.url === '/' ? '/index.html' : req.url;
    let filePath = path.join(__dirname, url);
    
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end("Arquivo nao encontrado");
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log(`\n========================================`);
    console.log(`💈 BARBEARIA 301 - SISTEMA ONLINE`);
    console.log(`📍 Acesse em: http://localhost:${PORT}`);
    console.log(`========================================\n`);

    // Abre o navegador automaticamente no Windows
    exec(`start http://localhost:${PORT}`);
});