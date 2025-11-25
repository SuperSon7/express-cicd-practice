const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.get('/health', (req, res) => {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hh}:${mm}:${ss}`;

    res.status(200).send(`OK - ${timeString} \n`);
});

app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'static/test.jpg'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});