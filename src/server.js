import express from 'express';
import routerProd from './routes/products.js';
import ProductManager from './controllers/ProductManager.js';
import {engine} from 'express-handlebars'
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/', routerProd)
//app.engine('handlebars',engine())
//app.set('view engine','handlebars')
//app.set('views', path.resolve(__dirname,'views'))

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Server on Port ${PORT}`);
})
server.on('error', (error) => console.log(`Error en el servidor ${error}`))