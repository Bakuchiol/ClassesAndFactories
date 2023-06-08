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
    //name of hamster
    hamName(){
        return this.name
    }
}
const cage1 = new Hamster() 


//Person
class Person {
    constructor(name){
        this.name = name
        this.age = 0
        this.height = 0
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
        return  (`After eating, ${this.name}'s weight is ${this.weight} grams, mood is ${this.mood} points`)
    }    

    exercise(num){
        //decrement weight
        this.weight -= num

        return (`After exercising, ${this.name} is now ${this.weight} grams.`)
    }
    ageUp(num){
        //increment age, increment height, increment weight, decrement mood
        // increment bank account by 10 (birthday money)
        
       this.age += num
       this.height += num
       this.weight += num
       this.mood -= num
       this.bankAccount += 10 * num
       
       return (`At ${this.age} years old, ${this.name}'s height is ${this.height} cm,
       weight is ${this.weight} grams, mood is ${this.mood} points, and they've accumulated $${this.bankAccount}.`)
    }
    buyHamster(hamster){
        //push hamster object onto hamster array
        //increment mood by 10, decrement bankAccount by value of hamster (use getPrice)
        this.hamsters.push(hamster); //goes in hamster array
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
        // change name of hamster owner
        hamster.newOwner(this.getName())
        console.log(`${this.getName()} is the proud owner of ${hamster.hamName()} the hamster.`)
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

class Dinner {
    constructor(appetizer, entree, dessert){
    this.appetizer = appetizer
    this.entree = entree
    this.dessert = dessert
    }

}

class Chef {
    //make a chef - need chef object to call makeDinner
    constructor(name){
        this.name = name
    }

    makeDinner(appetizer, entree, dessert){
        // make dinner object inside makeDinner -> need to return dinners
        const meal = new Dinner(appetizer, entree, dessert)
        return meal
    }
}
// new chef
const rat = new Chef("Remy");
// meals made
// 1.
console.log(rat.makeDinner("Escargot","Ratatouille", "Macaron"));
// 2.
console.log(rat.makeDinner("Gougères","Steak au Poivre", "Mille Feuille"));
// 3.
console.log(rat.makeDinner("Canapé", "Foie Gras", "Paris Brest"));