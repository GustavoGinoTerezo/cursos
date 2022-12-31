package Java_Foundations.Seção_3_Java_Data_Types.Item_3_4_Exercicios;

public class Exercicio_02 {

    public static void main(String[] args) {

        // POPULAÇÃO MUNDIAL ATUALMENTE
        double populaçaoAtualMundo = 7_000_000_000.00;
        System.out.println("POPULAÇÃO MUNDIAL ATUALMENTE: " + populaçaoAtualMundo);

        // POPULAÇÃO MUNDIAL EM 1950, Source: United Nations Population Division
        // 2.52 Bilhões
        int africaPop = 221_000_000;
        int asiaPop = 1_402_000_000;
        int europePop = 547_000_000;
        int americaPop = 339_000_000;
        int oceaniaPop = 13_000_000;
        System.out.println("POPULAÇÃO MUNDIAL EM 1950: "
                + africaPop + asiaPop + europePop + americaPop + oceaniaPop);

        // A POPULAÇÃO ATUAL DA ÁSIA É EQUIVALENTE A 60% DA POPULAÇÃO MUNDIAL.
        double porcentagemAsia = 0.6;
        double populaçaoAsiaAtual = populaçaoAtualMundo * porcentagemAsia;
        System.out.println("POPULAÇÃO ATUAL NA ÁSIA: " + populaçaoAsiaAtual);

    }

}
