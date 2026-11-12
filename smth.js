
function calculateTargetYear(startYear, yearsToPass = 2) {
    return(startYear + yearsToPass);
}

console.log(calculateTargetYear(2026));

const skills = ["html", "css", "js"]

for (let i =0; i < skills.length; i++) {
    console.log("My skills: " + skills[i])
}

let interesting = prompt("Choose your field of interest (web, ai) :".toLowerCase())

switch(interesting) {
    case "web":
        console.log("Check out my HTML and CSS courses.");
        break
    case "ai":
        console.log("Review my ML notes.");
        break
    default:
        console.log("Please enter a valid field of interest");
        break
}