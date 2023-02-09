import {promises as fs} from "fs";
export default class ProductManager{
    constructor(){
        this.path = './src/models/products.txt';
    }
    static incrementarID() {
        if(this.idIncrement) {
            this.idIncrement++
        } else {
            this.idIncrement = 1
        }
        return this.idIncrement
    }
  addProduct = async (producto) =>{
    const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
    producto.id = ProductManager.incrementarID()
    prods.push(producto)
    await fs.writeFile(this.path, JSON.stringify(prods))
    return 'producto creado'
  }
 
    getProducts = async() =>{
       let respuesta = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        return respuesta;
    }
    getProductsById = async (id) => {
       let respuesta = JSON.parse(await fs.readFile(this.path, 'utf-8'))
       let productById = respuesta.filter(product => product.id === id)
       console.log(productById);
    }
    deleteProductsById = async (id) =>{
        let respuesta = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        let deleteById = respuesta.filter(product => product.id  != id)
        console.log(deleteById);
        await fs.writeFile(this.path, JSON.stringify(deleteById));
        return 'producto eliminado'
    }
}


