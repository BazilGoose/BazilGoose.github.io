/* 
Name: Noah Barraclough
File: script.js
Date: April 4, 2024
*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('.dark');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const fileNames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const altNames = ["Picture of eye", "Waves", "Flowers", "Ancient Egyption Hieroglyphs", "Butterfly"];

/* Looping through images */
for (let i = 0; i < fileNames.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `./images/${fileNames[i]}`);
    newImage.setAttribute('alt', `${altNames[i]}`);
    newImage.addEventListener("click", changeDisplayed);
    thumbBar.appendChild(newImage);
};

function changeDisplayed() {
    displayedImage.setAttribute('src', this.getAttribute('src'));
    displayedImage.setAttribute('alt', this.getAttribute('alt'));
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", DarkLight);

function DarkLight() {
    if (this.getAttribute('class') == "dark") {
        this.setAttribute('class', "light")
        this.textContent = "Lighten"
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)"
    } else {
        this.setAttribute('class', "dark")
        this.textContent = "Darken"
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)"
    }
}