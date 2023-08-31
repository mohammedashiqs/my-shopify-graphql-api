import express from 'express';
import dotenv from 'dotenv'
dotenv.config()

import ordersRouter from './routes/orders';
import productsRouter from './routes/products'


const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Shopify API Example')
});


app.use('/orders', ordersRouter);
app.use('/products', productsRouter);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})