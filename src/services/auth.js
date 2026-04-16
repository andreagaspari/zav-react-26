import {get as getUtenti} from './utenti'

export async function login({email, password}) {
    const listaUtenti = await getUtenti({email, password});
    if (listaUtenti.length === 1) {
        localStorage.setItem('authUser', JSON.stringify(listaUtenti[0]));
        return listaUtenti[0];
    } 
    return null;
}

export function logout() {
    localStorage.removeItem('authUser');
}

export function getCurrentUser() {
    const rawUser = localStorage.getItem('authUser');
    return (rawUser) ? JSON.parse(rawUser) : null;
}

export function isAuthenticated() {
    // Il doppio "!!"" converte un valore in booleano (un oggetto vero diventa false e poi diventa true, null diventa true e poi diventa false)
    return !!getCurrentUser()
}