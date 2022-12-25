package Java_Foundations.Seção_3_Java_Data_Types.Item_3_2_Exercicios;

public class Exercicio_02 {

    public static void Ovos() {

        int segunda = 100;
        int terça = 121;
        int quarta = 117;

        double mediaDiaria = (segunda + terça + quarta) / 3;
        double mediaMensal = mediaDiaria * 30;
        double lucroMensal = mediaMensal * 0.18;

        System.out.println("A média diaría de ovos é igual a: " + mediaDiaria);
        System.out.println("A média mensal de ovos é igual a: " + mediaMensal);
        System.out.println("O lucro mensal de ovos é igual a: " + lucroMensal);

    }

    public static void main(String[] args) {

        Exercicio_02.Ovos();

    }

}
