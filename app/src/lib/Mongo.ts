import { MongoClient } from 'mongodb';

export default class MongoDB {
    private url = "mongodb+srv://jlvila:jj123456@jlvila.w8q6kim.mongodb.net/ECOMMERCE00?retryWrites=true&w=majority"
    private client: any = null;

    constructor() {
        try {
            this.client = new MongoClient(this.url);
        } catch (error: any) {
            console.log(error);
        }
    }
    // CREAR CARRITO - OK -
    async createNewCart() {
        try {
            await this.client.connect();
            const db = this.client.db('ECOMMERCE00');
            const dataOnCollection = db.collection('CARTS');
            const newCart = await dataOnCollection.insertMany([{ nombre: "carrito1", productos: [] }]);
            console.log(newCart)
        } catch (error: any) {
            console.log(`no se pudo crear un nuevo carrito ---> ${error}`);
        }
    }

    //DELETE - OK -
    async deleteCart() {
        try {
            await this.client.connect();
            const db = this.client.db('ECOMMERCE00');
            const dataOnCollection = db.collection('CARTS');
            const result = await dataOnCollection.deleteOne({ nombre: "carrito1" });
            console.log(result);
        } catch (error: any) {
            console.log(`No se pudo eliminar el carrito ---> ${error}`);
        }
    }

    //UPDATE ...... VER NO ANDA
    async updateCart() {
        try {
            await this.client.connect();
            const db = this.client.db('ECOMMERCE00');
            const dataOnCollection = db.collection('CARTS');
            const result = await dataOnCollection.updateOne({ _id: "6545b308fb717f4f8a9ebc2e" }, { $set: { nombre: "carritwo2", productos: [] } });
            console.log(result);
        } catch (error: any) {
            console.log(`no se pudo actualizar carrito ---> ${error}`);
        }
    }

    // OBTENGO CARRITOS - OK -
    async getCart() {
        try {
            await this.client.connect();
            const db = this.client.db('ECOMMERCE00');
            const dataOnCollection = db.collection('CARTS');
            const result = await dataOnCollection.find({}).toArray();
            console.log(result);
        } catch (error) {
            console.log("No se pudo obtener el carrito");
        }
    }
    //-------------------------------------------------------------------------------------------
    //AGREGA UN PRODUCTO NUEVO - OK -
    async createNewProduct() {
        try {
            await this.client.connect();
            const db = this.client.db('ECOMMERCE00');
            const dataOnCollection = db.collection('PRODUCTS');
            const newProduct = await dataOnCollection.insertOne({ _id: "102", title: "Agua Salus sin gas", description: "Botella 1l", price: 12, thumbnail: "https://devotouy.vtexassets.com/arquivos/ids/928754-1200-auto?v=638290", code: 60001, stock: 212, status: "true", category: "bebidas" });
            console.log(newProduct)
        } catch (error: any) {
            return "no se pudo crear nuevo producto";
        }
    }

    //ELIMINA UN PRODUCTO - OK -
    async deleteProduct() {
            try {
                await this.client.connect();
                const db = this.client.db('ECOMMERCE00');
                const dataOnCollection = db.collection('PRODUCTS');
                const result = await dataOnCollection.deleteOne({ _id: '102' });
                console.log(result);
            } catch (error: any) {
                console.log(`No se pudo eliminar el producto ---> ${error}`);
            }
        }
    //UPDATE ...... VER NO ANDA
    updateProduct() {
        try {
            return "producto actualizado";
        } catch (error: any) {
            return "no se pudo actualizar producto";
        }
    }
    //OBTIENE PRODUCTOS - OK -
    async getProduct() {
        try {
            await this.client.connect();
            const db = this.client.db('ECOMMERCE00');
            const dataOnCollection = db.collection('PRODUCTS');
            const result = await dataOnCollection.find({}).toArray();
            console.log(result);
        } catch (error: any) {
            return "no se pudo obtener producto";
        }
    }
}