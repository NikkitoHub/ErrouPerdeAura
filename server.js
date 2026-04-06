// Code snippet to replace redirection with messages
const express = require('express');
const app = express();

app.post('/login', (req, res) => {
    const password = req.body.password;
    if (password === 'correct_password') { // replace 'correct_password' with the actual password to check against
        res.send('ACERTOU MOMOZIIIIIIII');
    } else {
        res.send('errou feio ridícula');
    }
});

// Other server code...
