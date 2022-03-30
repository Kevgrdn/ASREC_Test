exports.getEveryone = (req, res, next) => {
    let dbPath = require('../data.json');
    let data = [data.push(dbPath)]

    res.status(200).json({data});

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