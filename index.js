const express = require('express')
const app = express()
const port = 7000
app.listen(port, () => console.log(`Running on ${port}`))
app.use(express.json())


let users = [{
    id: 1,
    name: 'First Name',
    last: 'last',
    city: 'SP',
    bio: 'Short Bio',
    avatar: 'Placeholder'
}, {
    id: 2,
    name: 'Following',
    last: 'name',
    city: 'RJ',
}]


app.route('/users').get((req, res) => res.json({
    users
}))

app.route('/users/:id').get((req, res) => {
    const idUser = req.params.id

    const user = users.find(user => Number(user.id) === Number(idUser))

    if (!user) {
        res.send('Error 404 not found or user doest exist')
    }

    res.send(user)
})