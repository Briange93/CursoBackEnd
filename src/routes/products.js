import {Router} from 'express';
const routerProd = Router();
import  ProductManager  from "../controllers/ProductManager.js"
const productos = new ProductManager('src/models/products.json');
const readProducts = productos.readProducts();

routerProd.get('/products', async (req, res) => {
    let limit = parseInt(req.query.limit);
    if(!limit) return res.send(await readProducts);
    let allproducts = await readProducts;
    let prodLimit = allproducts.slice(0,limit);
    console.log(limit);
    res.send(await prodLimit);
});
routerProd.get('/products/:id', async (req, res) =>{
let id = parseInt(req.params.id);
let allProducts = await readProducts;
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