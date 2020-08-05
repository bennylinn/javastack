import java.util.*;

public class Basic {

    static public void printRandomNumber() {
        Random myRandom = new Random();
        myRandom.nextInt();
        int randomInt = myRandom.nextInt(10) + 1;
        System.out.println(randomInt);
    }

    static public int returnRandomNumber(int n) {
        Random myRandom = new Random();
        return myRandom.nextInt(n) + 1;
    }

    static public void createRandomArray() {
        ArrayList<Integer> nums = new ArrayList<Integer>();
        for(int i = 1; i < 10; i++) {
            nums.add(Basic.returnRandomNumber(i));
        }

        System.out.println(nums);
    }

    static public void createRandomList() {
        int[] nums = new int[15];
        for(int i = 0; i < 15; i++) {
            nums[i] = Basic.returnRandomNumber(100);
        }
        System.out.println(Arrays.toString(nums));
    }

}