import { MongoClient, ObjectId } from 'mongodb';
import config from "../config/config";


export default class MongoDB {
    private url = config.Mongourl
    private client: any = null;

    constructor() {
        try {
            this.client = new MongoClient(this.url);
        } catch (error: any) {
            console.log(error);
        }
    }

    async create(obj: any, dbCollection: string) {
        let collection = "";
        let objeto = "";

        if(dbCollection === "CARTS") {
            collection = dbCollection
            objeto = "carrito";
        }

        if(dbCollection === "PRODUCTS") {
            collection = dbCollection 
            objeto = "producto";
        }

        if(dbCollection === "CHAT") {
            collection = dbCollection
            objeto = "chat";
        }

        try {
            await this.client.connect();
            const db = this.client.db('ECOMMERCE00');
            const dataOnCollection = db.collection(collection);
            const objetoCreado = await dataOnCollection.insertMany( obj );
            console.log(`${objeto} creado`);
            return objetoCreado;
        } catch (error: any) {
            console.log(`no se pudo crear nuevo objeto ---> ${error}`);
            return false;
        }
    }

    async read(id: any, dbCollection: string) {
        let collection = "";
        let objeto = "";

        if(dbCollection === "CARTS") {
            collection = dbCollection
            objeto = "carritos";
        }

        if(dbCollection === "PRODUCTS") {
            collection = dbCollection 
            objeto = "productos";
        }

        if(dbCollection === "CHAT") {
            collection = dbCollection
            objeto = "chat";
        }

        if (id === undefined) {
            try {
                await this.client.connect();
                const db = this.client.db('ECOMMERCE00');
                const dataOnCollection = db.collection(collection);
                const result = await dataOnCollection.find({}).toArray();
                console.log(`Se lee la coleccion ${objeto}`);
                return result;
            } catch (error) {
                console.log("No se pudo obtener listado de carritos");
                return false;
            }
        }

        try {
            await this.client.connect();
            const db = this.client.db('ECOMMERCE00');
            const dataOnCollection = db.collection(collection);
            const result = await dataOnCollection.findOne({_id: new ObjectId(id)});
            console.log(`Se lee la coleccion ${objeto}`);
            return result;
        } catch (error) {
            console.log("No se pudo obtener listado de carritos");
            return false;
        }

    }


    async delete(id: any, dbCollection: string) {
        let collection = "";
        let objeto = "";

        if(dbCollection === "CARTS") {
            collection = dbCollection
            objeto = "carrito";
        }

        if(dbCollection === "PRODUCTS") {
            collection = dbCollection 
            objeto = "producto";
        }

        if(dbCollection === "CHAT") {
            collection = dbCollection 
            objeto = "chat";
        }

        try {
            await this.client.connect();
            const db = this.client.db('ECOMMERCE00');
            const dataOnCollection = db.collection(collection);
            const objetoEliminado = await dataOnCollection.deleteOne({ _id: new ObjectId(id) });
            console.log(`${objeto} eliminado`);
            return objetoEliminado;
        } catch (error: any) {
            console.log(`no se pudo eliminar ${objeto} ---> ${error}`);
            return false;
        }
    }

    async update(id: any, dataActualizada: any, dbCollection: string) {
        let collection = "";
        let objeto = "";

        if(dbCollection === "CARTS") {
            collection = dbCollection
            objeto = "carrito";
        }

        if(dbCollection === "PRODUCTS") {
            collection = dbCollection 
            objeto = "producto";
        }
        
        if(dbCollection === "CHAT") {
            collection = dbCollection 
            objeto = "chat";
        }

        try {
            await this.client.connect();
            const db = this.client.db('ECOMMERCE00');
            const dataOnCollection = db.collection(collection);
            const objetoActualizado = await dataOnCollection.updateOne({ _id: new ObjectId(id) }, { $set: dataActualizada});
            console.log(`${objeto} actualizado`);
            return objetoActualizado;
        } catch (error: any) {
            console.log(`no se pudo actualizar ${objeto} ---> ${error}`);
            return false;
        }
    }
}


