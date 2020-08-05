import java.util.*;

public class ListOfExceptions {

    public static void main(String[] args) {
        castTry();
    }
    
    public static ArrayList<Object> create() {
        ArrayList<Object> myList = new ArrayList<Object>();
        myList.add("13");
        myList.add("hello world");
        myList.add(48);
        myList.add("Goodbye World");

        return myList;
    }

    static ArrayList<Object> myList = create();


    public static void castTry() {
        
        for(int i = 0; i < myList.size(); i++) {
            try{
                Integer castedValue = (Integer) myList.get(i);
                System.out.println(castedValue);
            } catch (ClassCastException error) {
                System.out.println(error);
            }
        }
    }
    

}