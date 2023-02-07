const axios = require("axios");
class PlanetController{
    static async readPlanets(req,res){
        try {
            let {data} = await axios({
                method:'get',
                url:'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list',
                headers: {
                    'X-RapidAPI-Key': '0e0c5bb78amshed1b6b5d96fd136p1de1c2jsn583fcac5966d',
                    'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
                  }
            })
            console.log(data)
            res.status(200).json(data)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = PlanetController