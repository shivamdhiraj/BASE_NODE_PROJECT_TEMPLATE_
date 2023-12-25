const express = require('express');

const { ServerConfig , Logger} = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use('/api' , apiRoutes);


app.listen(ServerConfig.PORT , () => {
    console.log(`Server running at PORT : ${ServerConfig.PORT} `);
    Logger.info("successfully started the server" , "root" , {});
})