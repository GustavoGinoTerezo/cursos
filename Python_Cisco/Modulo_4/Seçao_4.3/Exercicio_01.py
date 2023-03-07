# PROGRAMA CRIADO PARA VERIFICAR SE O ANO INFORMADO NO INPUT SERÁ BISSEXTO OU NÃO.
# UTILIZADO A ESTRUTURA DE CONDIÇÃO IF/ELSE E A ESTRUTURA DE REPETIÇÃO WHILE.

# FUNÇÃO ABAIXO PARA TESTAR A CONDIÇÃO DO ANO SE É BISSEXTO OU NÃO
def prova_ano_bissexto(ano):
    if ano % 4 == 0:
        if ano % 100 == 0:
            if ano % 400 == 0:
                return print("O ano é bissexto")
            else:
                return print("O ano não é bissexto")
    elif ano % 4 == 0:
        if ano % 100 != 0:
            return print("O ano é bissexto")
    elif ano % 4 == 0:
        if ano % 100 != 0:
            if ano % 400 != 0:
                return print("O ano não é bissexto")
    else:
        return print("O ano não é bissexto")

# LAÇO DE REPETIÇÃO WHILE ABAIXO PARA REPETIR A AÇÃO DO PROGRAMA
condiçao = True

while condiçao:

    ano = int(input("Escolha um ano para saber se o mesmo é bissexto: "))

    prova_ano_bissexto(ano)

    opcao = int(input("Digite 1 para continuar ou 0 para parar: "))
    if opcao == 1:
        condiçao = True
    else:
        print("Encerrando programa")
        condiçao = False
