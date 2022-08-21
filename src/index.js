const app = require("./app");
const db = require("./db");
require("dotenv").config();
const PORT = process.env.PORT;
require('./models/relations')

app.listen(PORT,()=>{
    db.sync({force:false})
    .then(console.log('Conectado a la base de datos'))
    .then(console.log('Server on port: ' + PORT ))
})