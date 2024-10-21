import express, { response } from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import { MerchItem } from './models/merchItemModel.js';
import booksRoute from './routes/booksRoute.js';
import merchItemsRoute from './routes/merchItemsRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Awakening Ghost');
});

// Middleware for handling CORs POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());

// Option 2: Allow Custom Origins
/*app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET','POST','PUT','DELETE'],
        allowedHeaders: ['Content-Type'],
    })
);
*/

/* THE FOLLOWING IS COMMENTED OUT BECAUSE ITS FROM BOOKS APP
app.use('/books', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database')
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })
*/
app.use('/merch-items', merchItemsRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database')
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })
