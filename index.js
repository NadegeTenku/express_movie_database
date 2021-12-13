const {sequelize} = require('./db')

const {Movie} = require('./models/Movie')
const {Crew} = require('./models/Crew')
const {Cast} = require('./models/Cast')

//belongsTo creates the association between the Movie and the Crew which generates the ID for the model.
Movie.hasMany(Crew)
Movie.hasMany(Cast)
Crew.belongsTo(Movie)
Cast.belongsTo(Movie)
Cast.hasOne(Crew)


const indexMovie = [
    {
        genre: 'Action', 
        title: 'Venom', 
        release: '2018-10-05', 
        rating: 4.5
    }, {
        genre: 'Action', 
        title: 'Hard to kill', 
        release:'1990-02-09', 
        rating: 3.7
    }, {
        genre: 'Romance', 
        title: 'The Proposal', 
        release: '2009-06-19', 
        rating: 4.7
    }, {
        genre: 'Fiction', 
        title: 'Avatar', 
        release: '2009-12-18', 
        rating: 4.5
    }, {
        genre: 'Horror', 
        title: 'Drag me to hell', 
        release: '2009-05-29', 
        rating: 4.0
    }
]

const indexCrew = [
    {position: 'Director', name: 'Ruben Fleischer', department: 0},
    {position: 'Camera Operator', name: 'Michael Watson', department: 288},
    {position: 'Cast', name: 'John Papsidera', department: 0},
    {position: 'Costume', name: 'Kelli Jones', department: 36}
]

const indexCast = [
    {role_id: 101, name: 'Sandra Bullock', gender: 'Female', age: 45},
    {role_id: 103, name: 'Ryan Raynolds', gender: 'Male', age: 33},
    {role_id: 105, name: 'Betty White', gender: 'Female', age: 87},
    {role_id: 107, name: 'Mary Steenburgen', gender: 'Female', age: 56},
    {role_id: 109, name: 'Denise OHare', gender: 'Male', age: 44}
]

//inserts data into the db
const index = async() => {
    try {
        await sequelize.sync({force: true}) 
        await Movie.bulkCreate(indexMovie, {validate: true})
        await Crew.create(indexCrew, {validate: true})
        await Cast.bulkCreate(indexCast, {validate: true})
        console.log('Data successfully inserted')
        sequelize.close()
    } catch (err) {console.log(err)}
}


//calls the index function to perform the task 
index()
.then(() => {
    console.log('Association completed successfully.')
})
.catch(err => {
    console.error('Association failed.')
    console.error('Try_Again', err)
})
module.exports = {Movie, Crew, Cast, sequelize};