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

    /*addProduct = async(product) =>{
        ProductManager.id++
        let newProduct = {
            title: product.title,
            description: product.description,
            price: product.price,
            thumbmail: product.thumbmail,
            code: product.code,
            stock: product.stock,
            id : ProductManager.id
    }
    let oldProducts = await this.readProducts();
    oldProducts.push(newProduct)
    await fs.writeFile(this.path, JSON.stringify(oldProducts));
   */
  addProduct = async (producto) =>{
    const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
    producto.id = ProductManager.incrementarID()
    prods.push(producto)
    await fs.writeFile(this.path, JSON.stringify(prods))
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
    }
}
const productos = new ProductManager;

//productos.addProduct('mesa', 'tiene cuatro patas', 1000, 'bablabla.com/img','abc123', 5);
//productos.addProduct('silla', 'para sentarse', 500, 'bablabla2.com/img','abc124', 10);
//productos.addProduct('lampara', 'aleja la oscuridad', 5000, 'bablabla3.com/img','abc125', 20);
//productos.addProduct('sillon', 'para relajarse', 10000, 'bablabla4.com/img','abc126', 3);
//productos.addProduct('cama', 'para dormir', 8000, 'bablabla5.com/img','abc127', 8);
//productos.addProduct('biblioteca', 'ordena los libros', 3000, 'bablabla6.com/img','abc128', 2);
//productos.addProduct('perchero', 'colgar cosas', 800, 'bablabla7.com/img','abc129', 1);
//productos.addProduct('ventilador', 'tira viento', 950, 'bablabla8.com/img','abc130', 4);
//productos.addProduct('escritorio', 'para trbaajar', 9000, 'bablabla9.com/img','abc131', 9);
//productos.addProduct('placard', 'guarda la ropa', 15000, 'bablabla10.com/img','abc132', 7);
//productos.getProducts()
//productos.getProductsById(2)
//productos.deleteProductsById(2)
