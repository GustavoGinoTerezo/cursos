package Java_Foundations.Seção_3_Java_Data_Types.Item_3_3_Exercicios;

public class Exercicio_01 {

    /*
     * PROGRAMA USADO PARA CONCATENAR STRINGS
     */

    public static void main(String[] args) {

        String nome = "Gustavo";
        String item = "camiseta";
        String valor = "R$ 30,00";
        String descriçao = nome + " quer comprar uma " + item + ". O valor do produto custa " + valor + ".";

        System.out.println(descriçao);

    }
}
