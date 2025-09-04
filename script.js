

// Theme Changer
let i = 0;
function ThemeChanger() {
    i++;
    if (i === 1) {
        const element = document.getElementsByClassName("footer-third-div")[0];
        element.style.backgroundColor = "black";
        element.style.color = "white";
    }

    else {
        i = 0;
        const element = document.getElementsByClassName("footer-third-div")[0];
        element.style.backgroundColor = "white";
        element.style.color = "black";

    }
}

// Use of Hamburger
function Hamburgershow() {
    document.querySelector(".hamburger-div-hide").classList.add("hamburger-div-show");
    document.querySelector(".hamburger-backdrop-hide").classList.add("hamburger-backdrop-show");
    document.body.classList.add("no-scroll");
}

function Hamburgerhide() {
    document.querySelector(".hamburger-div-hide").classList.remove("hamburger-div-show");
    document.querySelector(".hamburger-backdrop-hide").classList.remove("hamburger-backdrop-show");
    document.body.classList.remove("no-scroll");

}

//Card Like Button
function LikeButton(event) {
    console.log(event);
    event.target.classList.toggle("card-like-btn-red");
}


// Accordian
function Accordion(n) {
    n.target.parentElement.parentElement.classList.toggle("service-section-show");
}

// popup
const popUp = () => {
    document.querySelector(".popup-main").classList.toggle("popup-main-show");
    document.querySelector("body").classList.toggle("popup-body-show");
    document.body.classList.toggle("no-scroll");

}
const greetTimeout = setTimeout(popUp, 3000);

// Counter
let million = 0;
let years = 0;
let countries = 0;

// target values
const millionTarget = 100;
const yearsTarget = 80;
const countriesTarget = 50;

let interval;

function updateCounter() {
    if (million < millionTarget) {
        document.getElementById("million").innerText = ++million;
    }

    if (years < yearsTarget) {
        document.getElementById("years").innerText = ++years;
    }

    if (countries < countriesTarget) {
        document.getElementById("countries").innerText = ++countries;
    }

    if (million >= millionTarget && years >= yearsTarget && countries >= countriesTarget) {
        clearInterval(interval);
    }
}


setTimeout(() => {
    interval = setInterval(updateCounter, 90);
}, 10000);

// CountDown
let hours = 1;
let minutes = 30;
let seconds = 10;

const timer = setInterval(() => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(timer);
        return;
    }

    if (seconds === 0) {
        if (minutes === 0) {
            if (hours > 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            }
        } else {
            minutes--;
            seconds = 59;
        }
    } else {
        seconds--;
    }

    // Update HTML
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

}, 1000);

// customer care popup
function customerCarePopupText() {
    document.querySelector(".chat-box-text-show").classList.add("chat-box-text-hide");
}
function customerCarePopupimg() {
    document.querySelector(".customer-cross-img-show").classList.add("customer-cross-img-hide");
    document.querySelector(".chat-box-text-show").classList.add("chat-box-text-hide");

}
