//Felipe Melo Moura - 5° A

module.exports = function (data){
    
    data.get('/noticia/:id', function(req, res){
        
        const connection = data.src.app.config.dbConnection;

        const get_id = req.params.id;
        var noticia

        console.log("AQUI Ó "+get_id);

        const model = data.src.app.models;
        const count = new model.noticiasModel(connection, get_id);

        count.getNoticia(connection, function(err, resul)
        {
            const [noticia] = resul;
            console.log({noticia})
            
            res.render('noticias/noticia', {noticia});
        });
    });
}

        // connection.query(`select * from noticias where id_noticia = ${req.params.id}`, (error, result) =>
        // {
        //     if(!error)
        //     {
        //             res.render('noticias/noticia', [noticia] = result);
        //             // var [data] = result;
        //             // console.log(data);
        //     } 
        //         else
        //         {
        //             console.log("erro noticia")
        //         } 
        //     });
        // });
