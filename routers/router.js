const express = require("express")
const router = express.Router()

const controllers = require("../controllers")

router.get("/", (req, res) => {
    controllers.expressionsController.showHomeView(req, res)
})

router.get("/results", (req, res) => {
    controllers.expressionsController.getExpression(req, res)
})

router.get("/delete", (req, res) => {
    controllers.expressionsController.deleteAllExpressions(req, res)
})

router.post("/results", (req, res) => {
    controllers.expressionsController.postExpression(req, res)
})

module.exports = router