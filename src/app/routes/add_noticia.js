module.exports = function(data)
{
    data.get('/adicionar_noticia', function(req, res)
    {
        res.render('admin/add_noticia');
    });

    data.post('/salvarNoticia', function(req,res)
    {
        const noticia = req.body;

        const connection = data.src.app.config.dbConnection;
        const model =  data.src.app.models
        const count = new model.noticiasModel(connection);

        count.salvarNoticia(noticia, connection, function(err, resul)
        {
            if(!err)
            {
                res.redirect('/noticias');
            }
            else
            {
                res.send(err);
            }
        })
    })
}