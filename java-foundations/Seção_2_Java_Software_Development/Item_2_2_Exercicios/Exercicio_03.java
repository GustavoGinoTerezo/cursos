package Java_Foundations.Seção_2_Java_Software_Development.Item_2_2_Exercicios;

    /* 
     *  EXERCÍCIO UTILIZADO PARA TESTAR O BREAKPOINT (PONTO DE INTERRUPÇÃO) DA IDE 
     *  BREAKPOINT UTILIZADO NA LINHA 22 DO PROGRAMA
     *  ALÉM DO BREAKPOINT, É UTILIZADO A CHAMADA DE UM MÉTODO DA CLASSE (DRAWLEGS)
     *  PARA SER PRINTADO AS PATAS DO GATO NO DESENHO.
     */

public class Exercicio_03 {
    public static void drawLegs(){
        System.out.println("     ||     ||      ");
        System.out.println("     ||     ||      ");
        System.out.println("    (||)   (||)     ");
    }
    
    public static void main(String[] args) {
        System.out.println("   /\\         /\\   ");
        System.out.println("  /  \\_______/  \\  ");
        System.out.println(" /               \\ ");
        System.out.println("(  /\\         /\\  )");
        System.out.println("====     V     ====");
        System.out.println("======(__|__)======");
        System.out.println("  (             )  ");
        System.out.println("   (___________)   ");
        drawLegs();
    }    
}
