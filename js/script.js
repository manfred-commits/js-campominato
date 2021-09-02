// SEZIONE ENUNCIATO/CONSEGNA

// Consegna
// Il computer deve generare 16 numeri casuali tra 1 e 100 (bombe).
// I numeri non possono essere duplicati.
// In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella) OK
// La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe. OK
// Al termine della partita il software deve comunicare il punteggio. OK

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
var userIsPlaying = true;






document.getElementById("game-container").addEventListener("click",
    function(event){

        if(userIsPlaying){
            // 2.1 se la variabile di controllo, che verifica che il giocatore non è esploso e non ha ancora vinto, è vera:


            if(!numeriCliccati.includes(event.target.innerHTML)){
                //2.2 E se non è vero che il numero cliccato dall'utente è presente nella variabile numeriCliccati, (variabile che raccoglie, tutti i numeri cliccati dall'utente) 


                // 3.Fai diventare il blocco rosso.

                event.target.classList.add("red");
            
                // 3.1 inserisci l'inner html del target selezionato, dentro la variabile, che si utilizzerà per il confronto.

                clickUtente=(event.target.innerHTML);


                //3.2 Aggiungi all'array, che contiene i numeri cliccati dall'utente, il numero cliccato.

                numeriCliccati.push(clickUtente);

                
                console.log(numeriCliccati);


                console.log(clickUtente);
                
                //3.3 Verifica se il numero cliccato corrisponde ad una bomba o meno. E salva questo risultato in una variabile.

                var esploso = bombe.includes(clickUtente);

                console.log();



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

















// document.getElementById("game-container").addEventListener("click",
//     function(event){
//         event.target.classList.toggle("red");
//         alert(event.target.innerHTML);
//     }
// );



// /SEZIONE CODICE PRINCIPALE
