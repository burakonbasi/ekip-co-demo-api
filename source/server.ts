import http from 'http';
import bodyParser from 'body-parser';
import express from 'express';
import mongoose, { mongo } from 'mongoose';
import logging from './config/logging';
import config from './config/config';
import categoriesRoutes from './routes/categories';
import productRoutes from './routes/product';
import sliderRoutes from './routes/slider';
import favoritesRoutes from './routes/favorite';

const NAMESPACE = 'Server';
const router = express();

mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then((result) => {
        logging.info(NAMESPACE, 'Connected to mongoDB!');
    })
    .catch((error) => {
        logging.error(NAMESPACE, error.message, error);
    });

//mongoose.connect('mongodb+srv://admin1:admin-admin@cluster0.lriy1.mongodb.net/kabakus_db?retryWrites=true&w=majority', {
// useNewUrlParser: true,
// useUnifiedTopology: true
//});

/** Log the request */
router.use((req, res, next) => {
    /** Log the req */
    logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        /** Log the res */
        logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    });

    next();
});

/** Parse the body of the request */
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

/** Rules of our API */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

/** Routes go here */
router.use('/', categoriesRoutes);
router.use('/', productRoutes);
router.use('/', sliderRoutes);
router.use('/', favoritesRoutes);

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('Not found bebeğim');

    res.status(404).json({
        message: error.message
    });
});

const httpServer = http.createServer(router);

httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server is running ${config.server.hostname}:${config.server.port}`));
