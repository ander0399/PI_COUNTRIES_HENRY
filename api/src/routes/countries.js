const { Router } = require('express');
const { Country, Activity, Op } = require('../db');
const router = Router();

//GET: retorna todos los paises 
//si existe el valor pasado por query <name> retorna los paises que coincidan con dicho valor 
router.get('/', async (req, res) => {
    const { name } = req.query
    try {
        if (!name) {
            const allCountries = await Country.findAll({ include: Activity })
            res.json(allCountries)
        } else {
            //existe query <name>
            const countryName = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    },
                },
                include: Activity
            })
            //Si encuentra el pais por el nombre devuelve el país, si no devuelve un mensaje de error
            // console.log("name ---" +countryName)
            countryName[0] ? res.json(countryName) : res.status(404).json({ Error: `Country ${name} not found` })
        }
    } catch (error) {
        res.send(error)
    }

});


//GET: retorna el pais que coincida con el <idPais> pasado como parametro
router.get('/:idPais', async (req, res) => {
    const idparam = req.params.idPais.toUpperCase();
   
    try {
        const country = await Country.findOne({
            where: {
                id: idparam
            },
            include: Activity
        })
        res.json(country)
    } catch (error) {
        res.send(error)
    }
});

module.exports = router;