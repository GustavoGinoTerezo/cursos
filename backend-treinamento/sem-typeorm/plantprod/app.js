const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// ====================================================================================
// REQUIRES ENDPOINTS

const LoginController = require("./src/login/login.controller");

// ====================================================================================
// INSTÂNCIA DOS ENDPOINTS

const loginController = new LoginController();

// ====================================================================================
// ENDPOINTS

// LOGIN
app.get("/logins", (req, res) => loginController.getAllLogins(req, res));

// 
// ====================================================================================

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});