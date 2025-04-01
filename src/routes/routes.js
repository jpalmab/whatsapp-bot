const express = require("express");

const router = express.Router();

const whatsappController = require("../controllers/whatsappControllers");

router
.get("/", whatsappController.verifyToken) //para verificar mensaje de meta debe ser get
.post("/", whatsappController.ReceivedMessage) //y ac[a] post para recibir

module.exports = router;
