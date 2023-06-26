'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

//Conexion Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://0.0.0.0:27017/curso_mean_social')
    .then(() => {
        console.log("La conexion a la base de datos curso_mean_social se ha realizado correctamente");

        //Crear servidor
        app.listen(port, () => {
            console.log("Servidor corriendo en http://localhost:3900");
        });
    })
    .catch(err => console.log(err));