console.log("Portfolio engine started")

let visitorname = prompt("Welcome! Do enter your name, mortal.")

let explorePermission = confirm("Are you, are you..?")

if (explorePermission === true) {
    console.log("Visitor is a sigma")
} else {
    console.log("Visitor might not be a sigma.")
}

let ageinput = prompt("Enter your age:")
let age = Number(ageinput)

const year = 2026;
let birthyear = year - age
console.log("You were born in ", birthyear);

let department = prompt("enter your department:")

switch(department) {
    case "mis":
        console.log("damn.");
        break
    default:
        console.log("not damn");
        break
}

if (age < 18) {
    console.log("Lil boy")
} else if (age >= 18 && age < 25) {
    console.log("Uni boi")
} else {
    console.log("unc.")
}

const port = ["a", "b", "c", "d", "e"]

for (let i =0; i < port.length; i++) {
    console.log("letters " + (i +1) + ":" + port[i])
}

function calculator(filled, total = 5) {
    return(filled/total) * 100;
}

console.log(calculator);

function visiting (name, vfunc){
    console.log("Registration in progress");
    vfunc(name)
}

visiting("newvisitor", (name) => {
    console.log(name + " signed up to be a dancer");
});
