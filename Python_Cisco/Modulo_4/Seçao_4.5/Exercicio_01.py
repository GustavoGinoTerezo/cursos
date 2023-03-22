# EXERCÍCIO DE CÁLCULO DE IMC UTILIZANDO:
#   -FUNÇÃO
#   -FORMAT
#   -PARÂMETROS PARA FUNÇÃO
#   -INPUT

def imc(peso, altura):
    if altura < 1.0 or altura > 2.5 or peso < 20 or peso > 200:
        print (None)
        return None
    resultado = peso/altura**2
    resultado_format = "{:.2f}".format(resultado)
    print("O valor do seu IMC é igual a:", resultado_format)


peso = float(input("Qual o seu peso em kilogramas: "))
altura = float(input("Qual a sua altura em metros: "))

imc(peso, altura)
