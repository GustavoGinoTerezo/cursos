package Java_Foundations.Seção_3_Java_Data_Types.Item_3_2_Exercicios;

import javax.swing.JOptionPane;

public class Exercicio_01 {

    /*
     * PROGRAMA USADO PARA FAZER A SOMA DOS OVOS DE UM GALINHEIRO A PARTIR DA QUANTIDADE
     * DE GALINHAS QUE O GALINHEIRO POSSUI E A QUANTIDADE DE OVOS QUE SÃO BOTADOS POR GA-
     * LINHA, E ALÉM DISSO, NO MEIO DESSE PROCESSO, É ADICIONADO UMA NOVA QUANTIDADE DE 
     * GALINHAS NO GALINHEIRO.
     */

    public static void somaOvos() {

        int chickenCount = Integer.parseInt(JOptionPane.showInputDialog("Qual o número de galinhas: "));
        int newChicken = Integer.parseInt(JOptionPane.showInputDialog("Qual o número de galinhas que foram adicionadas: "));
        int newChickenCount = chickenCount + newChicken;
        int endChickenCount = newChickenCount / 2;
        int eggsPerChicken = Integer.parseInt(JOptionPane.showInputDialog("Qual a quantidade de ovos por galinhas: "));
        
        int segunda = chickenCount * eggsPerChicken;
        int terça = newChickenCount * eggsPerChicken;
        int quarta = endChickenCount * eggsPerChicken;

        int somaOvos = segunda + terça + quarta;

        System.out.println(somaOvos);

    }

    public static void main(String[] args) {

        Exercicio_01.somaOvos();

    }

}
