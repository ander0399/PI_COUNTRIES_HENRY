const { Router } = require('express');
const { Country, Activity } = require('../db.js');
const router = Router();


//GET actividades
// router.get('/', async (req, res) => {
//     let activity = await Activity.findAll();
//     res.json(activity);
// });


//POST actividades
router.post('/', async (req, res) => {
   
    const { name, difficulty, duration, season, countryId } = req.body;

    // if( !name || !difficulty || !duration || !season || !countryId ){
    //     return res.status(404).send({error:'Campos Vacios'})
    // }

    const valdidateact = await Activity.findOne({
        where: {
          name: name,
        },
      });
    
      if (!valdidateact) {
        const addAct = await Activity.create({
          name: name,
          difficulty: difficulty,
          duration: duration,
          season: season,
        });
        const countrymatch = await Country.findAll({
          where: {
            id: countryId,
          },
        });
    
        const resact = await addAct.addCountries(countrymatch);
    
        return res.send(resact);
      }
    
      const countrymatch = await Country.findAll({
        where: {
          id: countryId,
        },
      });
      // console.log(addAct)
      // console.log(countrymatch)
    
      const resact = await valdidateact.addCountries(countrymatch);
    
      res.send(resact);
});

module.exports = router;