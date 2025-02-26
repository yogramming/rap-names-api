const express = require("express")
require('dotenv').config();
const app = express()
const PORT = 8000
const cors = require("cors")
const path = require("path")

app.use(cors())

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Like you would give a shit',
        'birthPlace': 'London, England'
    },
    'chance the rapper': {
        'age':28,
        'birthName': 'Again the same shit',
        'bithPlace': 'Bihar'
    },
    'dylan': {
        'age': 29,
        'birthName': 'For god sake! Again!!!',
        'birthPlace': 'Bihar'
    }

}

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, "public", "index.html"))
})

// app.use(express.static("js"))

// app.get('/', (request, response) => {
//     response.sendFile(__dirname + "/js/main.js")
// })

app.get('/api/:rapperName', (request, response) => {
    const rapperName = request.params.rapperName.toLowerCase()
    if (rappers[rapperName]) {
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['dylan'])
    }
})

app.listen(process.env.PORT || PORT,() => {
    console.log(`The server is running on ${PORT}! You better go catch it!`)
})