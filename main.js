
// Scrivi una funzione che permetta di stampare in console tutti i numeri da 1 a N:
// N dovra’ rappresentare il parametro formale della funzione
// tutti i numeri multipli di 3 siano sostituiti dalla stringa 'Fizz',
// tutti i numeri multipli di 5 siano sostituiti dalla stringa 'Buzz'
// e tutti i numeri multipli di 15 siano sostituiti dalla stringa 'fizzBuzz'


function generaNumeri(numero_N) {


for ( let i = 1; i <= numero_N; i++) {


    if ( i % 3 == 0) { 
        i = `Fizz`;
        console.log(i);
    } else if ( i % 5 == 0) {
        i = `Buzz`;
        console.log(i);
    } else if ( i % 15 == 0 ) {
        i = `fizzBuzz`;
        console.log(i);
    } else {console.log(i);
     }


     
}

}

    
generaNumeri (20);

