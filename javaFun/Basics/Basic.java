import java.lang.reflect.Array;
import java.util.*;

public class Basic {

    public static void main(String[] args) {
        print255();
        printOdd255();
        printSum();
        printEach(arr1);
        findMax(arr1);
        avg(arr1);
        System.out.println(oddArray());
        greaterThan(oddArray(), 200);
        square(arr1);
        noNeg(arr1);
        System.out.println(maxMinAvg(arr1));
        shift(arr1);
    }

    public static void print255() {
        for(var i = 1; i < 256; i++) {
            System.out.println(i);
        }    
    }

    public static void printOdd255() {
        for(var i = 1; i < 256; i++) {
            if(i%2 == 1) {
                System.out.println(i);
            }
        }  
    }

    public static void printSum() {
        int sum = 0;
        for(var i = 1; i < 256; i++) {
            sum += i;
            System.out.println(sum);
        }   
    }
    
    public static ArrayList<Integer> createArray(int range) {
        ArrayList<Integer> arr = new ArrayList<Integer>();
        for(var i = 0; i < range; i++) {
            arr.add(i);
        }
        return arr;
    }

    static ArrayList<Integer> arr1 = createArray(5);
    
    public static void printEach(ArrayList<Integer> array) {
        for(Integer obj : array) {
            System.out.println(obj);
        }
    }

    public static void findMax(ArrayList<Integer> array) {
        int max = 0;

        for(Integer obj : array) {
            if(obj > max) {
                max = obj;
            }
        }

        System.out.println(max);
    }

    public static void avg(ArrayList<Integer> array) {
        int len = array.size();
        int sum = 0;
        for(Integer num : array) {
            sum += num;
        }

        System.out.println(sum/len);
    }

    public static ArrayList<Integer> oddArray() {
        ArrayList<Integer> arr = new ArrayList<Integer>();
        
        for(var i = 1; i < 256; i++) {
            if(i%2==1) {
                arr.add(i);
            }
        }

        return arr;
    }

    public static void greaterThan(ArrayList<Integer> arr, int num) {
        int count = 0;
        
        for (Integer i : arr) {
            if (i > num) {
                count += 1;
            }
        }
        
        System.out.println(count);
    }

    public static void square(ArrayList<Integer> array) {
        ArrayList<Integer> newArr = new ArrayList<Integer>();
        for (Integer i : array) {
            newArr.add(i*i);
        }

        System.out.println(newArr);
    }

    public static void noNeg(ArrayList<Integer> array) {
        ArrayList<Integer> newArr = new ArrayList<Integer>();
        for (Integer i : array) {
            if (i < 0) {
                newArr.add(0);
            } else {
                newArr.add(i);
            }
        }

        System.out.println(newArr);
    }

    public static ArrayList<Object> maxMinAvg(ArrayList<Integer> array) {
        int min = 2000000;
        int max = -2000000;
        int len = array.size();
        int sum = 0;

        for (Integer i : array) {
            sum += i;
            if (i > max) {
                max = i;
            }
            if (i < min) {
                min = i;
            }
        }
        ArrayList<Object> newArr = new ArrayList<Object>();
        newArr.add(max);
        newArr.add(min);
        newArr.add(sum/len);
        return newArr;
    }

    public static void shift(ArrayList<Integer> array) {
        ArrayList<Integer> newArr = new ArrayList<Integer>();
        for (var i = 1; i < array.size(); i++) {
            newArr.add(i);
        }
        newArr.add(0);

        System.out.println(newArr);
    }

}




