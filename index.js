const express = require('express');
const auth = require('./middleware/auth');
const logger = require('./middleware/logger');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
});

// middleware
app.use(logger);
app.use(auth);

app.use('/api/posts', require('./api/posts'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})