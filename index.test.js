const {Movie, Crew, Cast, sequelize} = require('./index');
describe('Movie Database', function () {

     beforeAll(async() => {
        await sequelize.sync({force: true})
        const arrayOfMovies = [
            {genre: 'Action', title: 'Venom', release: '2018/10/05', rating: 4.5},
            {genre: 'Action', title: 'Hard to kill', release: '1990/02/09', rating: 3.7},
            {genre: 'Romance', title: 'The Proposal', release: '2009/06/19', rating: 4.7},
            {genre: 'Fiction', title: 'Avatar', release: '2009/12/18', rating: 4.5},
            {genre: 'Horror', title: 'Drag me to hell', release: '2009/05/29', rating: 4.0}
        ]
        await Movie.bulkcreate(arrayOfMovies)

    })
    
    // test('movies have genre', async() => {
    //     const testMovie = await Movie.findOne({where: {genre: 'Action'}});
    //     expect (testMovie.genre).toBe('Action')
    // })

    // test('movies have genre', async() => {
    //     const testMovie = await Movie.findAll({where: {genre: 'Action'}});
    //     expect (testMovie.genre).toBe('Action')
    // })

    // test('movies have title', async() => {
    //     const testMovie = await Movie.findOne({where: {title: 'The Proposal'}});
    //     expect (testMovie.title).toBe('The Proposal')
    // })

    // test('movies can have many crew members', async() => {
    //     const testMovie = await Movie.findOne({where: {title: 'Hard to kill'}});
    //     const testCrew1 = await Crew.findOne({where: {agent: 'Director'}});
    //     const testCrew2 = await Crew.findOne({where: {agent: 'Camera Operator'}})
    //     await testMovie.addCrew(testCrew1)
    //     await testMovie.addCrew(testCrew2)
    //     expect(crewList.length).toBe(4)
    //     expect(crewList[0] instanceof Crew).toBeTruthy()
    //     expect(crewList[0].position).toMatch('Camera Operator')
    // })


    afterAll(async(() => {sequelize.close()
    }))
})