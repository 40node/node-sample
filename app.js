// Express の利用宣言
const express = require('express');
const app = express();
const port = 5000;

// URIごとの表示メッセージを定義
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/about', (req, res) => res.send('About Page'));
app.get('/query', (req, res) => res.send('query: ' + req.query.name));

// 404 not found
app.use((req, res) => res.status(404).send("Page not found"));

// 指定したポートでサーバへの受付を開始
app.listen(port);