//Felipe Melo Moura - 5° A

module.exports = function (data) {
    
    data.get('/noticias', function(req, res){

        const connection = data.src.app.config.dbConnection;

        const model = data.src.app.models;
        const count = new model.noticiasModel(connection);

        count.getNoticias(connection, function(err, resul)
        {
            res.render('noticias/noticias', {noticias: resul});
        });
    });
}


    //     connection.query('select * from noticias', (err, result) =>
    //     {
    //         if(!err)
    //         {
    //             res.render('noticias/noticias', {noticias: result});
    //         } 
    //             else
    //             {
    //                 return res.send(error);
    //             } 
    //         });
    //    });
   
    // const data = app.src.app.config;