const express = require('express')
const app = express()

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
    name: 'Following Name'
}]


app.route('/users').get((req, res) => res.json({
    users
}))

app.route('/users/:id').get((req, res) => {

    const user = users.find(user => Number(users.id))

    console.log(res.json(user))
})

const port = 7000
app.listen(port, () => console.log(`Running on ${port}`))