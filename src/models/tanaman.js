const dbpool = require('../config/database');

const getAllTanaman = () => {
    const SQLQuery = 'SELECT * FROM tanaman'

    return dbpool.execute(SQLQuery);
}

const getTanamanById = (id_tanaman) => {
    const SQLQuery = 'SELECT * FROM tanaman WHERE id_tanaman = ?'

    return dbpool.execute(SQLQuery,[id_tanaman]);
}
// const getAllTanamanbyIdTanah = () => {
//    const SQLQuery =' SELECT *
//    FROM tanaman t
//    INNER JOIN kecocokan_tanah_tanaman kt ON t.id_tanaman = kt.id_tanaman
//    WHERE kt.id_tanah = 'id_tanah'
//}

module.exports ={
    getAllTanaman,
    getTanamanById,
}