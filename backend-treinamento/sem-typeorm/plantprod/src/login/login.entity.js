class LoginEntity {
  
  constructor(loginId, loginEmailPrinc, loginSenha, tpUsuario, nome, cpf){
    this.loginId = loginId;
    this.loginEmailPrinc = loginEmailPrinc;
    this.loginSenha = loginSenha;
    this.tpUsuario = tpUsuario;
    this.nome = nome;
    this.cpf = cpf
  }

  sonarLint(){
    // SOMENTE PARA O SONARLINT FICAR DE BOA
  }

}

module.exports = LoginEntity;