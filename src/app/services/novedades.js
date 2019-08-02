const mysqlConn = require ('../models/BD/pool')();

module.exports = {
    /**
     * Get novedades data
     * @param idNovedad
    */
   getNovedadData: () => new Promise(
       (resolve, reject) => {
            mysqlConn.query('SELECT * FROM Novedades',
            [],
            (err, rows, fields) =>{
                if(err) return reject (err);
                    if(Array.isArray(rows)&& rows.length >0){
                        resolve(rows && Array.isArray(rows) ? rows : []);
                    } else {
                        return reject({
                            status: 404,
                            message: 'NOVEDAD_NOT_FOUND'
                        })
                    }
            })    
       }
   )

}