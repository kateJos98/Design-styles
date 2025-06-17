const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/hello', (req, res) => res.json({ message: 'Hello from REST API' }));

app.listen(3000, () => console.log('REST API listening on port 3000'));
