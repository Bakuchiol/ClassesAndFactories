// Hamster
class Hamster {
    constructor(name){  // yes because it's redundant to have it as a parameter
        this.owner = ''
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
    // change name of hamster owner
    newOwner(master){
        this.owner = master
    }
}
const cage1 = new Hamster() 


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
    getAge(){
        return this.age
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
        this.weight += num
        this.mood += num
        return  `Weight is ${this.weight}, mood is ${this.mood}`
    }    

    exercise(num){
        //decrement weight
        this.weight -= num

        return (`After exercising, ${this.name} is now ${this.weight}kg.`)
    }
    ageUp(num){
        //increment age, increment height, increment weight, decrement mood
        // increment bank account by 10 (birthday money)
        
       this.age += num
       this.height += num
       this.weight += num
       this.mood -= num
       this.bankAccount += 10 * num
       
       return (`At ${this.age} years old, their height is ${this.height},
       their weight is ${this.weight}, their mood is ${this.mood}, and they accumulated $${this.bankAccount}.`)
    }
    buyHamster(hamster){
        //push hamster object onto hamster array
        //increment mood by 10, decrement bankAccount by value of hamster (use getPrice)
        this.hamsters.push(hamster); //goes in hamster array
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
        // change name of hamster owner
        hamster.newOwner(getName())
    }
}

const person = new Person("Timmy")
console.log(person.ageUp(5));
console.log(person.eat(5));
console.log(person.exercise(5));


console.log(person.ageUp(9));
const ham =  new Hamster("Gus")
console.log(person.buyHamster(ham))

console.log(person.ageUp(15));
console.log(person.eat(2));
console.log(person.exercise(2));