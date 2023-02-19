import {Router} from 'express';
import  ProductManager  from "../controllers/ProductManager.js"

const routerProd = Router();
const productos = new ProductManager;

routerProd.get('/', async (req, res) => {
    let allProducts = await productos.getProducts()
    res.send(allProducts);
});
routerProd.get('/:pid', async (req, res) =>{
    let id =parseInt(req.params.id);
    res.send(productos.getProductsById(id));
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