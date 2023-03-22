TERMINAR
TERMINAR
TERMINAR
TERMINAR
TERMINAR

# EXERCÍCIO DE CÁLCULO DE IMC UTILIZANDO:
#   -FUNÇÃO
#   -FORMAT
#   -PARÂMETROS PARA FUNÇÃO
#   -INPUT

def imc(peso, altura):
    if altura < 1.0 or altura > 2.5 or peso < 20 or peso > 200:
        print(None)
        return None
    resultado = peso/altura**2
    resultado_format = "{:.2f}".format(resultado)
    print("O valor do seu IMC é igual a:", resultado_format)


def libras_para_kilos(lb):
    return lb * 0.45359237
    # 1 lb = 0.45359237 kg


def imc_verifica_peso():
    verificar_peso = int(input("Digite a opção:\n1 - Peso em Libras\n2 - Peso em kg"))
    if verificar_peso == 1:
        libras = int(input("Qual o seu peso em libras: "))
        result_libras = libras_para_kilos(libras)
        altura = float(input("Qual a sua altura em metros: "))    
        imc(result_libras,altura)
        

def imc_print():
    peso = float(input("Qual o seu peso em kilogramas: "))
    altura = float(input("Qual a sua altura em metros: "))
    imc(peso, altura)

