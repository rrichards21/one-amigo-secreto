let amigos = [];

function agregarAmigo() {
    const amigo = document.getElementById("amigo").value;
    if (amigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    amigos.push(amigo);
    document.getElementById("amigo").value = "";
    actualizarLista();
}

function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("Debe haber al menos uno o más amigos para realizar el sorteo.");
        return;
    }
    const indice_ganador = Math.floor(Math.random() * amigos.length);
    const amigo_ganador = amigos[indice_ganador];

    document.getElementById("resultado").innerHTML = "El ganador es: " + amigo_ganador;
}