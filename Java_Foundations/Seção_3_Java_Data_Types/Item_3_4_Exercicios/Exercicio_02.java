package Java_Foundations.Seção_3_Java_Data_Types.Item_3_4_Exercicios;

import java.text.DecimalFormat;

public class Exercicio_02 {

    /*
     * EXERCICIO FEITO PARA TREINAMENTO DE USO DE FORMATAÇÃO DE NÚMEROS E
     * ALTERAÇÃO DE TIPOS PRIMITIVOS COM SEUS RESPECTIVOS INTERVALOS.
     */

    public static void main(String[] args) {

        // POPULAÇÃO MUNDIAL ATUALMENTE
        double populaçaoAtualMundo = 7_000_000_000.00;
        String popMundialFormatado = new DecimalFormat("#,##0").format(populaçaoAtualMundo);
        System.out.println("POPULAÇÃO MUNDIAL ATUALMENTE: " + popMundialFormatado);

        // POPULAÇÃO MUNDIAL EM 1950, Source: United Nations Population Division
        // 2.52 Bilhões
        double africaPop = 221_000_000;
        double asiaPop = 1_402_000_000;
        double europePop = 547_000_000;
        double americaPop = 339_000_000;
        double oceaniaPop = 13_000_000;
        double soma = africaPop + asiaPop + europePop + americaPop + oceaniaPop;
        String valorFormatado = new DecimalFormat("#,##0").format(soma);
        System.out.println("POPULAÇÃO MUNDIAL EM 1950: "
                + valorFormatado);

        // A POPULAÇÃO ATUAL DA ÁSIA É EQUIVALENTE A 60% DA POPULAÇÃO MUNDIAL.
        double porcentagemAsia = 0.6;
        double populaçaoAsiaAtual = populaçaoAtualMundo * porcentagemAsia;
        String popAsiaFormatado = new DecimalFormat("#,##0").format(populaçaoAsiaAtual);
        System.out.println("POPULAÇÃO ATUAL NA ÁSIA: " + popAsiaFormatado);

    }

}
