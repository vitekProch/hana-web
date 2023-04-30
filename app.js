require('dotenv').config();
require('express-async-errors');

// extra security packages
// const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');

// express 
const express = require('express');
const app = express();

// connectDB
const connectDB = require('./db/connect');
const authenticateUser = require('./middleware/authentication');


// security packages
// app.use(helmet());
app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);
app.use(express.json());
app.use(cors());
app.use(xss());

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// routers
const bigPersonalPriceListRouter = require('./routes/bigPersonalPriceList');
const smallPersonalPriceListRouter = require('./routes/smallPersonalPriceList');
const imagesRouter = require('./routes/images');
const authRouter = require('./routes/auth');
const categoryRouter = require('./routes/category');

// routes
app.use(express.static('./client/build'));
app.use('/api/v1/bigPersonalPriceList', bigPersonalPriceListRouter);
app.use('/api/v1/smallPersonalPriceList', smallPersonalPriceListRouter);
app.use('/api/v1/images', imagesRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/category', categoryRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);



const port = process.env.PORT || 3000;

const start = async () => { 
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => { 
            console.log(`Server is listening on port ${port}...`);
         })
    } catch (error) {
        console.log(error);
    }
 }
start()