console.log("working");

// Variable & datatypes

//1
//using the = sign

//2
// by changing what is on the right side of the = sign

//3
//take the value of the var and set it to a new var

//4
// when you declare a variable it registers a variable in the corresponding scope and when you assign a variable it assigns a specified value to the variable.

//5
// its when you write out the steps of the code in normal words rather than in a coding languages.
//everytime youre writing new code.

//6
//until you understand the steps involved to get to the final answer.

//Strings

//1
let firstVariable = "Hello World"


//2

//const printGreeting = (yourName) => {
//    console.log(`hello there, ${yourName}`);
//}

//printGreeting("Dillon");

//Booleans

//console.log(a __ b);

//const a = 4;
//const b = 53;
//const c = 57;
//const d = 16;
//const e = 'Kevin';

//console.log(c > d);
//console.log('Name' == 'Name');
//console.log(true !== false);
//console.log(false == false == false == false == false == false || true);
//console.log(false === false)
//console.log(e == 'Kevin');
//console.log(a < b < c);
//console.log(a + a < d);
//console.log(48 == '48');

//The Farm

//1 2 & 3
//let animal = "pig";

//if (animal == "cow") {
//    console.log("moooooo");
//} else {
//    console.log("Hey! You're not a cow.");
//}

//Drivers Ed

//1 2 & 3
//let bob = 12;

//if (bob >= 16) {
//    console.log("Here are the keys");
//} else {
//    console.log("Sorry, youre too young.")
//}

//loops

//A

//1
//for (let i = 0; i <= 10; i++) {
//    console.log(i);
//}

//2
//for (let i = 10; i <= 400; i++) {
//    console.log(i);
//}

//3

//for (let i = 12; i <= 4000; i += 3) {
//    console.log(i);
//}

//get even

//1
//for (let i = 2; i <= 100; i += 2) {
//    console.log(i);
//}

//2
//for (let i = 2; i <= 100; i += 2) {
//    console.log(`${i} is an even number`);
//}

//give me five

//1 & 2

//for (let i = 0; i <= 100; i++) {
//  if (i % 5 == 0) {
//    console.log(`I found a ${i}. High five!`)
//} else if (i % 3 == 0) {
//  console.log(`I found ${i}. Three is a crowd`)
//}
//}

//saving account
//1

//let sum = 0;
//for (let i = 1; i <= 10; i++) {
//    sum += i
//}
//console.log(sum);

//2
//let sumBonus = 0;
//for (let i = 1; i <= 100; i++) {
//    sumBonus += i * 2
//}
//console.log(sumBonus);

//Arrays & control flow

//A
//1 variables

//2 Yes

//3 Car brands

//B
//1
const quotes = ["hello", "how are you", "good bye", "newelement", "extra thing", "more stuff"]

//C
const randomThings = [1, 10, "Hello", true]
//1
randomThings[2];
//2
randomThings[2] = "world";
//3
//console.log(randomThings[2]);

//D change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
//1
ourClass[2]
//2
ourClass[4] = "Octcat";
//3
ourClass[5] = "Cloud City";

//E mix it up
const myArray = [5, 10, 500, 20]
//1
myArray.push("egon");

myArray.push("Another string");

//2
myArray.splice(0, 1);

//3
myArray.unshift("Bob Marley");

//4
myArray.pop("Another string");

//5 Yes it reversed the indexs of the array. yes, it means to change or alter an array
myArray.reverse();

//F biggigie smalls

//for (let i = 0; i <= 120; i++) {
//    if (i < 100) {
//        console.log(`${i} is a little number`);
//    } else if (i >= 100) {
//        console.log(`${i} is a big number`);
//    }
//}

//monkey in the middle
//1, 2, & 3
//for (let i = 0; i <= 25; i++) {
//    if (i < 5) {
//        console.log(` ${i} little number`)
//    } else if (i >= 6 && i > 10) {
//        console.log(`${i} big number`);
//    } else {
//        console.log(`${i} monkey`);
//    }
//}

//H whats in your closet
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
        // These are Thom's shirts
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up",
    ],
    [
        // These are Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
    ],
    [
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];

//1
//console.log(`Kristyn is rocking that ${kristynsCloset[2]} today`);

//2
kristynsCloset.splice(6, 0, "raybans");

//3
kristynsCloset.splice(7, 1, "stained knit hat");

//4
//console.log(thomsCloset[0][0]);

//5
//console.log(thomsCloset[1][0]);

//6
//console.log(thomsCloset[2][0]);

//7
//console.log(`thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]}, and ${thomsCloset[2][2]}`);

//8
thomsCloset[1].splice(2, 1, "footie Pajamas");

//Functions

//A printGreeting
//const printGreeting = (name) => {
//    console.log(`hello there, ${name}`);
//}

//printGreeting("slimer");

//B printCool
//const printCool = (name) => {
//    console.log(`${name} is cool`);
//}

//printCool("Captain Reynolds");

//C calculateCube
//const calculateCube = (side) => {
//    console.log(Math.pow(side, 3));
//}
//calculateCube(5);

//D isVowel
//const isVowel = (letter) => {
//    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "y") {
//        return true
//    } else {
//        return false
//    }
//}

//console.log(isVowel("a"));

//let getTwoLengths = (a, b) => {
//    for (i = 1; a.length && b.length; i++) {
//        return [a.length, b.length]
//    }
//}
//console.log(getTwoLengths("hank", "hippopopalous"));

// F get multiple lengths
const getMultipleLengths = (words) => {
    for (i = 1; i <= words.length; i++) {
        let str = words.toString();

        return str.length
    }
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//const maxOfThree = (a, b, c) => {
//    if (a >= b && a >= c) {
//        return a
//    } else if (b > a && b > c) {
//        return b
//    } else {
//        return c
//    }
//}

//console.log(maxOfThree(3, 5, 1));

//const printLongestWord = (strArray) => {
//    let longestWordIndex = 0;
//    let longest = 0;
//    for (let i = 0; i < strArray.length; i++) {
//        if (strArray[i].length > longest) {
//            longestWordIndex = i;
//            longest = strArray[i].length;
//        }
//    }
//    return strArray[longestWordIndex];
//}

//console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

//I transmogrify
//const transmorgrify = (a, b, c) => {
//    total = Math.pow(a * b, c);
//    return total
//}

//console.log(transmorgrify(5, 3, 2));

//j reverseWordOrder v2
//const reverseWordOrderV2 = (str) => {
//    let reversed = "";
//    for (let i = str.length - 1; i >= 0; i--) {
//        reversed += str[i];
//    }
//    return reversed
//}

//console.log(reverseWordOrderV2("hello"));

//k Get down and dirty with Math.random()

//1
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10));

//2
console.log(getRandomInt(10, 100));

const getRandomNum = (min, max) => {
    return Math.random() * (max - min) + min;
}

//3
console.log(getRandomNum(532, 13267));

//4
console.log(getRandomNum(1, 10));

//5

const getRandomElement = (rand) => {

    return quotes[Math.floor(Math.random() * quotes.length)]
}
console.log(getRandomElement(quotes));

//objects

//a make a user object

//1 & 2
const user = {
    name: "Dillon",
    email: "www.gmail.com",
    age: 27,
    purchased: []
}

//B update the user
user.email = "www.gmail2.com";
user.age++

//C adding keys and values
user.location = "Denver";

//D shopaholic
//1
user.purchased.push("carbohydrates");

//2
user.purchased.push("peace of mind");

//3
user.purchased.push("Merino jodhpurs");

//4
console.log(user.purchased[2]);