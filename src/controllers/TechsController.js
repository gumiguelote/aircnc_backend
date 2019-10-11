const Spot = require('../models/Spot');

module.exports = {
   async index(req, res) {

      const techsQuery = await Spot.find({}, "techs");

      const techs = techsQuery.map((a) => {
         return a.techs.toString()
      })

      return res.json(techs)
   }
}