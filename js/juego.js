const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')
sectionReiniciar.style.display = 'none'

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let mokepones = []
let ataqueJugador =[]
let ataqueEnemigo = []
let opcionDeMokepones
let inputSheldon
let inputLeonard
let inputHoward
let inputRajesh
let inputBernadette
let inputPenny
let inputAmy
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let botonPiedra
let botonPapel
let botonTijeras
let botonLagarto
let botonSpock
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0 
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.x = 20
        this.y = 30
        this.ancho = 80
        this.alto = 80
        this.mapaFoto = new Image ()
        this.mapaFoto.src = foto
    }
}
/**
 * Chicos Fotos
 */
let sheldon = new Mokepon('Sheldon', './imagenes/sheldon.png', 5);
let leonard = new Mokepon('Leonard', './imagenes/leonard.png', 5);
let howard = new Mokepon('Howard', './imagenes/howard.png', 5);
let rajesh = new Mokepon('Rajesh', './imagenes/rajesh.png', 5);
/**
 * Chicas Fotos
 */
let bernadette = new Mokepon('Bernadette', './imagenes/bernadette.png', 5);
let penny = new Mokepon('Penny', './imagenes/penny.png', 5);
let amy = new Mokepon('Amy', './imagenes/amy.png', 5);

sheldon.ataques.push(
    { nombre: 'Piedra', id: 'boton-piedra', foto: './imagenes/piedra.png' },
    { nombre: 'Papel', id: 'boton-papel', foto: './imagenes/papel.png' },
    { nombre: 'Tijeras', id: 'boton-tijeras', foto: './imagenes/tijera.png' },
    { nombre: 'Lagarto', id: 'boton-lagarto', foto: './imagenes/lagarto.png' },
    { nombre: 'Spock', id: 'boton-spock', foto: './imagenes/spock.png' }
);
leonard.ataques.push(
    { nombre: 'Piedra', id: 'boton-piedra', foto: './imagenes/piedra.png' },
    { nombre: 'Papel', id: 'boton-papel', foto: './imagenes/papel.png' },
    { nombre: 'Tijeras', id: 'boton-tijeras', foto: './imagenes/tijera.png' },
    { nombre: 'Lagarto', id: 'boton-lagarto', foto: './imagenes/lagarto.png' },
    { nombre: 'Spock', id: 'boton-spock', foto: './imagenes/spock.png' }
);
howard.ataques.push(
    { nombre: 'Piedra', id: 'boton-piedra', foto: './imagenes/piedra.png' },
    { nombre: 'Papel', id: 'boton-papel', foto: './imagenes/papel.png' },
    { nombre: 'Tijeras', id: 'boton-tijeras', foto: './imagenes/tijera.png' },
    { nombre: 'Lagarto', id: 'boton-lagarto', foto: './imagenes/lagarto.png' },
    { nombre: 'Spock', id: 'boton-spock', foto: './imagenes/spock.png' }
);
rajesh.ataques.push(
    { nombre: 'Piedra', id: 'boton-piedra', foto: './imagenes/piedra.png' },
    { nombre: 'Papel', id: 'boton-papel', foto: './imagenes/papel.png' },
    { nombre: 'Tijeras', id: 'boton-tijeras', foto: './imagenes/tijera.png' },
    { nombre: 'Lagarto', id: 'boton-lagarto', foto: './imagenes/lagarto.png' },
    { nombre: 'Spock', id: 'boton-spock', foto: './imagenes/spock.png' }
);
bernadette.ataques.push(
    { nombre: 'Piedra', id: 'boton-piedra', foto: './imagenes/piedra.png' },
    { nombre: 'Papel', id: 'boton-papel', foto: './imagenes/papel.png' },
    { nombre: 'Tijeras', id: 'boton-tijeras', foto: './imagenes/tijera.png' },
    { nombre: 'Lagarto', id: 'boton-lagarto', foto: './imagenes/lagarto.png' },
    { nombre: 'Spock', id: 'boton-spock', foto: './imagenes/spock.png' }
);
penny.ataques.push(
    { nombre: 'Piedra', id: 'boton-piedra', foto: './imagenes/piedra.png' },
    { nombre: 'Papel', id: 'boton-papel', foto: './imagenes/papel.png' },
    { nombre: 'Tijeras', id: 'boton-tijeras', foto: './imagenes/tijera.png' },
    { nombre: 'Lagarto', id: 'boton-lagarto', foto: './imagenes/lagarto.png' },
    { nombre: 'Spock', id: 'boton-spock', foto: './imagenes/spock.png' }
);
amy.ataques.push(
    { nombre: 'Piedra', id: 'boton-piedra', foto: './imagenes/piedra.png' },
    { nombre: 'Papel', id: 'boton-papel', foto: './imagenes/papel.png' },
    { nombre: 'Tijeras', id: 'boton-tijeras', foto: './imagenes/tijera.png' },
    { nombre: 'Lagarto', id: 'boton-lagarto', foto: './imagenes/lagarto.png' },
    { nombre: 'Spock', id: 'boton-spock', foto: './imagenes/spock.png' }
);
mokepones.push(sheldon, leonard, howard, rajesh, bernadette, penny, amy);

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputSheldon = document.getElementById('Sheldon');
        inputLeonard = document.getElementById('Leonard');
        inputHoward = document.getElementById('Howard');
        inputRajesh = document.getElementById('Rajesh');
        inputBernadette = document.getElementById('Bernadette');
        inputAmy = document.getElementById('Amy');
        inputPenny = document.getElementById('Penny');
    })
    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}
function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = 'none'
    //sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'flex'
    lienzo.drawImage(
        imagenDeSheldon,
        20,
        40,
        100,
        100,
    )

    if (inputSheldon.checked) {
        spanMascotaJugador.innerHTML = inputSheldon.id
        mascotaJugador = inputSheldon.id
    } else if (inputLeonard.checked) {
        spanMascotaJugador.innerHTML = inputLeonard.id
        mascotaJugador = inputLeonard.id
    } else if (inputHoward.checked) {
        spanMascotaJugador.innerHTML = inputHoward.id
        mascotaJugador = inputHoward.id
    } else if (inputRajesh.checked) {
        spanMascotaJugador.innerHTML = inputRajesh.id
        mascotaJugador = inputRajesh.id
    } else if (inputBernadette.checked) {
        spanMascotaJugador.innerHTML = inputBernadette.id
        mascotaJugador = inputBernadette.id
    } else if (inputPenny.checked) {
        spanMascotaJugador.innerHTML = inputPenny.id
        mascotaJugador = inputPenny.id
    } else if (inputAmy.checked) {
        spanMascotaJugador.innerHTML = inputAmy.id
        mascotaJugador = inputAmy.id
    } else {
        alert('Selecciona una mascota')
    }

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id="${ataque.id}" class="boton-de-ataque BAtaque">
            <p>${ataque.nombre}</p>
            <img src="${ataque.foto}" alt="${ataque.nombre}" />
        </button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

     botonPiedra = document.getElementById('boton-piedra')
     botonPapel = document.getElementById('boton-papel')
     botonTijeras = document.getElementById('boton-tijeras')
     botonLagarto = document.getElementById('boton-lagarto')
     botonSpock = document.getElementById('boton-spock')
     botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            let ataque = e.target.closest('.BAtaque').querySelector('p').textContent.trim();
            ataqueJugador.push(ataque);
            console.log(ataqueJugador);
            ataqueAleatorioEnemigo();
        })
    })
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, mokepones.length -1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length -1)
    ataqueEnemigo.push(ataquesMokeponEnemigo[ataqueAleatorio].nombre);
    
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponente(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    for (let index = 0; index < 5; index++) {
        if (
            (ataqueJugador[index] === 'Piedra' && ataqueEnemigo[index] === 'Lagarto') ||
            (ataqueJugador[index] === 'Piedra' && ataqueEnemigo[index] === 'Tijeras') ||
            (ataqueJugador[index] === 'Papel' && ataqueEnemigo[index] === 'Piedra') ||
            (ataqueJugador[index] === 'Papel' && ataqueEnemigo[index] === 'Spock') ||
            (ataqueJugador[index] === 'Tijeras' && ataqueEnemigo[index] === 'Lagarto') ||
            (ataqueJugador[index] === 'Tijeras' && ataqueEnemigo[index] === 'Papel') ||
            (ataqueJugador[index] === 'Lagarto' && ataqueEnemigo[index] === 'Papel') ||
            (ataqueJugador[index] === 'Lagarto' && ataqueEnemigo[index] === 'Spock') ||
            (ataqueJugador[index] === 'Spock' && ataqueEnemigo[index] === 'Piedra') ||
            (ataqueJugador[index] === 'Spock' && ataqueEnemigo[index] === 'Tijeras')
        ) {
            indexAmbosOponente(index, index);
            crearMensaje('GANASTE');
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador;
        } else if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponente(index, index);
            crearMensaje('EMPATE');
        } else {
            indexAmbosOponente(index, index);
            crearMensaje('PERDISTE');
            vidasEnemigo++;
            spanVidasEnemigo.innerHTML = victoriasEnemigo;
        }
    }
    revisarVidas();
}

function revisarVidas() {
    if (victoriasJugador == victoriasEnemigo) {
        crearMensajeFinal('EMPATE');
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal('GANASTEEE!!! :D');
    } else {
        crearMensajeFinal('PERDISTE, :(');
    }
}

function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function pintarPersonaje (){
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        sheldon.mapaFoto,
        sheldon.x,
        sheldon.y,
        sheldon.ancho,
        sheldon.alto
    )
}

function moverSheldon() {
    sheldon.x = sheldon.x +5
    pintarPersonaje()
}
window.addEventListener('load', iniciarJuego)
