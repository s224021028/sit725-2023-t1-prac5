const { MongoClient, ServerApiVersion } = require('mongodb');
const url = "mongodb://localhost:27017/operations";
const client = new MongoClient(url, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})
let data;
try
{
    client.connect();
    data = client.db().collection("Expressions");
}
catch (exception)
{
    console.error(exception);
}

async function getAllExpressions()
{
    try 
    {
        return await data.find({}).toArray()
    }
    catch(error) 
    {
        console.error(error);
    }
}

async function deleteAllExpressions()
{
    try
    {
        return await data.deleteMany({})
    }
    catch(error)
    {
        console.error(error)
    }
}

function postExpression(operation, numA, numB, ans, callback)
{
    var expression = {operator: operation, numberA: numA, numberB: numB, result: ans}
    data.insertOne(expression, callback)
}

module.exports = {getAllExpressions, postExpression, deleteAllExpressions}