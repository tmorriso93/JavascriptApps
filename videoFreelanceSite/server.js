//Server
const express = require('express');
const sendMail = require('./mail');
const log = console.log;
const app = express();
const path = require('path');

const PORT = 8080;


// Data Parsing
app.use(express.urlencoded({ 
    extended: false 
}));
app.use(express.json());

// email, firstName, lastName, text
app.post('/email', (req, res) => {
        //TODO
        //Send Email Here
        const { email, name, subject, text} = req.body;
        console.log('Data: ', req.body);

        sendMail(email, name, subject, text, function(err, data){
            if (err) {
                res.status(500).json({ message: 'Internal Error'});
            } else {
                res.json({ message: 'Email sent!'});
            }
        });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});

app.listen(PORT, () => log('Server is starting on PORT, ', 8080));

