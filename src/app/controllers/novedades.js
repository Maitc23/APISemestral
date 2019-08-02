const novedadesServices = require('../services/novedades');
const controller={};

module.exports = {
    ...controller, 
    /**
     * Get Novedades data
     */
    getNovedadesData: async (req, res, next) => {
        try{
            novedades = await novedadesServices.getNovedadData();
            res.status(200).send({
                data: novedades
            });
        } catch(err){
            res.status(err.status ? err.status : 500).send({
                error : err.message
            });
        }
    },
};