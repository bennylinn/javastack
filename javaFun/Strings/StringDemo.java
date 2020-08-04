public class StringDemo {

    static void format() {
        String ninja = String.format("Hello, my name is %s. How are you %s?", "Benny", "Jack");
        System.out.println(ninja);
    }

    static void trim() {
        String spaces = "      hello world       ";
        String trimmed = spaces.trim();
        System.out.println("Original: " + spaces);
        System.out.println("Trimmed: " + trimmed);
    }

    static void equality() {
        String a = new String("word");
        String b = new String("word");
        System.out.println("a == b: " + (a == b));
        System.out.println("a.equals(b): " + (a.equals(b)));
    }

    public static void main(String[] args) {
        System.out.println("Formatting example:");
        format();
        System.out.println("");

        System.out.println("Trimming example:");
        trim();
        System.out.println("");

        System.out.println("Equality example:");
        equality();
    }

}
