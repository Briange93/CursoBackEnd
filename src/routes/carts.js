import { Router } from "express";
import CartManager from "../controllers/CartsManager.js";

const routerCart = Router()
const cartManager = new CartManager('src/models/carts.txt')

routerCart.get('/', async (req,res) =>{
    let message = await cartManager.getCarts()
    res.send(message)
})

routerCart.post('/', async (req, res) => {    
      let message = await cartManager.createCart()
      res.json(message)
  })
  //hasta aca vamos bien.

routerCart.get('/:cid', async (req, res) => {
      const cart = await cartManager.getCartByID(parseInt(req.params.cid))
      res.send(cart.products ?? [])
  })

routerCart.post('/:cid/products/:pid',async (req, res) => {
    const params = req.params
      await cartManager.addItemToCart(parseInt(params.cid), parseInt(params.pid))
      res.send(parseInt(params.cid))
    
  })

export default routerCart