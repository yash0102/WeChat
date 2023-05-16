const express         = require('express');
const app             = express();
const port            = 8000;
const path            = require('path');

// app.get('/' , (req, res) => {
//     res.send('<h1>Hello World </h1>')
// });


// to serve static files stored in the ./assets directory 
app.use(express.static(path.join(__dirname+'/assets')));

app.listen(port , (err) => {
    if(err) {
        console.log('Error in express server');
    }else {
        console.log('Server is up and running on port: ',port);
    }
})