// const express = require('express')
// const app = express()
// const port = 5000

// app.get('/', (req, res) => {
//     res.send('Hello world from my first server');
// })

// app.listen(port, () => {
//     console.log(`listening on port${port}`)
// })




const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(`Hello From My another server`);
})