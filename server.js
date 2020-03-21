const express = require('express');
const dotEnv = require('dotenv');
const dbConnection = require('./database/connection');

dotEnv.config();

const app = express();

dbConnection();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const middleware = (req, res, next) => {
  console.log('My middleware');
  next();
}

app.get('/', middleware, (req, res, next) => {
  res.send('Hello');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

app.use(function (err, req, res, next) {
  console.log('Middleware');
});


app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send({
    status: 500,
    message: err.message,
    body: {},
  });
})
