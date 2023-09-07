const { log } = require('console');
const mongoose = require('mongoose');
exports.db = async () => {
    try {
        const tanic = await mongoose.connect(process.env.DB)
        console.log("database connected @ ", tanic.connection.host,tanic.connection.name)

        
    } catch (error) {
       console.log(error); 
       process.exit(1);
    }
    
}