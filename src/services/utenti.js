export async function get(filtri) {
    let urlUtenti = "https://my-json-server.typicode.com/andreagaspari/zav-react-25/utenti"
    
    /* 
    Converti Oggetto in Array di coppie (chiave, valore), 
    filtralo per value non nullo o vuoto,
    riconverti l'array in oggetto
    */
    let cleanedParams = Object.fromEntries(Object.entries(filtri).filter(([_, value]) => value != null && value != ''))

    let searchParams = new URLSearchParams(cleanedParams).toString();
    urlUtenti += "?" + searchParams;

    let listaUtenti = await fetch(urlUtenti);
    
    if (!listaUtenti.ok) {
        throw new Error("Errore del server");
    }

    return await listaUtenti.json();
}