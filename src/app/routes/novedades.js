const router = require('express').Router();
const novedadesController = require('../controllers/novedades');

router.get('/novedades', novedadesController.getNovedadesData);

module.exports= router;
