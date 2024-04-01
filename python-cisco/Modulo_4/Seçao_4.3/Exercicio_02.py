# EXERCICIO SEMELHANTE AO EXERCICIO 01, PORÉM É UTILIZADO UMA VERIFICAÇÃO EM LISTA PARA SABER A QUANTIDADE EXATA DE DIAS QUE O MÊS POSSUI E VERIFICA SE OS DIAS INFORMADOS PARA
# AQUELE MÊS ESTÁ CORRETA, CASO ESTEJA ERRADA, É PRINTADO NO TERMINAL UMA LINHA ESCRITA "FALHA".
# TAMBÉM É PRINTADO NA TELA SE O ANO É BISSEXTO OU NÃO.

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


teste_anos = [1900, 2000, 2016, 1987, 3000]
teste_mes = [2, 2, 1, 11, 5]
teste_resultado_dias = [28, 29, 31, 30, 31]

for i in range(len(teste_anos)):
	yr = teste_anos[i]
	mo = teste_mes[i]
	print(yr, mo, "-> ", end="")
	resultado_diasult = dias_no_mes(yr, mo)
	if resultado_diasult == teste_resultado_dias[i]:
		print("OK")
		if resultado_diasult == 29:
			print("O ano", teste_anos[i], "é bissexto")
	else:
		print("Falha")
