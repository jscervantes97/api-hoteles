const { MongoClient } = require('mongodb');

const DBConstants =   require('../Constants/DBConstants');
class GenericRepository {

    url = DBConstants.URL_SERVER;

    dbName = DBConstants.DB_NAME;

    collectionName = '';

    client ; 

    constructor(collectionName){
        this.collectionName = collectionName;
        this.client = new MongoClient(this.url);
    }

    async findAll(){
        let results = []; 
        try{
            await this.client.connect();
            const db = this.client.db(this.dbName);
            const collection = db.collection(this.collectionName);
            const findResult = await collection.find({}).toArray();
            console.log('Found documents =>', findResult);
            results = findResult; 
        }catch(error){
            console.log(error)
        }finally{
            this.client.close();
        }
        return results; 
    }

    
    async findByParams(params){
        let results = []; 
        try{
            await this.client.connect();
            const db = this.client.db(this.dbName);
            const collection = db.collection(this.collectionName);
            const findResult = await collection.find(params).toArray();
            console.log('Found documents =>', findResult);
            results = findResult;  
        }catch(error){
            console.log(error)
        }finally{
            this.client.close();
        }
        return results ; 
    }

    async insert(params){
        try{
            await this.client.connect();
            const db = this.client.db(this.dbName);
            const collection = db.collection(this.collectionName);
            const insertResult = await collection.insertOne(params); 
            console.log('insert results =>', insertResult);
        }catch(error){
            console.log(error)
        }finally{
            this.client.close();
        }
    }

    async updateOne(params, queryOption){
        try{
            await this.client.connect();
            const db = this.client.db(this.dbName);
            const collection = db.collection(this.collectionName);
            const insertResult = await collection.updateOne(queryOption , params);
            console.log('update results =>', insertResult);
        }catch(error){+
            console.log(error)
        }finally{
            this.client.close();
        }
    }


}

module.exports = GenericRepository ; 