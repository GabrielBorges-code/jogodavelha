let entradaUsuarioPedra = document.querySelector("#pedra").innerHTML;
let entradaUsuarioPapel = document.querySelector("#papel").innerHTML;
let entradaUsuarioTesoura = document.querySelector("#tesoura").innerHTML;
let campoResultado = document.querySelector(".resultado");
let campoUsuario = document.querySelector(".usuario");
let campoMaquina = document.querySelector(".maquina");
let empate = document.querySelector(".empate");

let virotiaUsuario = document.querySelector(".player1");
let virotiaMaquina = document.querySelector(".player2");


let entradaUsuario = 0;
let entradaMaquina = 0;

let saidaMaquina = "";
let saidaUsuario = "";

let scoreUsuario = 0;
let scoreMaquina = 0;
let scoreEmpate = 0;


let number1 = "Usuario Venceu";
let number2 = "Maquina Venceu";

let vencedor = 0;


function EntradaUsuarioPedra () {
    entradaMaquina = Math.ceil(Math.random() * 3)
    entradaUsuario = 1;

    SaidaResultados(entradaUsuario, entradaMaquina);
    Jogar();
    
}

function EntradaUsuarioPapel () {
    entradaMaquina = Math.ceil(Math.random() * 3)
    entradaUsuario = 2;

    SaidaResultados(entradaUsuario, entradaMaquina);
    Jogar();

}

function EntradaUsuarioTesoura () {
    entradaMaquina = Math.ceil(Math.random() * 3)
    entradaUsuario = 3;

    SaidaResultados(entradaUsuario, entradaMaquina);
    Jogar();
}

function Jogar () {
    if (entradaUsuario > 3) {
        vencedor = "Valor Invalido";
    
    } else if (entradaUsuario == 1 && entradaMaquina == 3) {
        vencedor = number1;
        
    } else if (entradaUsuario == 2 && entradaMaquina == 1) {
        vencedor = number1;
    
    } else if (entradaUsuario == 3 && entradaMaquina == 2) {
        vencedor = number1;
    
    } else if (entradaUsuario == 1 && entradaMaquina == 2) {
        vencedor = number2;
    
    } else if (entradaUsuario == 2 && entradaMaquina == 3) {
        vencedor = number2;
    
    } else if (entradaUsuario == 3 && entradaMaquina == 1) {
        vencedor = number2;
        
    } else {
        vencedor = "Deu Empate";
    }

    if (vencedor === number1) {
        scoreUsuario++;
    } else if (vencedor === number2){
        scoreMaquina++;
    } else if (vencedor != number1 && vencedor != number2) 
        scoreEmpate++;

    campoResultado.innerHTML = vencedor;
    virotiaUsuario.innerHTML = scoreUsuario;
    virotiaMaquina.innerHTML = scoreMaquina;
    empate.innerHTML = scoreEmpate;

    console.log(vencedor);
    console.log(scoreUsuario);
    console.log(scoreMaquina);
    console.log(scoreEmpate);
    
}

function SaidaResultados (num1, num2) {
    saidaUsuario = num1;
    saidaMaquina = num2;



    if (entradaMaquina == 1) {
        saidaMaquina = "<img src='/assets/pedra.png'>";

    } else if (entradaMaquina == 2) {
        saidaMaquina = "<img src='/assets/papel.png'>";

    } else if (entradaMaquina == 3) {
        saidaMaquina = "<img src='/assets/tesoura.png'>";

    }
    // separação 
    if (entradaUsuario == 1) {
        saidaUsuario = "<img src='/assets/pedra.png'>";

    } else if (entradaUsuario == 2) {
        saidaUsuario = "<img src='/assets/papel.png'>";

    } else if (entradaUsuario == 3) {
        saidaUsuario = "<img src='/assets/tesoura.png'>";

    }

    campoMaquina.innerHTML = saidaMaquina;
    campoUsuario.innerHTML = saidaUsuario;

}

