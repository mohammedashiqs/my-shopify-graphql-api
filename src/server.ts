import express from 'express';
import ordersRouter from './routes/orders';
//import productRouter from './routes/products'


const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Shopify API Example')
});


app.use('/orders', ordersRouter);
//app.use('/products', productsRoute);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})