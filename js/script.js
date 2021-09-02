// SEZIONE ENUNCIATO/CONSEGNA

// Consegna
// Il computer deve generare 16 numeri casuali tra 1 e 100 (bombe).
// I numeri non possono essere duplicati.
// In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)
// La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.
// Al termine della partita il software deve comunicare il punteggio.

// /SEZIONE ENUNCIATO/CONSEGNA




// SEZIONE FUNZIONI


// Qesta funzione genera un numero di celle pari ad un numero inserito dall'utente

function makePlayground(num,id){
    for(var i = 1; i <= num; i++){
        document.getElementById(id).innerHTML+=`<div class="square">${i}</div>`;
    }

}


// /SEZIONE FUNZIONI





// SEZIONE CODICE PRINCIPALE

// 1. Il computer deve generare 16 numeri casuali tra 1 e 100 (bombe).
//      I numeri non possono essere duplicati.
//      Per il momento generiamo questi numeri a mano, per risolvere 
//      la parte principale di logica con facilità:

var bombe = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"];


var numeroUtente = parseInt(prompt("Inserisci il numero di celle che devono formare il campo da gioco: "));

// in questa variabile sarà inserito il nome dell'id, del contenitore in cui si vogliono generare le celle
var id ="game-container";


makePlayground(numeroUtente, id);
var clickUtente = "";
var numeriCliccati = [];
document.getElementById("game-container").addEventListener("click",
    function(event){
        
        //2. Se non è vero che il numero cliccato dall'utente è presente nella variabile numeriCliccati, (variabile che raccoglie, tutti i numeri cliccati dall'utente) 

        if(!numeriCliccati.includes(event.target.innerHTML)){

            // 3.Fai diventare il blocco rosso.

            event.target.classList.add("red");
        
            // 3.1 inserisci l'inner html del target selezionato, dentro la variabile, che si utilizzerà per il confronto.

            clickUtente=(event.target.innerHTML);


            //3.2 Aggiungi all'array, che contiene i numeri cliccati dall'utente, il numero cliccato.

            numeriCliccati.push(clickUtente);

            
            console.log(numeriCliccati);


            console.log(clickUtente);
            
            //3.3 Verifica se il numero cliccato corrisponde ad una bomba o meno.

            console.log(bombe.includes(clickUtente));

           
        }

    }
);

















// document.getElementById("game-container").addEventListener("click",
//     function(event){
//         event.target.classList.toggle("red");
//         alert(event.target.innerHTML);
//     }
// );



// /SEZIONE CODICE PRINCIPALE
