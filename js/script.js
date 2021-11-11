/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 */

//Nome utente
const userName = prompt('Scrivi il tuo nome');

//Cognome utente
const userSurname = prompt('Scrivi il tuo cognome');

//Colore preferito utente
const userColor = prompt('Scrivi il tuo colore preferito');

//Output
document.getElementById('user-message').innerHTML = 'La tua password poco sicura è:' + userName + userSurname + userColor + 21