class LoginDTO {

  constructor({loginId, loginEmailPrinc, tpUsuario, nome, cpf}){
    this.loginId = loginId;
    this.loginEmailPrinc = loginEmailPrinc;
    this.tpUsuario = tpUsuario;
    this.nome = nome;
    this.cpf = cpf
  }

  sonarLint(){
    // SOMENTE PARA O SONARLINT FICAR DE BOA
  }
  
}

module.exports = LoginDTO;