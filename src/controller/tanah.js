const getAllTanah = (req, res) => {
    res.json({
        namaTanaman: 'JambuMete',
        Deskripsi:'Jambu mete,[1] jambu monyet, atau jambu mede (Anacardium occidentale) adalah sejenis tanaman dari suku Anacardiaceae yang berasal dari Brasil dan memiliki "buah" yang dapat dimakan. Yang lebih terkenal dari jambu mede adalah kacang mede, kacang mete, atau kacang mente; bijinya yang biasa dikeringkan dan digoreng untuk dijadikan berbagai macam penganan. Secara botani, tumbuhan ini sama sekali bukan anggota jambu-jambuan (Myrtaceae) maupun kacang-kacangan (Fabaceae), melainkan malah lebih dekat kekerabatannya dengan mangga (suku Anacardiaceae).',
        Habitat: 'Jambu mete tumbuh subur di berbagai kondisi tanah, termasuk tanah kapur yang kaya mineral. Habitat yang ideal untuk pertumbuhan jambu mete adalah tanah dengan kisaran pH antara 6.0 hingga 7.0. Tanah kapur yang baik untuk jambu mete harus memiliki kemampuan drainase yang efisien untuk mencegah genangan air. Meskipun tanaman ini dapat tumbuh di berbagai iklim, suhu optimal untuk pertumbuhan jambu mete berkisar antara 24-32 derajat Celsius. Jambu mete juga membutuhkan paparan sinar matahari yang cukup, namun bisa tumbuh di tempat yang agak teduh.',
        Kegunaan:'1. Jambu Mete Buah jambu mete kaya akan vitamin C, mineral seperti magnesium dan potassium, serta antioksidan. Kandungan nutrisi ini membuatnya baik untuk kesehatan kulit, sistem kekebalan tubuh, dan kesehatan jantung',
        
    })
}

const createNewTanah = (req, res) => {
    res.json({
        namaTanaman: 'JambuMete',
        Deskripsi:'Jambu mete,[1] jambu monyet, atau jambu mede (Anacardium occidentale) adalah sejenis tanaman dari suku Anacardiaceae yang berasal dari Brasil dan memiliki "buah" yang dapat dimakan. Yang lebih terkenal dari jambu mede adalah kacang mede, kacang mete, atau kacang mente; bijinya yang biasa dikeringkan dan digoreng untuk dijadikan berbagai macam penganan. Secara botani, tumbuhan ini sama sekali bukan anggota jambu-jambuan (Myrtaceae) maupun kacang-kacangan (Fabaceae), melainkan malah lebih dekat kekerabatannya dengan mangga (suku Anacardiaceae).',
        Habitat: 'Jambu mete tumbuh subur di berbagai kondisi tanah, termasuk tanah kapur yang kaya mineral. Habitat yang ideal untuk pertumbuhan jambu mete adalah tanah dengan kisaran pH antara 6.0 hingga 7.0. Tanah kapur yang baik untuk jambu mete harus memiliki kemampuan drainase yang efisien untuk mencegah genangan air. Meskipun tanaman ini dapat tumbuh di berbagai iklim, suhu optimal untuk pertumbuhan jambu mete berkisar antara 24-32 derajat Celsius. Jambu mete juga membutuhkan paparan sinar matahari yang cukup, namun bisa tumbuh di tempat yang agak teduh.',
        Kegunaan:'1. Jambu Mete Buah jambu mete kaya akan vitamin C, mineral seperti magnesium dan potassium, serta antioksidan. Kandungan nutrisi ini membuatnya baik untuk kesehatan kulit, sistem kekebalan tubuh, dan kesehatan jantung',
        
    })
}

module.exports ={
    getAllTanah,
    createNewTanah,
}