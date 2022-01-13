/**/ //Dalla dispensa pag. 165 (Immagine interattiva scalabile)
/**/function gestoreResize() { //La funzione calcola le nuove coordinate delle aree per rendere cliccabili le parti 
/**/    try { 				   //quando si naviga con uno schermo piccolo in modo da rendere il sito responsive.
/**/        var attualeDimensioneFoto = nodoMotore.width;
/**/        var ratio = attualeDimensioneFoto / dimensioneFoto;
/**/        for (var i = 0; i < nodiArea.length; i++) {
/**/            for (var j = 0; j < coordinateAree[i].length; j++) {
/**/                coordinateAree[i][j] *= ratio;
/**/            }
/**/            nodiArea[i].coords = coordinateAree[i].join(',');
/**/        }
/**/        dimensioneFoto = attualeDimensioneFoto;
/**/    } catch (e) {
/**/        alert("gestoreResize " + e);
/**/    }
/**/}

/**/function gestoreCursore() { //La funzione gestoreCursore fa in modo che il cursore cambi forma quando il mouse passa sopra un'area cliccabile.
/**/    try {
/**/        this.style.cursor = "pointer";
/**/    } catch (e) {
/**/        alert("gestoreCursore " + e);
/**/    }
/**/}

/**/function gestoreClickArea() { //La funzione fa apparire la descrizione relativa all'area cliccata
/**/    try {
/**/        scriviMessaggio(nodoMessaggio, componentiMotore[this.id]);
/**/        scriviMessaggio(nodoDescrizione, descrizioniMotore[this.id]);
/**/    } catch (e) {
/**/        alert("gestoreClickArea " + e);
/**/    }
/**/}

/**/function scriviMessaggio(nodo, messaggio) { //La funzione crea il nodo di testo e inserisce il messaggio desiderato
/**/    var nodoTesto = document.createTextNode(messaggio);
/**/    nodo.replaceChild(nodoTesto, nodo.firstChild);
/**/}

// Contenuti
var componentiMotore = [
    "Albero motore",
    "Filtro aria",
    "Carburatore",
    "Ingranaggi del cambio",
    "Supporto motore",
    "Collettore di aspirazione",
    "Cilindro",
];

var descrizioniMotore = [
    "Questo componente ha il compito di immettere a intervalli regolari la miscela aria/benzina all'interno del cilindro.",
    "Ha il compito di filtrare le impurità (per esempio polvere e acqua) che provengono dall'esterno.",
    "Crea la corretta miscela tra aria e benzina e attraverso lo ''starter'' consente l'avviamento a freddo.",
    "Questi ingranaggi hanno la funzione di trasferire la coppia motrice del motore alle ruote e di cambiare la velocità in base alla marcia.",
    "Si tratta di un blocco fuso al carter che si collega al telaio e consente di mantenere in posizione il motore quando la Vespa è in movimento.",
    "E' il condotto che porta la miscela aria/benzina dal carburatore all'ingresso dell'albero motore.",
    "E' il cuore del motore, al suo interno vi è il pistone che scorrendo all'interno di esso trasforma la miscela aria/benzina in energia meccanica che fa muovere la Vespa.",
];
const LARGHEZZZA_FOTO = 822;
var nodoMotore;
var nodoMessaggio;
var nodoDescrizione;
var nodiArea;
var coordinateAree;
var dimensioneFoto;

function gestoreLoad() { //La funzione al caricamento inizializza le variabili, genera le aree cliccabili e richiama il gestoreResize
    try {
        nodiArea = document.getElementsByTagName("area");
        nodoMotore = document.getElementById("motore");
        nodoMessaggio = document.getElementById("messaggio");
        nodoDescrizione = document.getElementById("descrizione");
        coordinateAree = [];
        for (var i = 0; i < nodiArea.length; i++) {
            var nodoArea = nodiArea[i];
            nodoArea.onclick = gestoreClickArea;
            nodoArea.onmouseover = gestoreCursore;
            coordinateAree[i] = nodoArea.coords.split(',');
        }
        dimensioneFoto = LARGHEZZZA_FOTO;
        var nodoTesto1 = document.createTextNode("");
        nodoMessaggio.appendChild(nodoTesto1);
        var nodoTesto2 = document.createTextNode("");
        nodoDescrizione.appendChild(nodoTesto2);
        window.onresize = gestoreResize;
        gestoreResize();
    } catch (e) {
        alert("gestoreLoad " + e);
    }
}
window.onload = gestoreLoad;