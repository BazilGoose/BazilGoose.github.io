const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const fileNames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const altNames = ["Picture of eye", "Waves", "Flowers", "Ancient Egyption Hieroglyphs", "Butterfly"];

/* Looping through images */
for (let i = 0; i < fileNames.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `../${fileNames[i]}`);
    newImage.setAttribute('alt', `${altNames[i]}`);
    thumbBar.appendChild(newImage);
};
/* Wiring up the Darken/Lighten button */
