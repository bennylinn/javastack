public class Animal {
    private String name; // member variables or fields
    private String color;


    public Animal(String n, String c) { // constructor with parameters
        this.setName(n);
        this.setColor(c); 
    }

    public Animal() { // constructor if nothing was passed in (overloading)
        this.setName("Default");
        this.setColor("Default");
    }

    public void speak() { // method
        System.out.println("Hello, my name is " + this.name);
    }





    public String getName() { // getter --> used to access the private member variables
        return name;
    }

    public void setName(String name){ // setter
        this.name = name;
    }

    public String getColor() { // getter 
        return color;
    }

    public void setColor(String color) { // setter
        this.color = color;
    }

}