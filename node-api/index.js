const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Vidu')
})
app.post('/api', (req,res) => {
    res.json([200, 'xin chào']);
})

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at http://0.0.0.0:${port}`)
})