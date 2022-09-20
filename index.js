const express = require('express')
const app = express()
const cors = require('cors')
const port = 7000
app.listen(port, () => console.log(`Running on ${port}`))
app.use(express.json())
app.use(cors())


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

app.route('/user').post((req, res) => {
const lastId = users[users.length -1].id

    users.push({
        id: lastId+1,
        name: req.body.name,
        last: req.body.last,
        city: req.body.city,
        bio: req.body.bio,
        avatar: req.body.avatar
    })
    res.send('New User Save')
})

app.route('/user').put((req, res) => {
    const idUser = req.params.id

    const user = users.find(user => Number(user.id) === Number(idUser))

    if (!user) {
        res.send('Error 404 not found or user doest exist')
    }

    const updatedUser = {
        ...user,
        name: req.body.name,
        last: req.body.last,
        city: req.body.city,
        bio: req.body.bio,
        avatar: req.body.avatar
    }

    users = users.map(user => {
        if (Number(user.id) === Number(userId)) {
          user = updatedUser
        }
        return user
    })

    res.send('User updated')
})

app.route('/users/:id').delete((req, res) => {
    const userId = req.params.id
  
    users = users.filter(user => Number(user.id) !== Number(userId))
  
    res.json('Deleted User')
  })