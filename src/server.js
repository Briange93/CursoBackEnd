import express from 'express';
import routerProd from './routes/products.js';
import routerCart from './routes/carts.js';
import { __dirname } from './utils/path.js';
import {engine} from 'express-handlebars';


const app = express();
const PORT = 8080;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/static',express.static(__dirname +'../../public'))

app.use('/api/carts', routerCart)
app.use('/api/products', routerProd)

//app.engine('handlebars',engine())
//app.set('view engine','handlebars')
//app.set('views', path.resolve(__dirname,'views'))


const server = app.listen(PORT, () => {
    console.log(`Server on Port ${PORT}`);
})
server.on('error', (error) => console.log(`Error en el servidor ${error}`))