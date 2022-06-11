document.querySelector('.area').addEventListener('click',clicar)
document.querySelector('.area').addEventListener('mouseenter',cima)
document.querySelector('.area').addEventListener('mouseout',sair)



function clicar(){
    document.querySelector('.area').innerText = 'Clicou'  
}

function cima(){
    document.querySelector('.area').innerText = 'Entrou'
}

function sair(){
    document.querySelector('.area').innerText = 'Saiu'
}


function somar(){
    var tn1 = document.querySelector('#n1')
    var tn2 = document.querySelector('#n2')
    document.querySelector('.res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    s =  n1 + n2
    
    document.querySelector('.res').innerText = s



}



// Formas diferentes de acessar um elemento HTML em JS

document.getElementsByTagName('p')[0].style.color = 'blue';

document.getElementsByClassName('destaque')[0].style.color = 'red';

document.getElementById('ate').style.color = 'green';

document.querySelector('.area').style.color = 'black';



