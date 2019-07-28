 const express = require('express');  // load express module
 const homes = express();  // call express funct


/*----------*/
/*-- CORS --*/
/*----------*/

 const cors = require('cors');
 
 const corsOptions = {
       origin: '*',
       optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
 }
 
 homes.use(cors(corsOptions))


/*------------------------------*/
/* Application data - hus1/hus2 */
/*------------------------------*/

 const hus1 = {
     rooms: [
     { 
         name: 'vardagsrum', 
         temperature: '21', 
         humidity: '0.1'
      },
     { 
         name: 'kök', 
         temperature: '27', 
         humidity: '0.77 ' 
     }
     ]};


 const hus2 = {
     rooms: [
     { 
         name: 'vardagsrum', 
         temperature: '22', 
         humidity: '0.2'
      },
     { 
         name: 'kök', 
         temperature: '28', 
         humidity: '0.88 ' 
     }
     ]};



 /*----------------*/
 /* Route 1 - hus1 */
 /*----------------*/
 
 homes.get('/homes/hus1/rooms', (req, res) => {  
      const  hus1AllRooms = hus1.rooms;
      res.send(hus1AllRooms);  // *see output print below
  });
 
 // url
 // http://127.0.0.1:3000/homes/hus1/rooms
 // * output print
 // [{"name":"vardagsrum","temperature":"21","humidity":"0.1"},
 //  {"name":"kök","temperature":"27","humidity":"0.77 "}]
 
 
 
 /*----------------*/
 /* Route 2 - hus2 */
 /*----------------*/
 
 homes.get('/homes/hus2/rooms', (req, res) => {  
      const  hus2AllRooms = hus2.rooms;
      res.send(hus2AllRooms);  // *see output print below
  });
 
 // url
 // http://127.0.0.1:3000/homes/hus2/rooms
 // * output print
 // [{"name":"vardagsrum","temperature":"22","humidity":"0.2"},
 // {"name":"kök","temperature":"28","humidity":"0.88 "}]




 /*------------------------*/
 /* port - start up server */
 /*------------------------*/
 
  const port = process.env.PORT || 3000;  // if port not set then use 3000,
  homes.listen(port, () => console.log(`Listen on port ${port}`)); 
 
  // start server with: npm start
  // Server will start listen on port 3000
  // In any browser type either of these two URL's to render the application data routes. 
 // hus1 data - http://127.0.0.1:3000/homes/hus1/rooms
 // hus2 data - http://127.0.0.1:3000/homes/hus2/rooms
 
 // Changing any data in the above Application data should be reflected in the browser automatically




