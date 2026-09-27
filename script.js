document.addEventListener("DOMContentLoaded", function () {

```
const buttons = document.querySelectorAll(".primary-btn, .secondary-btn");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        button.style.transform = "scale(0.97)";

        setTimeout(function () {
            button.style.transform = "";
        }, 150);
    });
});

const progress = document.querySelector(".progress");

if (progress) {
    progress.style.width = "0%";

    setTimeout(function () {
        progress.style.transition = "width 1.5s ease";
        progress.style.width = "78%";
    }, 300);
}

const featureCards = document.querySelectorAll(".feature-card");

featureCards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
        card.style.cursor = "pointer";
    });
});

