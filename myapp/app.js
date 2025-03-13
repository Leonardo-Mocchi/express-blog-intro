const express = require('express')
const app = express()
const port = 3000

const myPosts = [
    {
        "title": "post1",
        "content": "",
        "img": "./images/ciambellone.jpeg",
        "tags": ["#post1", "#socrazy", "#ebic", "#chambell1"]
    }, {
        "title": "post2",
        "content": "",
        "img": "./images/cracker_barbabietola.jpeg",
        "tags": ["#post2", "#tasty", "#ebic", "#barbabietola"]
    }, {
        "title": "post3",
        "content": "",
        "img": "./images/pane_fritto_dolce.jpeg",
        "tags": ["#post3", "#lunch@thebeach", "#sweet&fried", "#mood"]
    }, {
        "title": "post4",
        "content": "",
        "img": "./images/pasta_barbabietola.jpeg",
        "tags": ["#post4", "#socrazy", "#ebic", "#barbabietola", "#lapastanonbasta"]
    }, {
        "title": "post5",
        "content": "",
        "img": "./images/torta_paesana.jpeg",
        "tags": ["#post5", "#cake", "#gyatt", "#ebic"]
    }
]

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Server del mio Blog')
})

app.get('/bacheca', (req, res) => {
    res.json(myPosts)
})
app.listen(port, () => {
    console.log(`posts at: http://localhost:3000/bacheca`)
})