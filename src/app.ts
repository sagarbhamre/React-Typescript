let age: number;
age = 30;
const userName = 'Sagar123';

console.log(userName);

const button = document.querySelector('button')!;

function clickHandler(message: string){
    console.log('Clicked: '+message);
}

if(button){
    button.addEventListener('click', clickHandler.bind(null, "You are welcome"))
}

