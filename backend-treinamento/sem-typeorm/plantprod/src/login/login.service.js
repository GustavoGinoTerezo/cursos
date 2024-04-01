const LoginEntity = require("./login.entity.js");
const LoginDTO = require("./login.dto.js");

const users = [
  {
    loginId: 1, 
    loginEmailPrinc: 1, 
    loginSenha: 1234, 
    tpUsuario: 1, 
    nome: "Gustavo", 
    cpf: 123456
  },
  {
    loginId: 2, 
    loginEmailPrinc: 2, 
    loginSenha: 123456, 
    tpUsuario: 0, 
    nome: "Gustavo Gino", 
    cpf: 123456789
  },
];

class LoginService {
  
  findAll(){
    return users.map((user) => new LoginDTO(user));
  }

  findOne(id){
    const user = users.find((user) => user.loginId === id);
    if (user) {
      return new LoginDTO(user);
    } else {
      return null;
    }
  }


}



module.exports = LoginService;
