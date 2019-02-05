const {MongoClient} = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'tododb';

async function writeTask() {
    const client = await MongoClient.connect(MONGO_URL);
    const tododb = client.db(DB_NAME);
    const todos = tododb.collection('todos')
    // const todo = {
    //     task: "An important task",
    //     priority: 1,
    //     owner: "manager"
    // }
    // const result = await todos.insertOne(todo)
    // console.log(result)

    const result = await todos.insertMany([
        {task: "An important task", priority: 2, owner: "manager"},
        {task: "Complicated task", priority: 1, owner: "security"},
        {task: "Necessary task", priority: 3, owner: "ceo"},
        {task: "Urgent task", priority: 1, owner: "manager"}
    ])
    console.log(result);
}

writeTask()