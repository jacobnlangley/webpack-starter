import '../styles/index.scss';

// Get the form by class and input elements by id
let form = document.querySelector('.form');
let colorSelection = document.getElementById('color');

// get the color display element by class
let updatedColor = document.querySelector('.color');
let updateUI = document.getElementById('ctaContainer');

// Listen to 'submit' event and trigger addition
form.addEventListener('change', (event) => {
    event.preventDefault();
    let newColor = colorSelection.value;
    console.log("newColor",newColor);
  
    //Remove any color classes in DOM
    updateUI.classList.remove('purple','blue','green','orange','yellow');
    //Updating DOM with new color
    updateUI.classList.add(newColor);
    //Update text with fave color
    updatedColor.textContent = `My favorite color is ${newColor}`;
} );
