const userName= (prompt('Type your name'));

const userSurname= (prompt('Type your surname'));

const userColor= (prompt('Type your favourite color'));

const userPassword= userName + userSurname + userColor;
console.log(userPassword);

document.getElementById('output').innerHTML = 'Your password is ' + userPassword + '21';