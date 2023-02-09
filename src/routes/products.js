import {Router} from 'express';
import  ProductManager  from "../controllers/ProductManager.js"

const routerProd = Router();
const productos = new ProductManager('src/models/products.txt');

routerProd.get('/', async (req, res) => {
    let allProducts = await productos.getProducts()
    res.send(allProducts);
});
routerProd.get('/:pid', async (req, res) =>{
let id = parseInt(req.params.id);
let allProducts = await productos.getProducts();
let productById =allProducts.find(product => product.id ===id);
res.send(productById)
});
routerProd.post('/', async(req,res) =>{
    let message = await productos.addProduct(req.body)
    res.send(message);
})
routerProd.delete('/:pid', async (req,res) =>{
    let message = await productos.deleteProductsById(req.params.id, req.body)
    res.send(message)
})
export default routerProd;