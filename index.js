const {sequelize} = require('./db')

const {Movie} = require('./models/Movie')
// const {Crew} = require('./models/Crew')
// const {Cast} = require('./models/Cast')

// Crew.belongsTo(Movie)
// Movie.hasMany(Crew)

const indexMovie = [
    {
        genre: 'Action', 
        title: 'Venom', 
        release: '2018/10/05', 
        rating: 4.5
    }, {
        genre: 'Action', 
        title: 'Hard to kill', 
        release:'1990/02/09', 
        rating: 3.7
    }, {
        genre: 'Romance', 
        title: 'The Proposal', 
        release: '2009/06/19', 
        rating: 4.7
    }, {
        genre: 'Fiction', 
        title: 'Avatar', 
        release: '2009/12/18', 
        rating: 4.5
    }, {
        genre: 'Horror', 
        title: 'Drag me to hell', 
        release: '2009/05/29', 
        rating: 4.0
    }
]


.index()
.then(() => {
    console.log('Association completed successfully.')
})
.catch(err => {
    console.error('Association failed.')
    console.error('Try_Again', err)
})
module.exports = {Movie, Crew, Cast, sequelize};