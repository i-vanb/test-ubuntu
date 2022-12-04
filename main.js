import {createServer} from 'http'
import fs from 'fs'
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = createServer((req, res)=>{
    if(req.url.match(/^\/api/)) {
        res.end('api')
    } else if(req.url.match(/^\/app/)) {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data)=>{
            if(err) throw err
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.end(data)
        })
    } else {
        res.end('unknown')
    }
})

server.listen(3000, ()=>console.log("listening.."))
