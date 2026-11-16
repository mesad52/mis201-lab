let title = document.getElementById("about-title");
title.textContent = "New Text!"

let buton = document.getElementById("theme-buton");
let body = document.querySelector("body");

buton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});

let form = document.getElementById("contact-form");
let feedback = document.getElementById("form-feedback");

if (form !== null) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let message = document.getElementById("message").value;
        
        if (message.trim().length < 10) {
            feedback.textContent = "Error: Message is too short! Must be atleast 10 char";
            feedback.style.color = "red";
        } else {
            feedback.textContent = "Success: Message approved!";
            feedback.style.color = "green";
        }
    });
}