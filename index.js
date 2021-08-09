const express = require('express');
const { request } = require('http');
const app = express();
// const parkings = require('./parkings.json');
// const reservations = require('./reservations.json');

app.get('/',(req,res) => {
    res.send('Bienvenue sur la homePage');
});

app.use(express.json());

//************************************ */ route pour les parkings
// app.get('/parkings',(req,res) => {
//     res.status(200).json(parkings);
// });

// app.get('/parkings/:id',(req,res) => {
//     const id = parseInt(req.params.id);

//     const parking = parkings.find(parking => parking.id === id);
//     res.status(200).json(parking);
// });

// app.post('/parkings',(req,res) => {
//     parkings.push(req.body);
//     res.status(200).json(parkings);
// });

// app.put('/parkings/:id',(req,res) => {
//     const id = parseInt(req.params.id);

//     let parking = parkings.find(parking => parking.id === id);
//     parking.name = req.body.name;
//     parking.city = req.body.city;
//     parking.type = req.body.type;
//     res.status(200).json(parking);
// });

// app.delete('/parkings/:id',(req,res) => {
//     const id = parseInt(req.params.id);

//     let parking = parkings.find(parking => parking.id === id);
//     parkings.splice(parkings.indexOf(parking),1);
//     res.status(200).json('parking supprimer');
// });

// //******************************* */ Route pour les reservations

// /**
//  *  Get all reservation for one parking
//  * @params :id is id of parking
//  * @return json
//  */
// app.get('/parkings/:id/reservations',(req,res) => {
//     const id = parseInt(req.params.id);

//     let reservation = reservations.filter(reservation => reservation.parkingId === id);

//     res.status(200).json(reservation);
// });

// /**
//  *  Get own reservation parking
//  * @params :id is id of parking
//  * @return json
//  */
// app.get('/parking/:id/reservations/:idReservation',(req,res) => {
//     console.log(req.params);
// });

// /**
//  *  create reservation for spicify parking
//  * @params :id is id of parking
//  * @return json
//  */
// app.post('/parkings/:id/reservations',(req,res) => {
//     const id = parseInt(req.params.id);



//     reservations.push(req.body);

//     res.status(200).json(reservations);
// });

// /**
//  *  Get own reservation parking
//  * @params :id is id of parking
//  * @return json
//  */
// app.put('/parking/:id/reservations/:idReservation',(req,res) => {
//     let reservation = reservations.find(reservation => reservation.id === id);
//     reservation.parking = req.body.parking;
//     reservation.parkingId = id;
//     reservation.city = req.body.city;
//     reservation.clientName = req.body.clientName;
//     reservation.vehicle = req.body.vehicle;
//     reservation.licensePlate = req.body.licensePlate;
//     reservation.checkin = req.body.checkin;
//     reservation.checkout = req.body.checkout;
// });

// /**
//  *  Get own reservation parking
//  * @params :id is id of parking
//  * @return json
//  */
// app.delete('/parking/:id/reservations/:idReservation',(req,res) => {
//     res.send('supprimer une reservation');
// });


//  API KEY 03f34185487a27015a7a84d2824b2cc8

const fetch = require("node-fetch");
let data = null;
app.get("/meteo/:city",(req,res) => {
    let city = req.params.city;
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=03f34185487a27015a7a84d2824b2cc8")
    .then(function (res) {
        data = res.json();
        return data;
    })
    .then(function (data) {
        console.log(data)
    })
    .catch(function (error) {
        console.log(error);
    })
});
// Ecoute le serveur
app.listen(8080, () => {
    console.log('serveur running');
});