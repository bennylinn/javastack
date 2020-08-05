import java.util.Set;

import java.util.HashMap;

public class Hashmatique {
    public static void main(String[] args) {
        System.out.println(song("Happiness"));
        showAll();
    }
    
    public static HashMap<String, String> create() {
        HashMap<String, String> hm = new HashMap<String, String>();
        hm.put("State of Mind", "State of Mind ... Lorem ipusm .. asd fa;sfaorwij faer oij"); 
        hm.put("Happiness", "Happiness ... Lorem ipusm .. asd fa;sfaorwij faer oij"); 
        hm.put("Discord", "Discord ... Lorem ipusm .. asd fa;sfaorwij faer oij"); 
        hm.put("Sadness", "Sadness ... Lorem ipusm .. asd fa;sfaorwij faer oij"); 
        
        return hm;
    }

    static HashMap<String, String> hm = create();

    public static String song(String s) {
        return hm.get(s);
    }

    public static void showAll() {
        Set<String> keys = hm.keySet();
        for(String key : keys) {
            System.out.println(key + ": " + hm.get(key));
        }
    }
}