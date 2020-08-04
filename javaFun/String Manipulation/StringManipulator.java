public class StringManipulator {
    public String trimAndConcat(String str1, String str2) {
        String retr = str1.trim() + str2.trim();
        return retr; 
    }

    public Integer getIndexOrNull(String str, char letter) {
        Integer retr = str.indexOf(letter);

        if (retr == -1) {
            return null;
        } else {
            return retr;
        }
    }

    public Integer getIndexOrNull(String str, String substr) {
        Integer retr = str.indexOf(substr);

        if (retr == -1) {
            return null;
        } else {
            return retr;
        }
    }

    public String concatSubstring(String str1, int int1, int int2, String str2) {
        String sub = str1.substring(int1, int2);
        String retr = sub + str2;

        return retr;
    } // Get a substring using a starting and ending index, and concatenate
      // that with the second string input to our method. Feel free to use the substring method of the String class.
}