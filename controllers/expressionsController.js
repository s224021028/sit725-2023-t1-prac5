const services = require("../services")

function showHomeView(res)
{
    res.sendFile("index.html");
}

async function getAllExpressions(req, res)
{
    var result = await services.expressionsService.getAllExpressions()
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
    services.expressionsService.postExpression(operation, numA, numB, showDecimal, (err, result) => {
        if(err)
            console.error(err)
        else
            res.json({data: result})
    })
}

module.exports = {getAllExpressions, postExpression, deleteAllExpressions, showHomeView}