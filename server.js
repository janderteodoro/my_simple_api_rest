const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const routes = require('./routes');


app.use(express.urlencoded({ extended: true}));
app.use(routes.homePage);
app.use(routes.lastWeights);
app.use(routes.registerWeight);
app.listen(port, () => {
    console.log('Backend started 😎');
    console.log(`Access in http://localhost:${port}`)
});
