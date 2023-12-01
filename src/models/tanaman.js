const dbpool = require('../config/database');

const getAllTanaman = () => {
    const SQLQuery = 'SELECT * FROM tanaman'

    return dbpool.execute(SQLQuery);
}

module.exports ={
    getAllTanaman,
}