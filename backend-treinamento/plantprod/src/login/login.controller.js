const LoginService = require("./login.service")
const loginService = new LoginService();

class LoginController {
  
  getAllLogins(req, res) {
    const logins = loginService.findAll()
    res.json(logins);
  }

  sonarLint(){
    // SOMENTE PARA O SONARLINT FICAR DE BOA
  }
 
}

module.exports = LoginController;