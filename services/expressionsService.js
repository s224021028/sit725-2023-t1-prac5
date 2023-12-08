const models = require("../models")

async function getExpression()
{
    return await models.expressionsModel.getExpression()
}

async function deleteAllExpressions()
{
    return await models.expressionsModel.deleteAllExpressions()
}

function postExpression(operation, numA, numB, ans, callback)
{
    models.expressionsModel.postExpression(operation, numA, numB, ans, callback)
}

module.exports = {getExpression, postExpression, deleteAllExpressions}