public class Dog extends Animal{
    private int loyalty;

    public Dog(String name, String color, int l){
        super(name, color);
        this.setLoyalty(l);
    }

    public void speak() {
        super.speak();
        System.out.print("And I am " + this.getLoyalty() + " Loyal");
    }

    public int getLoyalty(){
        return loyalty;
    }

    public void setLoyalty(int loyalty){
        this.loyalty = loyalty;
    }
}