const obtenerInfo = async () => {
    const respuesta = await fetch("https://api.github.com/users");
    const respuestaParseada = await respuesta.json();
    return respuestaParseada;
}

const tarjeta = document.querySelector(".container")

obtenerInfo()


    .then(usuarios => renderizarUsuario(usuarios))



const renderizarUsuario = (usuarios) => {

    for (const usuario of usuarios) {
        tarjeta.innerHTML += `<div class="card" style="width: 150px; margin: 15px;">
        <img src="${usuario.avatar_url}" alt="caballito">
            <div class="card-body">
                <h5 class="card-title">${usuario.login}</h5>
                <p class="card-text"><a href="${usuario.repos_url}">Repositorios</a></p>
                <button class="btn btn-primary" id="contacto" onclick="conectarUsuario()">Ver ${usuario.login}</button>
            </div>
    </div>`
    }
}

const contacto = document.querySelector("#contacto")

const conectarUsuario = () => {

    tarjeta.innerHTML = `<div class="card" style="width: 200px; margin: 15px;">
        <img src="" alt="caballito">
            <div class="card-body">
                <h5 class="card-title">Detalles de usuario</h5>
                <p class="card-text">lorem lreoeoreormermelrmeoem</p>
                <a href="#" class="btn btn-primary" id="contacto" onclick="location.reload()">Volver</a>
            </div>
    </div>`
}

