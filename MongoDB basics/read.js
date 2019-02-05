const {MongoClient} = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'tododb';

async function readTask() {
    const client = await MongoClient.connect(MONGO_URL);
    const tododb = client.db(DB_NAME);
    const todos = tododb.collection('todos')

    const todoArray = await todos.find({}).toArray()
    todoArray.forEach((todo) => {
        console.log(JSON.stringify(todo))
    });
}

readTask()