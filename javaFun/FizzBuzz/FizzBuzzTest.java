public class FizzBuzzTest {
    static public void main(String[] args) {
        FizzBuzz fb = new FizzBuzz();

        for (int i = 0; i <= 15; i++) {
            System.out.println(fb.fizzBuzz(i));
        }
    }
}