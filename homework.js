// Hamster
class Hamster {
    constructor(owner, name, price){
        this.owner = ""
        this.name = name
        this.price = 15
    }
    wheelRun(){
        console.log("squeak squeak")
    }

    eatFood(){
        console.log("nibble nibble")
    }

    getPrice(){
        return this.price
    }
}
// const cage1 = new Hamster("Overlord","Hamtaro",) 
// console.log(cage1)

//Person
class Person {
    constructor(name){
        this.name = name
        this.age = 0
        this.weight = 0
        this.mood = 0
        this.hamsters = []
        this.bankAccount = 0
    }
    getName(){
        return this.name
    }
    getAge(num){
        return this.age =+ num;
    }
    getWeight(){
        return this.weight
    }
    greet(){
        console.log(`Hello ${this.name}!`)
    }
    eat(num){
        //increment weight, increment mood
        // everytime weight goes up, mood goes up
        if(this.weight += num){
            return this.mood += num
        } else {
            return this.weight += num
        }
    }    

    exercise(num){
        //decrement weight
        return this.weight -= num;
    }
    ageUp(num){
        //increment age, increment height, increment weight, decrement mood
        // increment bank account by 10 (birthday money)
        // this.age += num;
        // this.height += num;
        // this.weight += num;
        // this.mood -= num;
        // this.bankAccount += 10 * num;
       while(this.age += num){}
    }
    buyHamster(hamster){
        //push hamster object onto hamster array
        //increment mood by 10, decrement bankAccount by value of hamster (use getPrice)
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
    }
}

const block = new Person("Timmy")
console.log(block.getName());
console.log(block.getAge(5));
console.log(block.eat(5));
console.log(block.exercise(5));

console.log(block.getAge(9));

const ham =  new Hamster("", "Gus")
console.log(ham.owner("Timmy"))