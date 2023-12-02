const UsersModel = require ('../models/tanaman');

const getAllTanah = async (req, res) => {
    try{
        const data = await UsersModel.getAllTanaman();
    
        res.json({
            Message:'Get allTanaman successfully',
            data: data   
        })

    } catch (err) {
        res.status(500).json({
            message: 'server error',
            serverMessage: err,
        })
    }
}

const getTanamanById = async (req,res) =>{
    try {
        const{id_tanaman} = req.params;
        const data = await UsersModel.getTanamanById(id_tanaman);

        res.json({
            Message:'Get IdTanaman successfully',
            data: data
        })

    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

const createNewTanah = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Create newTanah success',
        data: req.body
    })
}

module.exports = {
    getAllTanah,
    createNewTanah,
    getTanamanById
}