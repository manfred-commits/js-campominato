// SEZIONE ENUNCIATO/CONSEGNA

// Consegna
// Il computer deve generare 16 numeri casuali tra 1 e 100 (bombe).   OK
// I numeri non possono essere duplicati.   OK
// In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)   OK
// La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.   OK
// Al termine della partita il software deve comunicare il punteggio.   OK

// /SEZIONE ENUNCIATO/CONSEGNA




// SEZIONE FUNZIONI


// Questa funzione genera un numero di celle pari ad un numero inserito dall'utente
function makePlayground(num,id){
    for(var i = 1; i <= num; i++){
        document.getElementById(id).innerHTML+=`<div class="square">${i}</div>`;
    }

}


// Funzione che genera un numero random tra due intervalli
function randomNumber(num1, num2){
    return Math.floor(Math.random() * (num2 - num1 + 1) + num1);;
}


// /SEZIONE FUNZIONI






// SEZIONE CODICE PRINCIPALE

// 1. Il computer deve generare 16 numeri casuali tra 1 e 100 (bombe).


// in questa variabile sarà inserito il nome dell'id, del contenitore in cui si vogliono generare le celle.
var id ="game-container";


var numeroUtente = parseInt(prompt("Inserisci il numero di celle che devono formare il campo da gioco: "));


var bombe = [];


//1.2 I numeri non possono essere duplicati.
for(var i=0; i<16;i++){

    var random = randomNumber(1, numeroUtente);
    

    //    se il numero random, non è incluso nell'array, pusha il numero dentro l'array.

    if(!bombe.includes(random)){

        bombe.push(random);

    }else{

        i--;

    }


}


 console.log("La posizione delle bombe è:" + bombe);



// funzione che genera le celle in un contenitore specificato nell'argomento.
makePlayground(numeroUtente, id);



// variabile in cui viene temporaneamente messo il l'element target, dell'clickUtente.
var clickUtente = 0;


// array che immagazina i numeri che vengono cliccati dall'utente.
var numeriCliccati = [];



// variabile che fa terminare la partita.
var userIsPlaying = true;




document.getElementById("game-container").addEventListener("click",
    function(event){

        if(userIsPlaying){
            // 2.1 se la variabile di controllo, che verifica che il giocatore non è esploso e non ha ancora vinto, è vera:


            if(!numeriCliccati.includes(clickUtente)){
                //2.2 E se non è vero che il numero cliccato dall'utente è presente nella variabile numeriCliccati, (variabile che raccoglie, tutti i numeri cliccati dall'utente) 

                
                // 3.Fai diventare il blocco rosso.

                event.target.classList.add("red");
            
                // 3.1 inserisci l'inner html del target selezionato, dentro la variabile, che si utilizzerà per il confronto.

                clickUtente=parseInt(event.target.innerHTML);


                //3.2 Aggiungi all'array, che contiene i numeri cliccati dall'utente, il numero cliccato.

                numeriCliccati.push(clickUtente);

                
                //3.3 Verifica se il numero cliccato corrisponde ad una bomba o meno. E salva questo risultato in una variabile.

                var esploso = bombe.includes(clickUtente);




                // 4. Se il numero clicato, corrisponde ad una bomba, quindi se "bombe.includes(clickUtente)" è vero, o il giocatore clicca su tutte le celle che non sono delle bombe. La partita termina.

                
                if(bombe.includes(clickUtente) || numeriCliccati.length == (numeroUtente-16)){
                    
                    
                    if(esploso){
                        
                        // se il giocatore è esploso, comunicare che l'utente ha perso e il punteggio da lui ottenuto è x.

                        console.log("Sei esploso!!");
                        console.log("Il tuo punteggio è : " + numeriCliccati.length);
                        userIsPlaying = false;

                    }else if(numeriCliccati.length == (numeroUtente-16)){


                        // se il giocatore ha cliccato su un numero di celle, pari a [numeroUtente-16 (dove sedici sono le celle occupate dalle bombe)] senza far diventare bombe.includes(clickUtente) == true, allora l'utente ha vinto.

                        console.log("Hai vinto!");
                        userIsPlaying = false;
                        console.log(userIsPlaying);


                    }

                }

            }else{
                alert("Non puoi selezionare una cella già cliccata");
            }
        }
    }
);



// /SEZIONE CODICE PRINCIPALE
