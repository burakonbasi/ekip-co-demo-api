import dotenv from 'dotenv';

dotenv.config();
const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    autoIndex: false,
    retryWrites: false
};

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'admin1';
const MONGO_PASSWORD = process.env.MONGO_USERNAME || 'admin-admin';
const MONGO_HOST = process.env.MONGO_URL || `cluster0.lriy1.mongodb.net/kabakus_db`;

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 3000;

const MONGO = {
    host: MONGO_HOST,
    password: MONGO_PASSWORD,
    username: MONGO_USERNAME,
    options: MONGO_OPTIONS,
    url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}`
    //url: 'mongodb+srv://admin:brk1995-fb@cluster0.lriy1.mongodb.net/kabakus_db?retryWrites=true&w=majority'
};

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    mongo: MONGO,
    server: SERVER
};

export default config;
