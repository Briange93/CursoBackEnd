import express from 'express';
import ProductManager from './routes/ProductManager.js';
const app = express();

app.use(express.urlencoded({extended:true}))

const productos = new ProductManager();
const readProducts = productos.readProducts();

app.get('/products', async (req, res) => {
    let limit = parseInt(req.query.limit);
    if(!limit) return res.send(await readProducts);
    let allproducts = await readProducts;
    let prodLimit = allproducts.slice(0,limit);
    console.log(limit);
    res.send(await prodLimit);
});
app.get('/products/:id', async (req, res) =>{
let id = parseInt(req.params.id);
let allProducts = await readProducts;
let productById =allProducts.find(product => product.id ===id);
res.send(productById)
});
app.post('/products', async(req,res) =>{
    let message = await productos.addProduct(req.body)
    res.send(message);
})
app.delete('/products/:id', async (req,res) =>{
    let message = await productos.deleteProductsById(req.params.id, req.body)
    res.send(message)
})
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Server on Port ${PORT}`);
})
server.on('error', (error) => console.log(`Error en el servidor ${error}`))