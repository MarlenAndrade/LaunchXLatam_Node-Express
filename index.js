let express = require('express');
let app = express(); //Se instancia express y se guarda en una variable

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res){ //cuando se le haga una peticion get a la raíz
    res.send("Hola mundo"); //se manda el mensaje Hola mundo
});

app.post('/', function(req, res){ //cuando se le haga una peticion post a la raíz
    res.send(`Te llamas ${req.body.name}`);  //se manda el mensaje Te llamas
});

let server = app.listen(8080, function(){ //El apuntador escucha
    let host = server.address().address; //obten la dirección
    let port = server.address().port; //obten el puerto

    console.log("Aplicación escuchando en http://%s:%s", host, port);
});