/*
    PERSON BUYS HAMSTER SECTION
*/

// class Hamster {
//     constructor(name) {
//         this.owner = '';
//         this.name = name;
//         this.price = 15;
//     }

//     wheelRun() {
//         console.log('squeak squeak');
//     }

//     eatFood() {
//         console.log('nibble nibble');
//     }

//     getPrice() {
//         return this.price;
//     }

//     own(owner) {
//         this.owner = owner.getName();
//     }
// }

// class Person {
//     constructor(name) {
//         this.name = name;
//         this.age = 0;
//         this.height = 0;
//         this.weight = 0;
//         this.mood = 0;
//         this.hamsters = [];
//         this.bankAccount = 0;
//     }

//     getName() {
//         return this.name;
//     }

//     getAge() {
//         return this.age;
//     }

//     getWeight() {
//         return this.weight;
//     }

//     greet() {
//         console.log(`Hello, ${this.name}!`);
//     }

//     eat(x) {
//         for (let a = 0; a < x; a++) {
//             this.weight++;
//             this.mood++;
//         }
//     }

//     exercise(x) {
//         for (let b = 0; b < x; b++) {
//             this.weight--;
//         }
//     }

//     ageUp(x) {
//         for (let c = 0; c < x; c++) {
//             this.age++;
//             this.height++;
//             this.weight++;
//             this.mood--;
//             this.bankAccount += 10;
//         }
//     }

//     buyHamster(hamster) {
//         this.hamsters.push(hamster);
//         hamster.own(child);
//         this.mood += 10;
//         this.bankAccount -= hamster.getPrice();
//     }
// }

// const child = new Person("Timmy");  // 1

// child.ageUp(5);  // 2; age/height/weight = 5, mood = -5; bankAccount = 50

// child.eat(5);  // 3; weight = 10, mood = 0

// child.exercise(5); // 4; weight = 5

// child.ageUp(9);  // 5; age/height/weight = 14, mood = -9, bankAccount = 140

// const creature = new Hamster("Gus");  // 6

// child.buyHamster(creature);  // 7 + 8; creature.owner = "Timmy", hamsters = [creature], mood = 1, bankAccount = 125

// child.ageUp(15);  // 9; age/height/weight = 29, mood = -14, bankAccount = 275 

// child.eat(2);  // 10; weight = 31, mood = -12

// child.exercise(2);  // 11; weight = 29

// console.log(child);
// console.log(creature);
//  

/*
    CHEF MAKE DINNER SECTION
*/
class Dinner {
    constructor(app, ent, des) {
        this.appetizer = app;
        this.entree = ent;
        this.dessert = des;
    }
}
class Chef {
    constructor(name){
        this.name = name;
        this.dishes = [];
    }

    cook(app, main, treat) {
        const food = new Dinner(app, main, treat);
        this.dishes.push(food);
    }

    serve(courses) {
        for (let i = 0; i < courses && i < this.dishes.length; i++) {
            console.log(this.dishes[i]);
        }
    }
}

const meesa = new Chef("nokker");

meesa.cook("breadsticks", "fish bones", "red pill");
meesa.cook("shu mai", "xiao long bao", "blue pill");
meesa.cook("porridge", "sunny fruit salad", "chateau romani");
const surprise = new Dinner("Mozzarella sticks", "Katsudon", "Chocolate volcano cake");
meesa.serve(3);
console.log(surprise);