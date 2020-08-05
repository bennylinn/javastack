public class AnimalTest {
    public static void main(String[] args){

        Animal koala = new Animal("Koala", "Grey");
        koala.speak();

        Dog cinder = new Dog("Cinder", "Black", 9000);
        cinder.speak();

        System.out.println(cinder.getColor());

    }
}