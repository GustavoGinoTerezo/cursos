# EXERCÍCIO DE CHECAGEM DE NÚMERO PRIMO, ONDE O MESMO É VERIFICADO DENTRO DA FUNÇÃO "NUMERO_PRIMO"
# O RANGE DE "NÚMERO_PRIMO É DEFINIDO DE MODO QUE O MESMO SEJA PEQUENO, FAZENDO COM QUE NÃO HAJA
# VÁRIOS TESTES DENTRO DA ESTRUTURA DE REPETIÇÃO, E COM ISSO É FEITA A VALIDAÇÃO AUTOMATICAMENTE

def numero_primo(num):
    for i in range(2, int(1 + num ** 0.5)):
        if num % i == 0:
            return False
        return True


for i in range(2, 100):
    if numero_primo(i):
        print(i, end=" ")
print()
