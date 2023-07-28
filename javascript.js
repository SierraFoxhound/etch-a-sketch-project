const body = document.querySelector('body');
const scriptElement = document.querySelector('script');

const divContainer = document.createElement('div');
divContainer.classList.add('divContainer');
//this inserts divcontainer before the script tag in the body
body.insertBefore(divContainer, scriptElement);


//This creates x amount of divs
const totalDivs = 16;

for (let i = 0; i < totalDivs; i++) {
    const divElement = document.createElement('div');
    divElement.classList.add('divElement');
        divElement.textContent = 'Div ${i + 1}';
        divContainer.appendChild(divElement);
}