// main.js - Silly Story Generator

// Selecting elements
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const ukCheck = document.getElementById('uk');

// Function to generate a random value from an array
function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

// Original Story template
const storyText = "It was 94 Fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

// Event listener for button click
randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    
    // Select random elements
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
    
    // Replace placeholders with random values
    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);
    
    // Adjust story for custom name
    if(customName.value.trim() !== '') {
        const name = customName.value;
        newStory = newStory.replace('Bob', name);
    }
    
    // Adjust units for UK preference
    if(ukCheck.checked) {
        const weightInStone = Math.round(300 / 14) + ' stone';
        const tempInCelsius = Math.round((94 - 32) * 5 / 9) + '°C';
        newStory = newStory.replace('94 Fahrenheit', tempInCelsius);
        newStory = newStory.replace('300 pounds', weightInStone);
    }
    
    // Display updated story
    story.textContent = newStory;
    story.style.visibility = 'visible';
}
