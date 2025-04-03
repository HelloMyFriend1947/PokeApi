async function conexionLista() {
    const res = await fetch()
    const data = await res.json()
    return data.results;
}

async function General() {
    const infoPokes = await conexionLista();
    mostrarLista(infoPokes)
}