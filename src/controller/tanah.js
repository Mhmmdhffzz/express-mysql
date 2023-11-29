const getAllTanah = (req, res) => {
    const data = {
        nama: "JambuMete",
        Deskripsi: "JambuMete adalah",
        Habitat: "Habitat jambu",
    }

    res.json({
        Message:'Get allTanah successfully',
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