//Felipe Melo Moura - 5° A

module.exports =  function(data){

  data.get('/', (req, res) => {

      return res.render('home/index');
  
  });
  }
