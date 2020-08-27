const express = require('express')
const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const app = express()
const server = require('http').createServer(app)


app.use(cors(), express.json(), fileUpload(), express.static('assets'))


let database_

sqlite
    .open({ driver: sqlite3.Database, filename: './db/BANKAPP.sqlite' })
    .then(database => {
        database_ = database
    })

server.listen(3000, () => {
    console.log('Server is listening')
})


app.get('/', (request, response) => {
    response.send('You in Bank Backend area : I am working')
})

app.get('/users', (request, response) => {
    database_.all('SELECT * from USERS')
        .then((rows) => {
            console.log('Fetching All USERS')
            return response.status(201).send(rows)
        })
        .catch((error) => {
            console.log('Error while fetching USERS')
            return response.status(401).send({ message: error }
            )
        })
})

app.get('/user1', (request, response) => {
    database_.all('SELECT * from USERS WHERE UserID = 1')
        .then((rows) => {
            console.log('Fetching All USERS')
            return response.status(201).send(rows)
        })
        .catch((error) => {
            console.log('Error while fetching USERS')
            return response.status(401).send({ message: error }
            )
        })
})

app.get('/user2', (request, response) => {
    database_.all('SELECT * from USERS WHERE UserID = 2')
        .then((rows) => {
            console.log('Fetching All USERS')
            return response.status(201).send(rows)
        })
        .catch((error) => {
            console.log('Error while fetching USERS')
            return response.status(401).send({ message: error }
            )
        })
})


app.get('/user2', (request, response) => {
    database_.all('SELECT * from USERS WHERE UserID = 2')
        .then((rows) => {
            console.log('Fetching All USERS')
            return response.status(201).send(rows)
        })
        .catch((error) => {
            console.log('Error while fetching USERS')
            return response.status(401).send({ message: error }
            )
        })
})


app.get('/history', (request, response) => {
    database_.all('SELECT * from HISTORY ORDER BY OperationID DESC')
        .then((rows) => {
            console.log('Fetching All Operations HISTORY')
            return response.status(201).send(rows)
        })
        .catch((error) => {
            console.log('Error while fetching transactions HISTORY')
            return response.status(401).send({ message: error }
            )
        })
})



app.post('/users', (request, response) => {
    database_.run('INSERT INTO USERS (Fname, Lname, PassportNo, AccountNo, Balance) VALUES (?,?,?,?,?)',
        [request.body.Fname, request.body.Lname, request.body.PassportNo, request.body.AccountNo, request.body.Balance])
        .then(() => {
            console.log('USER ADDED')
            return response.status(201).send({ status: 1, message: 'USER ADDED' })
        })
        .catch(() => {
            console.log()
            return response.status(401).send({ status: -1, message: 'Error while adding new USER' })
        })
})


app.post('/history',async (request, response) => {
    await database_.run('INSERT INTO HISTORY (SenderID, ReciverID, Amount) VALUES (?,?,?);',
        [request.body.SenderID, request.body.ReciverID, request.body.Amount])
        .then(() => {
            console.log('TRANSACTION ADDED')
            return response.status(201).send({ status: 1, message: 'TRANSACTION ADDED' })
        })
        .catch(() => {
            console.log()
            return response.status(401).send({ status: -1, message: 'Error while adding new TRANSACTION' })
        })
})






app.put('/users',async (request, response) => {
    await database_.run('UPDATE USERS SET Balance = ? WHERE UserID = ?',
    [request.body.Balance, request.body.UserID])
        .then(() => {
            console.log('Balance Updated')
            return response.status(201).send({ status: 1, message: 'Balance ADDED' })
        })
        .catch(() => {
            console.log()
            return response.status(401).send({ status: -1, message: 'Error while adding new Balance' })
        })
})





app.post('/updateBalance', (request, response) => {
    //sending balance from senderID to receiverID.
    let sender = request.body.senderID
    let receiver = request.body.receiverID
    let amount = request.body.amount

    /* Query to check if senderID exists in DB, 
    if it does check if senderID's balance is more than amount.
    If so, add amount to the receiverID's balance. If receiverID exist in DB. */
    database_.query('SELECT USERS WHERE')
})


