import {Router} from 'express';
const routerProd = Router();
import  ProductManager  from "../controllers/ProductManager.js"
const productos = new ProductManager('src/models/products.txt');

routerProd.get('/products', async (req, res) => {
    let allProducts = await productos.getProducts()
    res.send(allProducts);
});
routerProd.get('/products/:id', async (req, res) =>{
let id = parseInt(req.params.id);
let allProducts = await productos.getProducts();
let productById =allProducts.find(product => product.id ===id);
res.send(productById)
});
routerProd.post('/products', async(req,res) =>{
    let message = await productos.addProduct(req.body)
    res.send(message);
})
routerProd.delete('/products/:id', async (req,res) =>{
    let message = await productos.deleteProductsById(req.params.id, req.body)
    res.send(message)
})
export default routerProd;