let people = [];

function aggiungiPersona() {
    const nome = document.getElementById("nome").value;
    const cognome = document.getElementById("cognome").value;
    const email = document.getElementById("email").value;
    const dataNascita = document.getElementById("dataNascita").value;
    const telefono = document.getElementById("telefono").value;
    const paese = document.getElementById("paese").value;
    const provincia = document.getElementById("provincia").value;

    
    if (!nome || !cognome || !email || !dataNascita || !telefono || !paese || !provincia) {
        alert("Compila tutti i campi, per favore!");
        return;
    }

    
    if (!validaEmail(email)) {
        alert("Inserisci una email valida!");
        return;
    }

    // Validazione telefono (accetta solo numeri con almeno 8 cifre)
    if (!validaTelefono(telefono)) {
        alert("Inserisci un numero di telefono valido (almeno 8 cifre)!");
        return;
    }

    
    const persona = { nome, cognome, email, dataNascita, telefono, paese, provincia };
    people.push(persona);
    aggiornaTabella();
    document.getElementById("formPersona").reset();
    
    controllaSubmitButton();
}

function aggiornaTabella() {
    const tabella = document.getElementById("tabellaPersone");
    tabella.innerHTML = ""; // Pulisci la tabella

    for (let i = 0; i < people.length; i++) {
        const persona = people[i];
        const riga = `
            <tr>
              <td>${persona.nome}</td>
              <td>${persona.cognome}</td>
              <td>${persona.email}</td>
              <td>${persona.dataNascita}</td>
              <td>${persona.telefono}</td>
              <td>${persona.paese}</td>
              <td>${persona.provincia}</td>
              <td>
                <button onclick="rimuoviPersona(${i})" class="btn btn-error">Rimuovi</button>
              </td>
            </tr>
        `;
        tabella.innerHTML += riga;
    }
}

function rimuoviPersona(index) {
    people.splice(index, 1); // Rimuove la persona dall'array
    aggiornaTabella(); // Aggiorna la tabella
    controllaSubmitButton(); // Controlla se il pulsante submit deve essere disabilitato
}

function controllaSubmitButton() {
    const submitButton = document.getElementById("submitButton");
    
    if (people.length > 0) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

function inviaDati() {
    if (people.length > 0) {
        // Qui puoi anche fare un'operazione di invio reale dei dati, se necessario
        alert("Dati inviati con successo!");
        
        // Redirect verso la pagina di conferma/successo
        window.location.href = "success.html";
    } else {
        alert("Nessuna persona da inviare!");
    }
}

// Funzione per validare email
function validaEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Funzione per validare numero di telefono (almeno 8 cifre)
function validaTelefono(telefono) {
    const regex = /^[0-9]{8,}$/;
    return regex.test(telefono);
}
