export async function get(filtri) {
    let urlAuto = "https://my-json-server.typicode.com/andreagaspari/zav-react-25/automobili"
    
    /* 
    Converti Oggetto in Array di coppie (chiave, valore), 
    filtralo per value non nullo o vuoto,
    riconverti l'array in oggetto
    */
    let cleanedParams = Object.fromEntries(Object.entries(filtri).filter(([_, value]) => value != null && value != ''))
    
    /*
        console.log("Oggetto:", filtri);
        let arrayFiltri = Object.entries(filtri);
        console.log("Array: ", arrayFiltri)

        let arrayFiltriFiltrato = arrayFiltri.filter(([key, value]) => (value != null && value != ''))
        console.log("Array filtrato: ", arrayFiltriFiltrato);

        let filtriPuliti = Object.fromEntries(arrayFiltriFiltrato);
        console.log("Oggetto filtrato: ", filtriPuliti);
    */

    let searchParams = new URLSearchParams(cleanedParams).toString();
    urlAuto += "?" + searchParams;

    let listaAuto = await fetch(urlAuto);
    
    if (!listaAuto.ok) {
        throw new Error("Errore del server");
    }

    return await listaAuto.json();
}

export async function post(automobile) {
    let urlAuto = "https://my-json-server.typicode.com/andreagaspari/zav-react-25/automobili"

    const resp = await fetch(urlAuto, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(automobile)
    });

    if (!resp.status) {
        throw new Error("Errore del server");
    }

    return await resp.json();
}