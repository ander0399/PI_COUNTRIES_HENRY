const { Router } = require('express');
const { Country, Activity } = require('../db.js');
const router = Router();


//GET actividades
router.get('/', async (req, res) => {
    let activity = await Activity.findAll();
    res.json(activity);
});


//POST actividades
router.post('/', async (req, res) => {

    const { name, difficulty, duration, season, countryId } = req.body;
    // console.log(name,difficulty,duration,season,countryId)
    if (!name || !difficulty || !duration || !season || !countryId) {
       
        return res.status(404).json({ Error: 'there are empty fields' });
    }

    try {
        const validate = await Activity.findOne({
            where: {
                name: name
            }
        })

        if (!validate) {
            const addActivity = await Activity.create({
                name: name,
                difficulty: difficulty,
                duration: duration,
                season: season,
            })
            const findCountry = await Country.findAll({
                where: {
                    id: countryId
                }
            })
            const assign = await addActivity.addCountry(findCountry)
            res.json(assign)
        } else {
            res.status(404).json({ Error: 'the activity already exists'});
        }
    } catch (error) {
        res.send(error)
    }

});

module.exports = router;