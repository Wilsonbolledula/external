const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Hello, Docker!');
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Server is running on port 3001');
});
