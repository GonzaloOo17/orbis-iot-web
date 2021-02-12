
const path = require('path');

const express = require('express');
const app = express();


// app.get('*', (req, res) => {
//     res.sendFile( path.resolve( __dirname, 'public/index.html' ) );
// });

// Directorio público
app.use( express.static('public') );


app.listen( 8081, () => {
    console.log('Servidor corriendo en puerto ' + 8081 );
});
