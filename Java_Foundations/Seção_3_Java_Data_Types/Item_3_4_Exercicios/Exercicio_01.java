package Java_Foundations.Seção_3_Java_Data_Types.Item_3_4_Exercicios;

public class Exercicio_01 {
    
    public static void main(String[] args) {

        /*
         * EXERCÍCIO FEITO PARA TESTES DE TIPOS DE DADOS PRIMITIVOS E SEUS RESPECTIVOS
         * INTERVALOS
         * COM O EXPERIMENTO FEITO, É POSSÍVEL NOTAR QUE O INTERVALO DO TIPO PRIMITIVO
         * BYE, NÃO SUPORTA
         * VALORES INTIEIROS ACIMA DE 128.
         */

        byte teste = 128; //É POSSÍVEL NOTAR QUE NESSA LINHA SERÁ DADO UM ERRO POIS O NÚMERO INTEIRO EXCEDE O INTERVALO
        System.out.println(teste);

        short teste1 = 128;
        System.out.println(teste1);

        byte teste2 = 127;
        System.out.println(teste2);
        System.out.println(teste2 = teste2 + 1);
        System.out.println(teste2 = teste2 + 1);

    }
}
