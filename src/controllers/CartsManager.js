import {promises as fs} from "fs";
import ProductManager from "./ProductManager.js";



export default class CartManager {
  constructor() {
    this.path = './src/models/carts.txt'
  }
  async getCarts() {
    let respuesta = JSON.parse(await fs.readFile(this.path, 'utf-8'))
    return respuesta;
  }
  async createCart() {
    const cartDB = await this.getCarts()
    const id = cartDB.length > 0 ? cartDB[cartDB.length - 1].id + 1 : 1
    cartDB.push({ id: id, products: [] })
    await fs.writeFile(this.path, JSON.stringify(cartDB))
    return id
  }
  async getCartByID(id) {
    const cid = check.id(id)
    const cartDB = await this.getCarts()
    const cartFound = cartDB.find((item) => item.id === cid)
    return cartFound ?? []
  }
  async addItemToCart(cartid, prodid) {
    const cid = check.id(cartid);
    const pid = check.id(prodid);
    const cartDB = await this.getCarts()

    const cartFound = cartDB.find((item) => item.id === cid)
    
    const prod = await ProductManager.getProductById(pid)
    
    const item = cartFound.products.find(prod => { return prod.id == pid })
    item ? item.quantity++ : cartFound.products.push({ id: prod.id, quantity: 1 })
    await fs.writeFile(this.path, JSON.stringify(cartDB))
  }
}



