const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
let resul = document.getElementById('play');

rock.addEventListener('click', function(){
    const choices = ['r','p','s'];
    let computer = choices[Math.floor(choices.length * Math.random())];
    if(computer === choices[0]){
        
        resul.textContent = "It's a tie!";
    }else if(computer === choices[1]){
        resul.textContent = 'Pilde ang ferson!';
    }else{
        resul.textContent = 'Daog ang ferson';
    }
    console.log(computer);
}, false);
paper.addEventListener('click', function(){
    const choices = ['r','p','s'];
    let computer = choices[Math.floor(choices.length * Math.random())];
    if(computer === choices[1]){
        resul.textContent = "It's a tie!";
    }else if(computer === choices[2]){
        resul.textContent = 'Pilde ang ferson!';
    }else{
        resul.textContent = 'Daog ang ferson!';
    }
    console.log(computer);
}, false);
scissor.addEventListener('click', function(){
    const choices = ['r','p','s'];
    let computer = choices[Math.floor(choices.length * Math.random())];
    if(computer === choices[2]){
        resul.textContent = "It's a tie!";
    }else if(computer === choices[1]){
        resul.textContent = 'Pilde ang ferson!';
    }else{
        resul.textContent = 'Daog ang ferson!';
    }
    console.log(computer);
}, false);