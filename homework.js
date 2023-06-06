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
    constructor(name, age, height, weight, mood, hamsters, bankAccount){
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
    eat(){
        //increment weight, increment mood
        // everytime weight goes up, mood goes up
        this.weight++
        this.mood++
        
    }
    exercise(){
        //decrement weight
        this.weight--
    }
    ageUp(){
        //increment age, increment height, increment weight, decrement mood
        // increment bank account by 10 (birthday money)
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount += 10;
    }
    buyHamster(hamster){
        //push hamster object onto hamster array
        //increment mood by 10, decrement bankAccount by value of hamster (use getPrice)
        this.hamsters.push(hamster)
        this.mood + 10;
        this.bankAccount - getPrice()
    }
}