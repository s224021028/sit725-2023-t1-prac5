const services = require("../services")

function showHomeView(req, res)
{
    res.sendFile("index.html");
}

async function getExpression(req, res)
{
    var result = await services.expressionsService.getExpression()
    res.json({data: result})
}

async function deleteAllExpressions(req, res)
{
    var result = await services.expressionsService.deleteAllExpressions()
    res.json({data: result})
}

function postExpression(req, res)
{
    var operation = req.body.operation
    var numA = parseFloat(req.body.numA)
    var numB = parseFloat(req.body.numB)
    var showDecimal = req.body.showDecimal
    var ans = calculate(operation, numA, numB, showDecimal)
    services.expressionsService.postExpression(operation, numA, numB, ans, (err, result) => {
        if(err)
            console.error(err)
        else
            res.json({data: result})
    })
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

module.exports = {getExpression, postExpression, deleteAllExpressions, showHomeView}