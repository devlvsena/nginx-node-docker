const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 3030
const dbConfig = {
    host     : 'db',
    user     : 'root',
    password : 'root',
    database : 'db'
}

const connection = mysql.createConnection(dbConfig);
connection.query(`INSERT INTO people(name) values('Leonardo')`)
connection.end()

app.get('/', async (_req, res) => {
    let html = '<h1>Hello World!</h1>'

    const connection = mysql.createConnection(dbConfig);
    connection.query('SELECT * FROM people', (err, results) => {
        if (err) throw err

        html += `<ul>
            ${results.reduce((acc, cv) => {
                return acc += `<li>${cv.name}</li>`
            }, '')}
        </ul>`
        res.send(html)
    })
    connection.end()
})

app.listen(port, () => {
    console.log(`Server listen port ${port}`)
})
