public class ImportDemoTest {
    void a() {
        System.out.println('x');
    }
    public static void main(String[] args) {
        ImportDemo iD = new ImportDemo();
        String currentDate = iD.getCurrentDate();
        System.out.println(currentDate);
    }
}