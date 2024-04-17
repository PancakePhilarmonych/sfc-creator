const fs = require('fs')
const cors = require('cors');
const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', async (req, res) => {
  res.send('Hello!')
})

app.get('/get-binding-data', async (req, res) => {
  const data = fs.readFileSync('data.json')
  console.log(data.toString())
  res.send(data.toString())
})

app.get('/get-template-data', async (req, res) => {

  const filePath = path.join(__dirname, 'template-data.json');

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify({}));
  }

  const data = fs.readFileSync(filePath);
  console.log(data.toString())
  res.send(data.toString())
})

app.post('/save-template-data', (req, res) => {
  res.send('Success!')

  fs.writeFile('template-data.json', JSON.stringify(req.body), (err) => {
    if (err) {
      console.log(err)
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})