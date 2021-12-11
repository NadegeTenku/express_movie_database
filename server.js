const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const {Movie} = require('./models/Movie')
// const {Crew} = require('./models/Crew')
// const {Cast} = require('./models/Cast')


app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')))


app.get('/Movies/:title', async (req,res) => {
    const thisMovie = await Movie.findOne({where: {title: req.params.title}})
    res.json(thisMovie)
})

app.get('/Movies/:id', async (req,res) => {
    const thisMovie = await Movie.findByPk(req.params.id)
    res.json(thisMovie)
})

app.delete('/Movies/:id', async (req,res) => {
    await Movie.destroy({
        where: {id: req.params.id}
    })
    res.send(deletedMovie ? "Deleted Movie" : "Delete Failed")
})

app.post('/Movies/:id', async (req,res) => {
    let newMovie = await Movie.create(req.body, {
        where : {id: req.params.id}
    })
    res.send(newMovie ? "Movie Created" : "Creation Failed") 
})

app.put('/Movies/:id', async (req,res) => {
    let updatedMovie = await Movie.update(req,body, {
        where : {id:req.params.id}
    })
    res.send(updatedMovie ? "Movie Updated" : "Update Failed")
})



// app.get('/Movies', async (req,res) => {
//     const allMovie = await Movie.findAll()
//     res.json(allMovies)
// })

// app.post('/Movies', async (req,res) => {
//     let newMovie = await Movie.create(req.body)
//     res.send(newMovie ? "Movie Created" : "Creation Failed") 
// })

// app.put('/Movies/:id', async (req,res) => {
//     let updatedMovie = await Movie.update(req,body, {
//         where : {id:req.params.id}
//     })
//     res.send(updatedMovie ? "Movie Updated" : "Update Failed")
// })

// app.delete('/Movies/:id', async (req,res) => {
//     await Movie.destroy({
//         where: {id: req.params.id}
//     })
//     res.send(deletedMovie ? "Deleted Movie" : "Delete Failed")
// })

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})