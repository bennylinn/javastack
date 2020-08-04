public class FizzBuzz {
    public String fizzBuzz(int number) {
        // fizzbuzz logic here
        String fizz = "Fizz";
        String buzz = "Buzz";

        var retr = "";

        if (number%3 == 0) {
            retr = retr + fizz;
        }
        if (number%5 == 0) {
            retr = retr + buzz;
        } 
        if (retr == "") {
            retr = retr + number;
        }

        return retr; // stub
    }
}
