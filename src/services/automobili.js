export async function get() {
    let listaAuto = await fetch("https://my-json-server.typicode.com/andreagaspari/zav-react-25/automobili");

    return await listaAuto.json();
}