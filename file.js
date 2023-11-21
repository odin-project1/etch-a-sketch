const container = document.querySelector('.container');

generateXByXGrid(16);

const button = document.querySelector('button');
button.addEventListener('click', () => {
    const num = Number.parseInt(prompt('Enter the no. x, of x by x squares you want to see'));
    container.textContent = '';
    generateXByXGrid(num);
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255) + 1, blue = Math.floor(Math.random() * 255) + 1, green = Math.floor(Math.random() * 255) + 1;

    return {red, green, blue};
}

function generateXByXGrid(x) {
    for(let i = 0; i<x; i++) {
        let innerContainer = document.createElement('div');
        innerContainer.classList.add('inner-container');
        for(let j = 0; j<x; j++) {
            let elementDiv = document.createElement('div');
            elementDiv.classList.add('element');
            let {red, green, blue} = getRandomColor();
            elementDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            elementDiv.style.width = '100px';
            elementDiv.style.height = '50px';
    
            elementDiv.addEventListener('mouseover', () => {
                elementDiv.style.backgroundColor = 'white';
            });
    
            elementDiv.addEventListener('mouseout', () => {
                elementDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            })
    
            innerContainer.appendChild(elementDiv);
        }
    
        container.appendChild(innerContainer);
    }
}