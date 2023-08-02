const body = document.querySelector('body');
const scriptElement = document.querySelector('script');

const btnCreateCanvas = document.createElement('button');
btnCreateCanvas.classList.add('btnCreateCanvas');
btnCreateCanvas.textContent = 'Canvas Size'
body.appendChild(btnCreateCanvas);

const btnClearColor = document.createElement('button');
btnClearColor.classList.add('btnClearColor');
btnClearColor.textContent = 'Erase Color';
body.appendChild(btnClearColor)

const divContainer = document.createElement('div');
divContainer.classList.add('divContainer');
//this inserts divcontainer before the script tag in the body
body.insertBefore(divContainer, scriptElement);

const titleBox = document.createElement('div');
titleBox.classList.add('titleBox');
body.appendChild(titleBox);
body.insertBefore(titleBox, divContainer);

const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'Etch A Sketch';
titleBox.appendChild(title);


//This creates x amount of divs

let totalDivs = 16*16;

for (let i = 0; i < totalDivs; i++) {
    var divElement = document.createElement('div');
    divElement.classList.add('divElement');
        //divElement.textContent = 'Div ${i + 1}';
        divContainer.appendChild(divElement);
}

//Event listeners to change the div colors

const divElements = document.querySelectorAll('.divElement');

divElements.forEach(divElement => {
    divElement.addEventListener('mouseenter', () => {
        divElement.style.backgroundColor = getRandomColor();
    });

    /*divElement.addEventListener('mouseleave', () => {
        divElement.style.backgroundColor = '';
    });*/
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

// To get button to clear canvas and prompt new grid input
btnCreateCanvas.addEventListener('click', () => {
   let newTotalDivs = prompt('Enter a grid number for the Canvas, Default: 16');
   newTotalDivs = parseInt(newTotalDivs); //Converts string to a number

   if (isNaN(newTotalDivs) || newTotalDivs < 1 || newTotalDivs > 100) {
    alert('Invalid input. Please enter a valid positive number. (Max 100)')
    return;
   }

   //Remove the existing divs
   divContainer.innerHTML = ''; 

   //Create the new number of divs
    for (let i = 0; i < newTotalDivs * newTotalDivs; i++) {
        const divElement = document.createElement('div');
        divElement.classList.add('divElement');
        //divElement.textContent = 'Div ${i + 1}';
        divContainer.appendChild(divElement);
    }

    const divElements = document.querySelectorAll('.divElement');

    divElements.forEach(divElement => {
        divElement.addEventListener('mouseenter', () => {
            divElement.style.backgroundColor = getRandomColor();
        });
    });
    //To have the clear color button working after canvas change
    divElements.forEach(divElement => {
        btnClearColor.addEventListener('click', () => {
            divElement.style.backgroundColor = '';
        });
    });
});

//clear color
divElements.forEach(divElement => {
    btnClearColor.addEventListener('click', () => {
        divElement.style.backgroundColor = '';
    });
});