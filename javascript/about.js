/**/ //Dalla dispensa pag. 135 (Galleria fotografica)
/**/function gestoreClickAvanti() { //La funzione scorre in avanti di una foto la galleria.
/**/   try {
/**/        if (!automatico) {
/**/            cambiaFoto(+1);
/**/        }
/**/    } catch (e) {
/**/        alert('gestoreClickAvanti ' + e);
/**/    }
/**/}

/**/function gestoreClickIndietro() { //La funzione rimanda indietro di una foto la galleria.
/**/    try {
/**/        cambiaFoto(-1);
/**/    } catch (e) {
/**/        alert('gestoreClickIndietro ' + e);
/**/    }
/**/}

/**/function cambiaFoto(x) { //La funzione ha un parametro che viene mandato avanti o indietro in base alla funzione che la richiama.
/**/    indiceFoto += x;
/**/    if (indiceFoto == numeroFoto) {
/**/        indiceFoto = 0;
/**/    }
/**/    if (indiceFoto < 0) {
/**/        indiceFoto = numeroFoto - 1;
/**/    }
/**/    nodoFoto.setAttribute('src', galleria[indiceFoto]);
/**/}

/**/function gestoreClickStartStop() { //La funzione gestisce l'evento che viene generato con il click sul pulsante "scorri in automatico" oppure "stop".
/**/    try {
/**/        if (automatico) {
/**/            nodoStartStop.value = 'Scorri in automatico';
/**/            automatico = false;
/**/        } else {
/**/            nodoStartStop.value = 'Stop';
/**/            automatico = true;
/**/            cambiaFotoInAutomatico();
/**/        }
/**/    } catch (e) {
/**/        alert('gestoreClickStartStop ' + e);
/**/    }
/**/}

/**/function cambiaFotoInAutomatico() { //La funzione cambia in automatico la foto facendola scorrere in avanti di una posizione in un tempo determinato dalla costante ritardo.
/**/   try { 							//La regolarità dell'evento è garantita dalla funzione setTimeout.
/**/        if (automatico) {
/**/            cambiaFoto(+1);
/**/            setTimeout(cambiaFotoInAutomatico, RITARDO);
/**/       }
/**/    } catch (e) {
/**/        alert('cambiaFotoInAutomatico ' + e);
/**/    }
/**/}

//Contenuti
var galleria = [
    'vespalatosinistro.jpg',
    'vespalatodestro.jpg',
    'vespafrontale.jpg',
    'vespaposteriore.jpg'
]
const RITARDO = 2000;
var indiceFoto;
var numeroFoto;
var automatico;
var nodoAvanti;
var nodoIndietro;
var nodoStartStop;
var nodoFoto;

function gestoreLoad() { //La funzione inizializza le variabili e associa gli elementi HTML con quelli contenuti in JS
    try { 				 //e viene richiamata al caricamento della pagina.
        nodoAvanti = document.getElementById('avanti');
        nodoIndietro = document.getElementById('indietro');
        nodoStartStop = document.getElementById('startStop');
        nodoFoto = document.getElementById('foto');
        nodoAvanti.onclick = gestoreClickAvanti;
        nodoIndietro.onclick = gestoreClickIndietro;
        nodoStartStop.onclick = gestoreClickStartStop;
        nodoStartStop.value = 'Scorri in automatico';
        numeroFoto = galleria.length;
        automatico = false;
        indiceFoto = 0;
        cambiaFoto(0);
    } catch (e) {
        alert('gestoreLoad ' + e);
    }
}
window.onload = gestoreLoad;