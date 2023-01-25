import {promises as fs} from "fs";

class ProductManager{
    constructor(){
        this.path = './products.txt';
        this.products = [];

    }
    static id = 0;

    addProduct = async(title, description, price, thumbmail, code, stock) =>{
        ProductManager.id++
        let newProduct = {
        
            title,
            description,
            price,
            thumbmail,
            code,
            stock,
            id : ProductManager.id
    }
    this.products.push(newProduct)
    await fs.writeFile(this.path, JSON.stringify(this.products));
   // console.log(newProduct);
    
  }
    readProducts = async () =>{
    let respuesta = await fs.readFile(this.path, 'utf-8')
    return JSON.parse(respuesta);
}
    getProducts = async() =>{
       let respuesta = await this.readProducts()
        return console.log(respuesta);
    }
    getProductsById = async (id) => {
       let respuesta = await this.readProducts();
       let productById = respuesta.filter(product => product.id === id)
       console.log(productById);
    }
    deleteProductsById = async (id) =>{
        let respuesta = await this.readProducts();
        let deleteById = respuesta.filter(product => product.id  != id)
        console.log(deleteById);
        await fs.writeFile(this.path, JSON.stringify(deleteById));
    }
}
const productos = new ProductManager;

productos.addProduct('mesa', 'tiene cuatro patas', 1000, 'bablabla.com/img','abc123', 5);
productos.addProduct('silla', 'para sentarse', 500, 'bablabla2.com/img','abc124', 10);
productos.addProduct('lampara', 'aleja la oscuridad', 5000, 'bablabla3.com/img','abc125', 20);
productos.getProducts()
productos.getProductsById(2)
productos.deleteProductsById(2)