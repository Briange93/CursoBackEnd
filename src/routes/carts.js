/*import { Router } from "express";
//import CartManager from "../controllers/CartsManager.js";

const routerCart = Router()
const cartManager = new CartManager

routerCart.get('/', async (req,res) =>{
    let message = await cartManager.getCarts()
    res.send(message)
})

routerCart.post('/', async (req, res) => {    
      let message = await cartManager.createCart()
      res.json(message)
  })
 

routerCart.get('/:cid', async (req, res) => {
      const cart = await cartManager.getCartByID(parseInt(req.params.cid))
      res.send(cart.products ?? [])
  })
 //hasta aca vamos bien.
routerCart.post('/:cid/products/:pid',async (req, res) => {
    let cartId = req.params.cid
    let prodId = req.params.pid
    res.send(await cartManager.addItemToCart(cartId,prodId))
    
  })

export default routerCart*/