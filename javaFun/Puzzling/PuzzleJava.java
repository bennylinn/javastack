import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Random;

public class PuzzleJava {

    // public static void main() {
    //     ArrayList<Integer> numbers = new ArrayList<Integer>();
    //     numbers.add(5);
    //     numbers.add(4);
    //     numbers.add(3);
    //     numbers.add(2);
    //     numbers.add(1);
        
    //     Collections.shuffle(numbers);
    //     System.out.println(numbers); // [1, 5, 2, 4, 3]
    //     Collections.sort(numbers);
    //     System.out.println(numbers); // [1, 2, 3, 4, 5]
                
    //     Random r = new Random();
    //     System.out.println(r.nextInt()); // without bounds
    //     System.out.println(r.nextInt(5)); // with bounds 0 to 5
    // }

    public static void printGreaterThan10() {
        ArrayList<Integer> numbers = new ArrayList<Integer>();
        numbers.add(3);
        numbers.add(5);
        numbers.add(1);
        numbers.add(2);
        numbers.add(7);
        numbers.add(9);
        numbers.add(8);
        numbers.add(13);
        numbers.add(25);
        numbers.add(32);

        for(Integer num : numbers) {
            if(num > 10) System.out.println(num);
        }
    }

    public static void shuffleNames() {
        // Nancy, Jinichi, Fujibayashi, Momochi, Ishikawa
        ArrayList<String> names = new ArrayList<String>();
        names.add("Nancy");
        names.add("Jinichi");
        names.add("Fujibayashi");
        names.add("Momochi");
        names.add("Ishikawa");


        Collections.shuffle(names);
        System.out.println(names);
    }

    public static ArrayList<Character> alphabetSoup() {
        char[] letters = "qwertyuiopasdfghjklzxcvbnm".toCharArray();
        ArrayList<Character> letterss = new ArrayList<Character>();
        for(char letter : letters) {
            letterss.add(letter);
        }
        Collections.shuffle(letterss);
        

        System.out.println(letterss.get(0));
        System.out.println(letterss.get(25));

        if(letterss.get(0) == 'a' || letterss.get(0) == 'e' || letterss.get(0) == 'i' || letterss.get(0) == 'o' || letterss.get(0) == 'u') {
            System.out.println("We got a vowel in the front boys");
        }

        return letterss;
    }

    public static ArrayList<Integer> randomNumRanged() {
        Random random = new Random();
        ArrayList<Integer> array = new ArrayList<Integer>();
        for(var i=0; i<10; i++) {
            array.add(55 + random.nextInt(46));
        }

        return array;

    }

    public static void sortRandomNums() {
        ArrayList<Integer> array = randomNumRanged();

        Collections.sort(array);
        System.out.println(array);
    }

    public static void randomString() {
        ArrayList<Character> alphabets = alphabetSoup();
        String string = "";
        for(var i=0; i < 5; i++) {
            string += alphabets.get(i);
        }

        System.out.println(string);
    }

}