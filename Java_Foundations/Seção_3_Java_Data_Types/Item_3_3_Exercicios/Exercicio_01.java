package Java_Foundations.Seção_3_Java_Data_Types.Item_3_3_Exercicios;

import javax.swing.JOptionPane;

public class Exercicio_01 {

    /*
     * PROGRAMA USADO PARA CONCATENAR STRINGS
     */

    public static void main(String[] args) {

        String nome = "Gustavo";
        String item = "camiseta";
        double valor = 30.00;
        double taxa = 1.05;
        int quantidade = Integer.parseInt(JOptionPane.showInputDialog(null, "Qual a quantidade de camisetas que serão compradas: "));
        double valorFinal = valor*taxa*quantidade;

        String descriçao = nome + " quer comprar " + quantidade + " " + item + ". O valor total é igual a R$ " + valorFinal;

        System.out.println(descriçao);

    }
}
