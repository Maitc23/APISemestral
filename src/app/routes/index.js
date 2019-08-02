const router = require('express').Router();
const novedadesRoutes = require('./novedades');

router.use('/', novedadesRoutes);

module.exports = router;