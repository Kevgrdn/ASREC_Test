exports.getEveryone = (req, res, next) => {
    let dbPath = require('../data.json');
    

    res.status(200).json({dbPath});

}



exports.getRegion = (req, res, next) => {
    let dbPath = require('../data.json');
    let urlRegion = req.params.region
    let data = []
    let offset = parseInt(req.params.offset) 
     
    var total = 0;

    for(let i = 0; i < dbPath.length; i++){
        if (dbPath[i].region == urlRegion) {
            total++
            if (data.length!=offset)
            {
                data.push(dbPath[i])
            }    
        }
    }
     
   

    res.status(200).json({data, offset, total});

}

exports.getNumber = (req, res, next) => {
    let numberUrl = req.params.number
    var phoneNum = /0[6|7|2]\d{8}/; 
    
        res.status(200).json(phoneNum.test(numberUrl))

    
}