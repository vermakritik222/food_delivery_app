const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const universalMiddleware = require('./middlewares/universalMiddleware');
const productRouter = require('./routes/productRouter');
const authRouter = require('./routes/authRouter');
const oderRouter = require('./routes/oderRouter');
const venderRouter = require('./routes/vendorRouter');

const app = express();

// JSON Parser
app.use(express.json());

// Cookie Parser
app.use(cookieParser());

// cors
const corsOption = {
    credentials: true,
    origin: [
        'http://localhost:3000',
        'http://127.0.0.1:3000',
        'https://fooddeliver-app2014.herokuapp.com',
    ],
};

app.use(cors(corsOption));

// Serving static files
app.use(express.static(`${__dirname}/public`));
// app.use(express.static(`${__dirname}/build`));

// Middleware
app.use(universalMiddleware.sendTimeStamp);

// Routes
app.get('/', (req, res) => {
    res.send('hello');
    //     res.sendFile('build/index.html', { root: __dirname });
});

app.use('/api/v1/vender', venderRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/oder', oderRouter);
app.use('/api/v1/restaurants', productRouter);

app.all('*', (req, res, next) => {
    console.log('page not found');
});

module.exports = app;
