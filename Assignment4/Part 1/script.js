/* 
Name: Noah Barraclough
File: script.js
Date: April 4, 2024
*/

// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

let storyText = `It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`;
let insertx = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let inserty = ["the soup kitchen", "Disneyland", "the White House"];
let insertz = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];



// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener("click", result);

function result() {

  let newStory = storyText;
  let xItem = randomValueFromArray(insertx);
  let yItem = randomValueFromArray(inserty);
  let zItem = randomValueFromArray(insertz);
  
  if(customName.value !== '') {
    const name = customName.value;
    xItem = name

  }

  newStory = newStory.replaceAll(":insertx:", xItem);
  newStory = newStory.replaceAll(":inserty:", yItem);
  newStory = newStory.replaceAll(":insertz:", zItem);

  if(document.getElementById("uk").checked) {
    const weight = Math.round((300/14)) + " stone";
    const temperature =  Math.round(((94-32)*(5/9))) + " centigrade";
    newStory = newStory.replaceAll("94 fahrenheit", temperature);
    newStory = newStory.replaceAll("300 pounds", weight);

  }

  console.log(newStory);

  story.textContent = newStory;
  story.style.visibility = 'visible';
}