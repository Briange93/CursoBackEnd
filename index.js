//Creo la clase ProductManager.
class ProductManager {
    constructor(){
        this.products = [];
            }
            static id = 0;
//Creo el metodo addProduct.            
    addProduct(title, description, price, thumbmail, code, stock){
        for(let i=0; i< this.products.length; i++){
            if(this.products[i].code === code){
                console.log('el codigo ya existe');
                break;
            }
        }
       ProductManager.id++;
        this.products.push({
            title,
            description,
            price,
            thumbmail,
            code,
            stock,
            id:ProductManager.id      
        })
    }
//Creo el metodo getProduct.    
    getProduct(){
        return this.products;
    }

    getProductbyId(id){
        this.products.find((products) => products.id === id)?
            console.log(this.products.find((products) => products.id === id)):
            console.log('ID no encontrado');
        }
    }
    

// Valido el array products.
 const products = new ProductManager;
// console.log(products.getProduct());
//Valido el metodo addProduct con productos
 products.addProduct('Silla','blablabla', 120, 'lalala.com', 'abc123', 3);
 //console.log(products.getProduct());
 //Valido la funcionabilidad del id autoincremental.
 products.addProduct('Mesa','tiene cuatro patas', 200, 'lalalalalalala.com', 'abc124', 6);
 //console.log(products.getProduct());
 //Valido el metodo getProductbyId.
 //products.getProductbyId(2);
//Valido que no se repita el codigo.
 products.addProduct('Lampara','ilumina', 100, 'lalallalala.com', 'abc123', 3);
console.log(products.getProduct());

