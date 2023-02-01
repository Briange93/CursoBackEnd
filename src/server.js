import express from 'express'
import * as http from 'http'
import ProductManager from './ProductManager.js';
const app = express();

app.use(express.urlencoded({extended:true}))

const productos = new ProductManager();
const readProducts = productos.readProducts();

app.get('/products', async (req, res) => {
    res.send(await readProducts);
});


const PORT = 5000
const server = app.listen(PORT, () => {
    console.log(`Server on Port ${PORT}`);
})
server.on('error', (error) => console.log(`Error en el servidor ${error}`))