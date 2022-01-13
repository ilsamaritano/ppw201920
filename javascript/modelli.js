/**/ //Dalla dispensa pag. 127 (Ricerca con chiavi multiple)
/**/function ricercaMultipla(decennio, anno) { //La funzione scandisce tutte le ricette selezionando quelle i cui attributi modello e decennio sono uguali ai valori dei parametri.
/**/    var modelli = [];
/**/    for (var i = 0; i < contenitoremodelli.length; i++) {
/**/        var modello = contenitoremodelli[i];
/**/        if (modello.decennio == decennio && modello.anno == anno) {
/**/            modelli.push(modello);
/**/        }
/**/    }
/**/    return modelli;
/**/}


/**/function scriviMessaggio(nodo, messaggio) { //La funzione crea il nodo di testo e inserisce il messaggio desiderato
/**/    var nodoTesto = document.createTextNode(messaggio);
/**/    nodo.replaceChild(nodoTesto, nodo.firstChild);
/**/}


/**/function calcolaDescrizioni(modelli) { //La funzione inizializza un array vuoto e inserisce la descrizione e la foto attraverso la funzione inserisciFoto
/**/    var listaDescrizioni = [];
/**/    for (var i = 0; i < modelli.length; i++) {
/**/        var modello = modelli[i];
/**/        listaDescrizioni.push(modello.nome);
			inserisciFoto(modello.foto);
/**/        scriviMessaggio(nodoDescrizione, modello.descrizione);
/**/    }
/**/    return listaDescrizioni;
/**/}



/**/function creaSelect(nodoSelect, opzioni) { //La funzione carica dinamicamente la lista di opzioni selezionabili nei menu a tendina
/**/    rimuoviFigli(nodoSelect);
/**/    for (var opzione in opzioni) {
/**/       var nodoOpzione = document.createElement('option');
/**/        nodoOpzione.value = opzione;
/**/        var nodoTesto = document.createTextNode(opzione);
/**/        nodoOpzione.appendChild(nodoTesto);
/**/       nodoSelect.appendChild(nodoOpzione);
/**/    }
/**/}



/**/function rimuoviFigli(nodo) { //La funzione elimina tutti i nodi di tipo figlio di un determinato nodo.
/**/    while (nodo.childNodes.length > 0) {
/**/        nodo.removeChild(nodo.firstChild);
/**/    }
/**/}


/**/function gestoreDecenni() { //La funzione gestisce l'evento onchange relativo al menu Decenni.
/**/    try {
/**/        var decennio = nodoDecennio.value;
/**/        var insiemedecenni = calcolaDecenni();
/**/        creaSelect(nodoDecennio, insiemedecenni);
/**/       nodoDecennio.value = decennio;
/**/        var insiememodelli = ricercaDecenni(decennio);
/**/        creaSelect(nodoAnno, insiememodelli);
/**/        aggiungiPrimaOpzione(nodoAnno, "--Seleziona--");
/**/    } catch (e) {
/**/        alert("gestoreDecenni " + e);
/**/    }
/**/}



/**/function ricercaDecenni(decennio) { //La funzione scandisce tutti i modelli e restituisce un array con quelle la cui proprietà decenni è uguale al parametro decenni.
/**/    var insiememodelli = {};
/**/   for (var i = 0; i < contenitoremodelli.length; i++) {
/**/        var modello = contenitoremodelli[i];
/**/        if (modello.decennio == decennio) {
/**/            insiememodelli[modello.anno] = true;
/**/        }
/**/    }
/**/    return insiememodelli;
/**/}


/**/function aggiungiPrimaOpzione(nodoSelect, opzione) { //La funzione fa apparire --Seleziona-- come prima opzione nei due menu di selezione
/**/    var nodoOpzione = document.createElement("option");
/**/    nodoOpzione.value = opzione;
/**/    var nodoTesto = document.createTextNode(opzione);
/**/    nodoOpzione.appendChild(nodoTesto);
/**/    nodoSelect.insertBefore(nodoOpzione, nodoSelect.firstChild);
/**/    nodoSelect.value = opzione;
/**/}



/**/function gestoreAnni() { //La funzione costruisce il menu di selezione relativo agli anni dei modelli con le caratteristiche corrispondenti.
/**/    try {
/**/        var decennio = nodoDecennio.value;
/**/        var anno = Number(nodoAnno.value);
/**/        var insiememodelli = ricercaDecenni(decennio);
/**/        creaSelect(nodoAnno, insiememodelli);
/**/        nodoAnno.value = anno;
/**/        var modelli = ricercaMultipla(decennio, anno);
/**/        var listaDescrizioni = calcolaDescrizioni(modelli);
/**/        scriviMessaggio(nodoRisultato, listaDescrizioni);
/**/    } catch (e) {
/**/        alert("gestoreAnni " + e);
/**/    }
/**/}

function inserisciFoto(foto) { //La funzione crea l'elemento input di tipo immagine e fa apparire la foto insieme alla rispettiva descrizione.
    var idfoto = foto;		   //Inoltre inserisce l'attributo alt in modo da migliorare l'accessibilità.
    try {
        var nodoInput1 = document.createElement("input");
        nodoInput1.src = idfoto;
        nodoInput1.type = "image";
		nodoInput1.alt = "Foto del modello visto lateralmente";
        nodoFoto.appendChild(nodoInput1);
        nodoFoto.replaceChild(nodoInput1, nodoFoto.firstChild);
    } catch (e) {
        alert('inserisciFoto ' + e);
    }
}

/**/function calcolaDecenni() { //La funzione scandisce tutti i modelli e restituisce un array con quelle la cui proprietà anno è uguale al parametro anno.
/**/    var insiemedecenni = {};
/**/    for (var i = 0; i < contenitoremodelli.length; i++) {
/**/        var modello = contenitoremodelli[i];
/**/        insiemedecenni[modello.decennio] = true;
/**/    }
/**/    return insiemedecenni;
/**/}


//Contenuti
var contenitoremodelli = [{
        decennio: 'Anni 40',
        nome: 'MP5 Paperino',
        anno: 1944,
        foto: './picmodelli/modello1.png',
        descrizione: 'Ci troviamo nel periodo post Prima guerra mondiale, dopo che nel 1943 lo stabilimento di Pontedera venne occupato dall’esercito tedesco. Si tratta del primo modello sviluppato dalla Piaggio, nato nella primavera del 1944 e successivamente prodotto nel 1945. Enrico Piaggio sviluppò questo modello per dare la possibilità a tutti di avere un mezzo individuale che fosse economico ed affidabile. Il nome era originariamente MP (Moto Piaggio) e si delineò in due varianti progettuali MP1 e MP5. L’esemplare esposto al Museo (numero di telaio MP5-0510) monta un motore con cambio graduale automatico, mentre l’unico altro esemplare conosciuto (telaio MP5-0554) sfrutta un cambio manuale a due velocità. Questo è il solo modello di Vespa a montare il motore centrale, successivamente spostato al lato destro posteriore per motivi pratici e di ingombro della pedana centrale.'
    },
    {
        decennio: 'Anni 40',
        nome: 'Vespa Sperimentale MP6',
        anno: 1945,
        foto: './picmodelli/modello2.png',
        descrizione: 'Nel modello MP6 venne soppresso il motore centrale e la catena che trasmetteva il moto alla ruota posteriore a favore del blocco unico cambio-motore molto più pratico e che troviamo sulle Vespa più recenti. Questa soluzione è stata mantenuta fino all’ultimo modello prodotto ed è stata ereditata dai moderni scooter. Questo modello adottò una forcella a sbalzo che consentiva di sostituire velocemente lo pneumatico in caso di foratura, anche in questo caso la soluzione ottenuta è stata mantenuta fino alla fine della produzione ma non è stata ereditata dai moderni scooter, in favore di una forcella doppia. Venne introdotto il cambio al manubrio che consentiva al guidatore di usare frizione e cambiare le marce simultaneamente.'
    },
    {
        decennio: 'Anni 40',
        nome: 'Vespa 98 (MP6)',
        anno: 1946,
        foto: './picmodelli/modello3.png',
        descrizione: 'In questo particolare periodo la Piaggio non possedeva sufficienti presse idrauliche per costruire dei modelli in serie, così si affidò alla Alfa Romeo. Attraverso questa collaborazione nel 1946 vennero prodotti 5000 esemplari del veicolo. Alcuni modelli (137) possedevano il motore 125cc, mentre altri possedevano il 98cc. Vennero ideati questi due motori di cilindrate diverse per consentire la vendita anche all’estero, dove vi erano leggi differenti e la cubatura superiore non era tassata così come in Italia. Venne prodotta in due versioni differenti: Lusso e Normale, al rispettivo prezzo di 61 mila lire e 55 mila lire. Nella sezione curiosità puoi trovare il concept realizzato nel 2020 di questo modello.'
    },
    {
        decennio: 'Anni 40',
        nome: 'Vespa 125',
        anno: 1949,
        foto: "./picmodelli/modello4.png",
        descrizione: 'Questo modello venne commercializzato nel 1949, totalmente rinnovato. Possedeva un nuovo assetto con forcella elicoidale (precedentemente vi erano due molle a spirale), posteriormente la soluzione con tampone in gomma fu sostituita da un sistema composto da molla e ammortizzatore idraulico. La potenza del motore raggiungeva i 4 cavalli e faceva raggiungere i 70 km/h. Negli anni successivi venne rinnovata in base alle esigenze dei consumatori, infatti venne introdotto il bloccasterzo a chiave che contrastava i furti e un nuovo cavalletto centrale rinforzato e dunque più stabile. Venne migliorato anche il sistema di raffreddamento (in tutte le Vespa è ad aria), infatti vennero aggiunte delle alette parallele (soluzione che si è mantenuta nel tempo) che miglioravano la dispersione del calore. Già in questo modello troviamo il cambio Teleflex (che si è tramandato fino al termine della produzione) che sostituiva il cambio a bacchetta.'
    },
    {
        decennio: 'Anni 50',
        nome: 'Vespa 125 MOD.51',
        anno: 1951,
        foto: "./picmodelli/modello5.png",
        descrizione: 'Nasce nel dicembre 1950, si tratta di un modello tecnicamente nuovissimo. Venne cambiato il sistema di trasmissione in favore della trasmissione a cavi Bowden, che garantiva un innesto molto preciso delle marce. Nel manubrio erano installati dei silent block che smorzavano vibrazioni e cigolii prodotti dal motore. Venne rinnovata anche esteticamente, la marmitta venne ridotta di dimensioni e inglobata nel telaio. La pedana venne allungata e il serbatoio venne reso più affidabile attraverso l’adozione di un sistema a rotazione. Venne abbandonata la ditta Alfa Romeo in favore dei lamierati della ditta Budd di Philadelphia. Il prezzo era di 150 mila lire. Qui nacque il sistema di propaganda di Piaggio attraverso manifesti e oggetti con grafiche Vespa che oggi sono il fiore all’occhiello dei collezionisti.'
    },
    {
        decennio: 'Anni 50',
        nome: 'Vespa 125 U',
        anno: 1952,
        foto: "./picmodelli/modello6.png",
        descrizione: 'Si tratta di un modello di Vespa economica, infatti il prezzo era di sole 130 mila lire, 20 mila in meno rispetto al modello da cui deriva. La Vespa U non fu il primo modello utilitario costruito da Piaggio: già nel 1946 esisteva infatti in listino la Vespa Normale, venduta a un prezzo ribassato del 10%; dal 1951, inoltre, Piaggio costruì un ulteriore modello economico, destinato al mercato americano (Vespa Allstate), di cui la nuova U (Utilitaria) ereditò la tinta e il faro applicato sul manubrio. Per ridurre il costo vennero tolte le cromature, i listelli cromati della pedana, il sistema antifurto e il sistema di ammortizzazione anteriore. La Vespa “Ut” fu presentata il 7 dicembre 1952 all’Hotel Gallia di Milano, a una riunione estesa a tutti i concessionari d’Italia, dove fu addirittura sottoposta al rito marinaro della rottura della bottiglia di spumante. Venne prodotta in 6000 esemplari e venne esportata in 27 paesi stranieri. Un grosso quantitativo rimase a magazzino in fabbrica fino al settembre del 1955 e le ultime due furono addirittura esportate il 28 dicembre 1961 in Portogallo. Poco apprezzata ieri, rimane oggi per la sua rarità un modello particolarmente ricercato dai collezionisti.'
    },
    {
        decennio: 'Anni 50',
        nome: 'Vespa 125 MOD.53',
        anno: 1953,
        foto: "./picmodelli/modello7.png",
        descrizione: 'Come riportato nella sigla del modello di questa Vespa, si tratta di una versione migliorata e rinnovata del mod.51 prodotta dal mese di novembre 1953. Per garantire una miglior visibilità, nel nuovo modello il faro fu maggiorato a 105 mm, mentre il cofano motore assunse uno sviluppo esteso e continuo, interrotto solo dalla persiana di presa d’aria. Per un miglioramento estetico parte dei comandi passarono all’interno del manubrio e, per una maggior autonomia, il serbatoio fu reso più capiente. Il motore fu rinnovato in favore di quello a luci incrociate (luci di aspirazione e scarico) che garantiva maggiori prestazioni (anche se di solo un cavallo vapore) e consumi ridotti (parametro fondamentale per un modello prodotto in serie). Il motore, definito anche tipo “quadro” per l’adozione di corsa e alesaggio uguali (pari a 54 mm), era anche dotato di un albero con spalle a volano in grado di ridurre il volume del carter pompa e di migliorare quindi il rendimento volumetrico. La frizione fu irrobustita mediante l’introduzione di un doppio disco e fu anche migliorato il circuito di raffreddamento per garantire una tenuta del motore anche nelle peggiori condizioni di marcia. Il 1953 fu un anno importante per la Piaggio: nel mese di ottobre fu infatti festeggiata la costruzione della cinquecentomillesima Vespa, un traguardo festeggiato in Stabilimento alla presenza di autorità e delegazioni straniere.'
    },
    {
        decennio: 'Anni 50',
        nome: 'Vespa 150 Sidecar (VL2T)',
        anno: 1954,
        foto: "./picmodelli/modello8.png",
        descrizione: 'Si tratta di un modello particolare di Vespa, l’unica prodotta in stile sidecar. Le linee estetiche erano simili alla Vespa prodotta senza la carrozzina. Venne sviluppata a partire dal 1948 per arrivare alla produzione nel 1954. Il molleggio della scocca era affidato a due molle coniche; un ulteriore comfort per il passeggero era poi garantito da un soffice cuscino su molle. Dietro allo schienale ribaltabile, nella coda del carrozzino, si apriva uno spazio con funzione di porta bagagli, mentre sul parafango un elegante fanalino biluce garantiva visibilità nella guida notturna. Il montaggio del carrozzino avveniva in fabbrica o più spesso, in concessionario. I rapporti del cambio erano specificamente ridotti (soprattutto seconda e terza marcia) a fronte del peso maggiore del telaio e soprattutto contando che il motore doveva sopportare il peso di tre persone contemporaneamente. Questa versione, impreziosita da un paraurti posteriore, da una copertura della molla e da un profilo di abbellimento sul frontale, viene oggi spesso definita anche tipo “lusso”.'
    },
    {
        decennio: 'Anni 50',
        nome: 'Vespa GS Preserie (VS1T)',
        anno: 1955,
        foto: "./picmodelli/modello9.png",
        descrizione: 'La 150 GS è la prima Vespa con caratteristiche sportive a essere prodotta in grande serie, frutto delle esperienze maturate nelle competizioni dalla squadra corse Piaggio. Il motore, caratterizzato da alcune soluzioni tecniche sperimentate sulla Vespa Sei Giorni, ha l’immissione diretta nel cilindro ed è capace di 8 CV a 7.500 giri. Il cambio a quattro marce, la sella allungata e le grandi ruote da dieci pollici modificano sostanzialmente la linea di Vespa, che si scopre veicolo grintoso e capace di prestazioni “mozzafiato”. Si tratta dunque di una pietra miliare nella storia degli scooter: le sue caratteristiche tecniche ed estetiche la rendono infatti così affascinante da farla definire lo scooter più bello mai prodotto al mondo. Per queste ragioni essa è ancora oggi una delle più ricercate e amate dai collezionisti.'
    },
    {
        decennio: 'Anni 50',
        nome: 'Vespa 150 "Struzzo" (VL3T)',
        anno: 1956,
        foto: "./picmodelli/modello10.png",
        descrizione: 'Alla fine del 1954, oltre al modello 125 e 150 GS, fu introdotta in serie anche un’altra versione con cilindrata 150 cc, che pur adottando la stessa cubatura della GS aveva però una vocazione meno sportiva. In quel periodo, quindi, per la prima volta Piaggio metteva in listino la Vespa in tre diverse versioni, con prezzi variabili dalle 128.000 lire per la 125, 148.000 per la 150 e 178.000 per la GS. Questo modello possedeva il contachilometri e la ruota di scorta che era posizionata dietro lo scudo (tale soluzione sarà adottata anche in altri modelli). Il motore 150cc di tipo rettangolare era stato precedentemente usato nell’Ape, ma venne scartato in favore di un motore di tipo "quadro" che era molto più fluido e regolare nelle fasi. Per evitare poi lo scampanellio del motore a freddo, il pistone fu inferiormente allungato di 3 mm e provvisto alla base di ponticelli, in modo da ridurre la possibile deformazione del manto.  Il 28 aprile 1956, nel vivo della costruzione di questo modello a Pontedera veniva festeggiata la milionesima Vespa costruita, un traguardo frutto di un successo irripetibile.'
    },
    {
        decennio: 'Anni 50',
        nome: 'Vespa 150 T.A.P.',
        anno: 1957,
        foto: "./picmodelli/modello11.png",
        descrizione: 'Negli anni Cinquanta, il Ministero della Difesa Francese commissionò alla licenziataria Piaggio in Francia (A.C.M.A.) la costruzione della prima Vespa utilizzata per scopi militari, prodotta in 600 esemplari dal 1956 al 1959 in due colorazioni mimetiche, verde e sabbia. Sono i tempi della guerra in Indocina e si pensa di utilizzare come veicolo tattico leggero la Vespa, ormai conosciuta anche in Francia come mezzo agile e robusto. In dotazione alla Legione Straniera e al corpo dei Paracadutisti, la Vespa T.A.P. poteva essere paracadutata ed era dotata di 1 cannone (senza rinculo da 75 mm, prodotto in U.S.A. e utilizzato da tutte le truppe del Patto Atlantico), 6 munizioni, 2 taniche per il carburante ed un piccolo carrello. Nonostante il peso di 115 kg, si tratta di una Vespa comunque maneggevole, che poteva raggiungere la velocità di 66 km/h con un’autonomia di circa 200 km. Il motore è un 150 e ha le stesse caratteristiche della Vespa VL3, con il telaio rinforzato da un tubo che, circondando lo scudo anteriore, crea un anello circolare nella parte posteriore, fungendo così da paraurti ma anche da supporto ai porta munizioni laterali. Il manubrio, verniciato, ha un fanale di grandi dimensioni e registrabile, protetto da una griglia parasassi, con l’interruttore dei fari anch’esso protetto nella parte superiore.'
    },
    {
        decennio: 'Anni 50',
        nome: 'Vespa 400',
        anno: 1958,
        foto: "./picmodelli/modello12.png",
        descrizione: 'Ebbene sì, nei modelli della Vespa troviamo anche un modello a quattro ruote. Dopo il modello con tre ruote (Sidecar) si passò alla produzione di un autoveicolo con sempre lo stesso obiettivo Piaggio: produrre un mezzo economico. Il motore era un due tempi di 400 centimetri cubici e la carrozzeria era pulita ed essenziale. Debutta solo quattro mesi prima del lancio della nuova FIAT 500. Venne prodotta in Francia, infatti in Italia arrivarono circa cento modelli. L’azienda nel 1961 decise di abbandonare la produzione di veicoli a quattro ruote per l’eventuale concorrenza che si sarebbe formata e decise di continuare a produrre modelli a due ruote.'
    },
    {
        decennio: 'Anni 50',
        nome: 'Vespa 150 (VBA1T)',
        anno: 1959,
        foto: "./picmodelli/modello13.png",
        descrizione: 'La Vespa 150 modifica la meccanica, passa alla distribuzione rotante che successivamente sarà ereditata dalla 125. Questo consente di utilizzare la miscela benzina-olio al 2%. il carburatore è alloggiato sul carter anziché sul cilindro come sulla prima serie della 150 GS. La luce di immissione ricavata sul carter è regolata a ogni rotazione dall’apertura e dalla chiusura del contrappeso sinistro dell’albero motore. I vantaggi che ne derivano sono apprezzati dagli utenti: migliore fluidità nell’erogazione della potenza, minori depositi carboniosi e costi di esercizio più contenuti.'
    },
    {
        decennio: 'Anni 60',
        nome: 'Vespa GS (VS5T)',
        anno: 1960,
        foto: "./picmodelli/modello14.png",
        descrizione: 'La terza serie della GS si riconosce per la nuova forma del cerchione, che mette in vista l’estesa alettatura dei freni a tamburo. I prigionieri di fissaggio sono 5 anziché 4. Il contachilometri incorporato nel manubrio ha un nuovo design con scala fino a 120 Km/h. il fregio sulla parte superiore del parafango è più sottile e profilato. Il parafango anteriore ha un bordino di rinforzo. Nella prima versione il fanalino posteriore rimane identico a quelli delle serie precedenti, poi ne viene montato in altro un altro di maggiori dimensioni e con il corpo cromato. Lo scudetto sul frontale è in plastica anziché in metallo. Gli ultimi esemplari hanno la punzonatura del telaio posizionata sotto la sacca porta attrezzi posta sul lato posteriore sinistro.'
    },
    {
        decennio: 'Anni 60',
        nome: 'Vespa 50 N',
        anno: 1962,
        foto: "./picmodelli/modello15.png",
        descrizione: 'Questo modello non aveva un’elevata potenza specifica: solo 1.5 cavalli, ciò nonostante, fu l’ancora di salvezza per la Piaggio che, incontrando un brusco calo di vendite alla metà degli anni 60, fronteggiò il mercato attraverso il lancio di questo modello rivolto ai giovani, che potevano guidarla senza patente e non aveva bisogno di essere immatricolata. Veniva proposta con colori vivaci, apprezzati dai più giovani. Era gradita anche dalle donne visto che la scocca era di dimensioni ridotte. Fu la prima Vespa “small frame” (sono definite così le vespe che hanno un telaio piccolo, motore solitamente 50cc o 90cc e le scocche laterali ancorate al telaio) con cambio a tre marce e fanale tondo. Il contachilometri era un optional. Passa alla storia come “Vespino” date le sue dimensioni ridotte ed ebbe un grandissimo successo.'
    },
    {
        decennio: 'Anni 60',
        nome: 'Vespa 90 (V9A1T)',
        anno: 1963,
        foto: "./picmodelli/modello16.png",
        descrizione: 'La Vespa 90 fu presentata nel 1963, mantiene la maggior parte dei componenti e delle caratteristiche della 50 N: i particolari che la distinguono sono le ruote di maggiori dimensioni e un impianto elettrico più potente. Lo scudo presenta un bordo in alluminio, e la scritta Vespa è di colore blu scuro, così come la sella. Venduta in un’unica colorazione (celeste), fu prodotta in soli 24.000 esemplari. Il veicolo, che in ragione della sua cilindrata era targato, fu molto apprezzato per il basso costo di acquisto, i consumi ridotti, la linea affilata e snella, e per le prestazioni adatte a trasportare anche un secondo passeggero.'
    },
    {
        decennio: 'Anni 60',
        nome: 'Vespa 180 Super Sport (VSC1T)',
        anno: 1964,
        foto: "./picmodelli/modello17.png",
        descrizione: 'Nonostante l’anno si tratta di uno dei modelli più veloci della Piaggio, riusciva a raggiungere i 105 km/h. La linea fu arricchita con alcuni dettagli della GL (come il faro trapezoidale). Con la 180 SS viene utilizzata per l’ultima volta l’aspirazione controllata dal pistone, che nel modello successivo – la 180 Rally – passerà al sistema con valvola rotante.'
    },
    {
        decennio: 'Anni 60',
        nome: 'Vespa 90 SS Super Sprint (V9SS1T)',
        anno: 1966,
        foto: "./picmodelli/modello18.png",
        descrizione: 'E’ uno dei modelli più rari della Piaggio, nonostante sia stata costruita in serie per 6 anni, dal 1965 al 1971, è stata prodotta in soli 5000 esemplari circa. Era la Vespa più sportiva degli anni 60, infatti avendo un motore dalla cubatura relativamente grande rispetto al telaio piccolo e leggero (un motore 90cc su un telaio small frame così leggero ha un rapporto peso potenza molto favorevole) le garantivano notevoli prestazioni. Anche esteticamente è molto gradevole, infatti è l’unica Vespa a montare la ruota di scorta in tale posizione con alla sommità un porta oggetti. Data la sua aria sportiva possedeva un cuscinetto poggiapetto come nelle moto da competizione.'
    },
    {
        decennio: 'Anni 60',
        nome: 'Vespa 125 Primavera (VMA2T)',
        anno: 1967,
        foto: "./picmodelli/modello19.png",
        descrizione: 'La 125 Primavera, fin dalla sua comparsa sul mercato, ottiene un grandissimo successo, soprattutto tra i giovani, che ne fanno un vero e proprio oggetto del desiderio. È infatti perfetto per i ragazzi, che ne apprezzano la grande maneggevolezza e lo scatto in partenza, mentre le ragazze gradiscono in modo particolare le dimensioni contenute e l’eleganza della linea. Rispetto alla Nuova 125, da cui deriva, si riconosce per il gancio davanti alla sella ma soprattutto per il propulsore più potente, che consente un incremento di 10Km/h e un’accelerazione assai brillante. La buona riuscita del modello è testimoniata dalla sua lunga permanenza in listino (15 anni!).'
    },
    {
        decennio: 'Anni 60',
        nome: 'Vespa 180 Rally (VSD1T)',
        anno: 1968,
        foto: "./picmodelli/modello20.png",
        descrizione: 'Questo modello sostituì la Vespa 180 Super Sport del 1964, prendendo spunto da essa e migliorando in motore e carrozzeria. Venne adottato un faro tondo più grande per garantire una maggiore luminosità e il “sellone” allungato che migliorava il confort. Il bauletto dietro lo scudo (caratteristica essenziale delle large-frame) venne rivisto nel design. Le schocche laterali vennero modernizzate e vennero rimosse le modanature. Per salvaguardare l’impianto elettrico vennero aggiunte le guarnizioni nere che permettevano di proteggere la componentistica da polvere e acqua delle moderne idropulitrici. Da questo momento le manopole diventarono nere di serie su tutti i modelli. I primi modelli hanno il fanalino posteriore cromato, che in seguito diventa squadrato e con coperchio nero. Fu prodotta tra il 1968 e il 1973 in oltre 26.000 esemplari.'
    },
    {
        decennio: 'Anni 60',
        nome: 'Vespa 50 N',
        anno: 1969,
        foto: "./picmodelli/modello21.png",
        descrizione: 'Si tratta di una versione modernizzata della Vespa 50 N del 1963, di cui eredita molte caratteristiche e presenta nuovi colori e vari particolari modificati tra cui il nuovo logo esagonale Piaggio (che fu introdotto due anni prima) e la targhetta Vespa in colorazione nera. Esiste una variante con telaio allungato dello stesso modello. A mio parere uno dei più belli prodotti dalla Piaggio.'
    },
    {
        decennio: 'Anni 70',
        nome: 'Vespa 50 Pedali (V5A1T)',
        anno: 1970,
        foto: "./picmodelli/modello22.png",
        descrizione: 'Si tratta di un modello particolare, che subì una trasformazione ben visibile per essere esportata e commercializzata in Francia, infatti le normative di omologazione dovevano prevedere i pedali (e Piaggio lo fece nello stile del Piaggio Ciao e successivamente ereditati dal Piaggio Si). È molto ricercata dai collezionisti e in Italia se ne ritrovano pochissimi modelli a prezzi molto elevati.'
    },
    {
        decennio: 'Anni 70',
        nome: 'Vespa 50 Special (V5A2T)',
        anno: 1971,
        foto: "./picmodelli/modello23.png",
        descrizione: 'Questa sezione è leggermente diversa dalle altre, infatti si tratta di un modello che ebbe una grandissima fortuna, infatti venne prodotta per 13 anni di fila. Si tratta, inoltre, dei uno dei modelli a cui sono più affezionato emotivamente, infatti ho restaurato un modello come questa la cui storia si trova nella sezione “About Me”.  Il mio modello è della prima serie del 1971 come quella in foto che era caratterizzata da scritte identificative in corsivo posizionate in obliquo (Vespa 50 davanti, rispettivamente sopra e sotto, e Special dietro, sopra il fanale), nasello davanti e copristop in plastica grigia, ruote da 9" con quattro dadi di fissaggio e cambio a tre velocità. Nella seconda serie le ruote aumentano di raggio, infatti passano a 10” e gomma leggermente più larga, anche il cavalletto aumentò di dimensioni passando da 16mm a 20mm per essere più resistente e stabile. Anche le scritte cambiarono e diventarono non più oblique ma parallele all’asfalto. L’ultima serie viene modificata con il cambio che diventa a quattro marce e il telaio viene rinforzato. Tutte le 50 Special montavano la sella con la “gobba” che da molti venne sostituita con quella allungata. Spesso subivano molte modifiche come marmitta e motori potenziati. Il modello che ho restaurato personalmente riporta tutte le caratteristiche originali. Stranamente nel Museo Piaggio online questo modello non è presente.'
    },
    {
        decennio: 'Anni 70',
        nome: 'Vespa 50 R (V5A1T)',
        anno: 1972,
        foto: "./picmodelli/modello24.png",
        descrizione: 'La versione “R” della Vespa 50 rappresenta il modello più economico della serie, riconoscibile dalle altre per le ruote da 9” e per il copristerzo verniciato in tinta con la carrozzeria. Il cambio è a tre velocità. Questa 50 è particolarmente apprezzata dal pubblico dei quattordicenni, perché sembra soddisfare a pieno il diffuso desiderio di libertà, anche grazie all’eccellente rapporto qualità-prezzo. Esteticamente e meccanicamente è molto simile alla 50 Special.'
    },
    {
        decennio: 'Anni 70',
        nome: 'Vespa 50 Special Elestart (V5A3T)',
        anno: 1973,
        foto: "./picmodelli/modello25.png",
        descrizione: 'Si tratta del modello che eredita tutte le caratteristiche di telaio e motore della 50 Special ma con l’accensione elettronica. Per maggiori dettagli vedi la sezione della Vespa 50 Special del 1971'
    },
    {
        decennio: 'Anni 70',
        nome: 'Vespa ET3 Primavera (VMB1T)',
        anno: 1976,
        foto: "./picmodelli/modello26.png",
        descrizione: 'Si tratta di una versione sportiva della Vespa 125 Primavera (1967). La sigla ET3 indica l’accensione elettronica e il motore dotato di un cilindro con il terzo travaso. Grazie a un propulsore di maggiore potenza e alla nuova marmitta, le prestazioni risultano più elevate. Le dimensioni ridotte, simili a quelle della Vespa 50, favoriscono un’elevata manovrabilità, che la rende uno dei modelli più desiderati dai giovani negli anni Settanta. L’estetica richiama in alcuni particolari (i fregi sul parafango anteriore e sui cofani laterali) lo stile della 200 Rally. I primi esemplari montavano una sella in plastica color blue jeans. Il modello in foto è blu pastello con le scritte “electronic” in un color azzurro chiaro; personalmente la trovo fantastica.'
    },
    {
        decennio: 'Anni 70',
        nome: 'Vespa Rally 200 (VSD1T)',
        anno: 1977,
        foto: "./picmodelli/modello27.png",
        descrizione: 'Si tratta del primo modello della Piaggio con motore da 200cc, in origine aveva 12 cavalli che le facevano raggiungere 110 km/h. Anche in questo modello troviamo la scritta “electronic” (che la distingueva dalle Vespa a puntine) di colore bianco. La maggior parte degli esemplari (41700) hanno la colorazione rossa come quella in foto.'
    },
    {
        decennio: 'Anni 70',
        nome: 'Vespa PX (VNX1T - VNX2T)',
        anno: 1978,
        foto: "./picmodelli/modello28.png",
        descrizione: 'Si tratta del modello più longevo della Piaggio, prodotto dal 1978 al 2011 nelle varie versioni con varie cilindrate (125cc, 150cc e 200cc) e nella versione X (con accensione a puntine) e in versione E (con bobina di accensione) disponibile dal 1981. Era molto parca nei consumi, infatti con un litro di miscela al 2% faceva fino a 30 km. Nel 1984 venne aggiunta l’accensione elettronica e il miscelatore automatico, che consentiva di aggiungere olio automaticamente nel carburatore potendo così rifornirsi solo di benzina verde. Successivamente venne aggiunto il catalizzatore che le consentì di raggiungere l’omologazione euro 3. Fu copiata anche dal produttore indiano LML che realizzò un modello identico in tutto e per tutto alla PX, sia in versione 2 tempi che 4 tempi. Quest’ultimo modello non è presente sul sito del Museo Piaggio.'
    },
    {
        decennio: 'Anni 80',
        nome: 'Vespa PK S Automatica Elestart (VVM1T)',
        anno: 1984,
        foto: "./picmodelli/modello29.png",
        descrizione: 'Si tratta di un modello molto particolare, dotato di accensione elettronica (elestart) e dotata di variatore (automatica), ciò significa che il cambio ha solo due posizioni: N (neutral) e D (drive). Sparisce la frizione che è centrifuga e viene rimpiazzata dal freno posteriore (in tutti i modelli con cambio manuale era a pedale)'
    },
	{
        decennio: 'Anni 80',
        nome: 'Vespa PK ETS 125 (VMS1T)',
        anno: 1985,
        foto: "./picmodelli/modello30.png",
        descrizione: 'Si tratta di una versione sportiva della Vespa 125 PK, come la ET3 lo era stata della Primavera. Il copriventola diventa di colore nero per far risaltare la “sportività” del nuovo modello, subiscono lo stesso trattamento anche i fregi posti sul parafango e sui gusci laterali. Le linee sono più spigolose rispetto ai modelli precendenti. Viene montata per la prima volta di serie una marmitta ad espansione con forma a siluro, migliorava la ripresa e aumentava le prestazioni in allungo. Per quanto riguarda la meccanica, l’albero motore è irrobustito, la luce di ammissione ampliata; migliorati anche il condotto di aspirazione e il carburatore. nella nuova ciclistica va segnalata la frenata migliorata grazie alle nuove camme flottanti e il dispositivo antiaffondamento della sospensione anteriore.'
	},
    {
        decennio: 'Anni 80',
        nome: 'Vespa 50 S Estero (V5SA1T)',
        anno: 1986,
        foto: "./picmodelli/modello31.png",
        descrizione: 'Questa è la versione della Vespa 50 Special da cui eredita meccanica ed estetica. A differenza della versione italiana raggiungeva i 60 km/h, infatti in Germania la legislazione era differente e consentiva velocità maggiori. In Italia fu commercializzata ma a causa della velocità maggiore necessitava di essere targata. Il motore era lo stesso 50 ma con carburatore maggiorato che consentiva di aumentare le prestazioni.'
    }
];

var nodoDecennio;
var nodoAnno;
var nodoMessaggio;
var nodoDescrizione;
var nodoFoto;
function gestoreLoad() { //La funzione inizializza le variabili e i contenuti e associa i nodi del testo HTML con quelli contenuti in JS.
    try { 				 //Inoltre crea la lista delle descrizioni in maniera dinamica e richiama le rispettive funzioni.
        nodoDecennio = document.getElementById('decennio');
        nodoAnno = document.getElementById('anno');
        nodoRisultato = document.getElementById('messaggio');
        nodoDescrizione = document.getElementById('descrizione');
        nodoMessaggio = document.getElementById('messaggio');
        var nodoTesto1 = document.createTextNode("");
        nodoMessaggio.appendChild(nodoTesto1);
        var nodoTesto2 = document.createTextNode("");
        nodoDescrizione.appendChild(nodoTesto2);
        nodoFoto = document.getElementById('foto');
        var insiemedecenni = calcolaDecenni();
        creaSelect(nodoDecennio, insiemedecenni);
        aggiungiPrimaOpzione(nodoDecennio, "--Seleziona--");
        aggiungiPrimaOpzione(nodoAnno, "--Seleziona--");
        nodoDecennio.onchange = gestoreDecenni;
        nodoAnno.onchange = gestoreAnni;
    } catch (e) {
        alert('gestoreLoad ' + e);
    }
}
window.onload = gestoreLoad;