// Write your code here!

const remMain = document.querySelector('#main');

remMain.remove('#main');

const newHeader = document.createElement('h1');
newHeader.id = 'victory';

const yourName = 'Ken Wachira';
newHeader.innerHTML = `${yourName}, is the champion`; 