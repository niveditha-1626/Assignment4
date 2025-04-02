// Image gallery setup

const displayedImg = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// List of image filenames and alt texts
const imageList = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const altTexts = {
  'pic1.jpg': 'Swan messenger',
  'pic2.jpg': 'In Contemplation',
  'pic3.jpg': 'Shakuntala looking back to glimpse Dushyanta',
  'pic4.jpg': 'Kadambri',
  'pic5.jpg': 'Fresh from bath'
};

// Loop through imageList and create thumbnails
for (let i = 0; i < imageList.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${imageList[i]}`);
  newImage.setAttribute('alt', altTexts[imageList[i]]);
  thumbBar.appendChild(newImage);

  // Click event to change main image
  newImage.addEventListener('click', () => {
    displayedImg.src = `images/${imageList[i]}`;
    displayedImg.alt = altTexts[imageList[i]];
  });
}

// Toggle button to darken/lighten image
btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
  }
});

