import app from './app.js'
import {sequelize} from './database.js'
// import './models/Project.js'
// import './models/Task.js'

async function main(){
    try{

        // await sequelize.authenticate()
        await sequelize.sync()
        // await sequelize.sync({force:true})
        app.listen(3000)
        console.log('Server listening on port',3000)
    }
    catch{
        console.error('Unable to connect to the database')
    }
}

main()
