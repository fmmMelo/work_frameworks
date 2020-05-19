
const NoticiaConst = function (connection, id)
{

    console.log('connection:' + connection);


    this.getNoticias = function(connection, callback)
    {
        connection.query('select * from noticias', callback);
    }

    this.getNoticia = function(connection, callback)
    {
        connection.query(`select * from noticias where id_noticia = ${id}`, callback);
    }

    this.salvarNoticia = function(noticia, connection, callback)
    {
        connection.query('insert into noticias set ?', noticia, callback);
    }
}

module.exports = function()
{
    console.log("Opa Bão!");
    return NoticiaConst;
}