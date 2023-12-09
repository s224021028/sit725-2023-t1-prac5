const models = require("../models")

async function getAllExpressions()
{
    return await models.expressionsModel.getAllExpressions()
}

async function deleteAllExpressions()
{
    return await models.expressionsModel.deleteAllExpressions()
}

function postExpression(operation, numA, numB, showDecimal, callback)
{
    var ans = calculate(operation, numA, numB, showDecimal)
    models.expressionsModel.postExpression(operation, numA, numB, ans, callback)
}

function calculate(operation, numA, numB, showDecimal)
{
    var ans = 0
    if (operation == "add")
    {
        ans = numA + numB
    }
    else if (operation == "sub")
    {
        ans = numA - numB
    }
    else if (operation == "mul")
    {
        ans = numA * numB
    }
    else if (operation == "div")
    {
        ans = numA / numB
    }
    else if (operation == "mod")
    {
        ans = numA % numB
    }
    else if (operation == "pow")
    {
        ans = numA ** numB
    }
    if (showDecimal == "true")
        return ans
    else
        return Math.round(ans)
}

module.exports = {getAllExpressions, postExpression, deleteAllExpressions}