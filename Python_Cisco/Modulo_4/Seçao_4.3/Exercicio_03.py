# EXERCÍCIO USANDO OS 2 EXERCÍCIOS ANTERIORES COMO BASE PARA QUE SEJA
# CALCULADO A QUANTIDADE DE DIAS EM UM CERTO PERÍODO, DECORRENTE DE UMA
# DATA ESPECIFICADA NA FUNÇÃO (CONTAGEM_DE_DIAS)

def prova_ano_bissexto(ano):
	if ano % 4 != 0:
		return False
	elif ano % 100 != 0:
		return True
	elif ano % 400 != 0:
		return False
	else:
		return True


def dias_no_mes(ano, mes):
	if ano < 1582 or mes < 1 or mes > 12:
		return None
	dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	resultado_dias = dias[mes - 1]
	if mes == 2 and prova_ano_bissexto(ano):
		resultado_dias = 29
	return resultado_dias


def contagem_de_dias(ano, mes, dia):
    dias = 0
    for i in range(1, mes):
        teste = dias_no_mes(ano, i)
        if teste == None:
            return None
        dias += teste
    teste = dias_no_mes(ano, mes)
    if dia >= 1 and dia <= teste:
       return dias + dia
    else:
       return None


print(contagem_de_dias(2000, 5, 20))
