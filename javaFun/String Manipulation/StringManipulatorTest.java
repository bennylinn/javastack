public class StringManipulatorTest {
    static public void main(String[] args) {
        var str1 = "  Hello   ";
        var str2 = "     World  ";
        StringManipulator sm = new StringManipulator();
        System.out.println("Trim and Concat: ");
        System.out.println(sm.trimAndConcat(str1, str2));
        System.out.println("");

        System.out.println("Get Index of Null: ");
        System.out.println(sm.getIndexOrNull(str1, 'o')); // 6
        System.out.println(sm.getIndexOrNull(str2, 'o')); // 6
        System.out.println(sm.getIndexOrNull(str1, 'x')); // null

        System.out.println("Get Index of Null 2: ");
        System.out.println(sm.getIndexOrNull(str1, "llo")); // 4
        System.out.println(sm.getIndexOrNull(str2, "Wo")); // 5
        System.out.println(sm.getIndexOrNull(str1, "xx")); // null
        
        System.out.println("Concat Substring: ");
        System.out.println(sm.concatSubstring(str1, 2, 3, str2));
        System.out.println(sm.concatSubstring(str2, 2, 6, str1));
        System.out.println(sm.concatSubstring(str1, 6, 6, str2));
    }
}