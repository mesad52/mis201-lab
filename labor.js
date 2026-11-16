let title = document.getElementById("about-title");
title.textContent = "New Text!"

let buton = document.getElementById("dark-mode-btn");
let body = document.querySelector("body");

buton.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
});

let form = document.getElementById("login-form");
let feedback = document.getElementById("form-feedback");

if (form !== null) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let username = document.getElementById("username").value;
        
        if (username.trim().length < 5) {
            feedback.textContent = "Error: Message is too short!";
            console.log("Username is too short!");
            feedback.style.color = "red";
        } else {
            feedback.textContent = "Success: Message approved!";
            feedback.style.color = "green";
        }
    });
}

let system = document.getElementById("status-text");
system.textContent = "System Active!";
system.classList.remove("normal");
system.classList.add("success");

