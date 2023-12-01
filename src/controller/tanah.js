const UsersModel = require ('../models/tanaman');

const getAllTanah = async (req, res) => {

    const data = await UsersModel.getAllTanaman();

    res.json({
        Message:'Get allTanaman successfully',
        data: data   
    })
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
}