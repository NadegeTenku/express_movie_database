const {sequelize} = require('./db')
const {Movie} = require('./models/Movie')
const {Crew} = require('./models/Crew')
const {Cast} = require('./models/Cast')

describe('Movie Database', function () {

     beforeAll(async() => {
        await sequelize.sync({force: true})
        const arrayOfMovies = [
            {genre: 'Action', title: 'Venom', release: '2018-10-05', rating: 4.5},
            {genre: 'Action', title: 'Hard to kill', release: '1990-02-09', rating: 3.7},
            {genre: 'Romance', title: 'The Proposal', release: '2009-06-19', rating: 4.7},
            {genre: 'Fiction', title: 'Avatar', release: '2009-12-18', rating: 4.5},
            {genre: 'Horror', title: 'Drag me to hell', release: '2009-05-29', rating: 4.0}
        ]
           await Movie.bulkCreate(arrayOfMovies)
      


        const crew =  {position: 'Director', name: 'Ruben Fleischer', department: 0}
            await Crew.create(crew)

        const crew1 =  {position: 'Camera Operator', name: 'Michael Watson', department: 288}
            await Crew.create(crew1)

        const crew2 =  {position: 'Cast', name: 'John Papsidera', department: 0}
            await Crew.create(crew2)

        const crew3 =  {position: 'Costume', name: 'Kelli Jones', department: 36} 
            await Crew.create(crew3)



        const arrayOfCasts = [
            {role_id: 101, name: 'Sandra Bullock', gender: 'Female', age: 45},
            {role_id: 103, name: 'Ryan Raynolds', gender: 'Male', age: 33},
            {role_id: 105, name: 'Betty White', gender: 'Female', age: 87},
            {role_id: 107, name: 'Mary Steenburgen', gender: 'Female', age: 56},
            {role_id: 109, name: 'Denise OHare', gender: 'Male', age: 44}
        ]
            await Cast.bulkCreate(arrayOfCasts)

    })
    

    test('has a movie', async() => {
        const testMovie = await Movie.findOne({
            where: {
                genre: 'Fiction'
            }
        });
        expect(testMovie.genre).toBe('Fiction')
        expect(testMovie.title).toBe('Avatar')
        expect(testMovie.release).toBe('2009-12-18')
        expect(testMovie.rating).toBe(4.5)
    })

    test('movies have genre', async() => {
        const testMovie = await Movie.findAll({where: {genre: 'Action'}});
        expect (testMovie[0].genre).toBe('Action')
        expect (testMovie[1].genre).toBe('Action')
    })

    test('movies have title', async() => {
        const testMovie = await Movie.findOne({where: {title: 'The Proposal'}});
        expect (testMovie.title).toBe('The Proposal')
    })


    test('crew members have positions', async() => {
        const testCrew = await Crew.findAll({where: {position: 'Director'}});
        expect (testCrew[0].position).toBe('Director')
    })

    test('crew members have names', async() => {
        const testCrew = await Crew.findOne({where: {name: 'Ruben Fleischer'}});
        expect (testCrew.name).toBe('Ruben Fleischer')
    })


    // test('cast has a role_id', async() => {
    //     const testCast = await Cast.findByPk(101);
    //     expect (testCast.role_id).toBe(101)
    // })

    test('cast member has a name', async() => {
        const testCast = await Cast.findOne({where: {name: 'Sandra Bullock'}});
        expect (testCast.name).toBe('Sandra Bullock')
    })

    // test('movies can have many crew members', async() => {
    //     const testMovie = await Movie.findOne({where: {title: 'Hard to kill'}});
    //     const testCrew1 = await Crew.findOne({where: {position: 'Director'}});
    //     const testCrew2 = await Crew.findOne({where: {position: 'Camera Operator'}})
    //     await testMovie.addCrew(testCrew1)
    //     await testMovie.addCrew(testCrew2)
    //     const crewList = await testMovie.getCrew()
    //     expect(crewList.length).toBe(2)
    //     expect(crewList[0] instanceof Crew).toBeTruthy()
    //     expect(crewList[0].position).toMatch('Director')
    // })


    afterAll(async() => {sequelize.close()
    })
})