import {promises as fs} from 'fs';

export default class ProductManager{
    constructor(){
        this.path = './src/models/products.json'
    }
    static incrementarID() {
        if(this.idIncrement) {
            this.idIncrement++
        } else {
            this.idIncrement = 1
        }
        return this.idIncrement
    }

    readProducts = async () =>{
        let products = await fs.readFile(this.path, 'utf-8');
        return JSON.parse(products);
    }

    writeProducts = async (product) =>{
        await fs.writeFile(this.path, JSON.stringify(product));
    }
    addProduct = async (product) =>{
        let oldProducts = await this.readProducts(); 
        let allProducts = [...oldProducts, product];
        product.id = ProductManager.incrementarID()
        await this.writeProducts(allProducts)
        return 'Producto agregado';
    }

    getProducts = async () =>{
        return await this.readProducts(); 
    }

    getProductsById = async (id) =>{
        let products = await this.readProducts();
        let productById = products.find(prod => prod.id === id);
        return  productById;
    }
}

