let zloto = document.querySelector('.zloto')
let z = parseFloat(zloto.innerHTML)

let gpcStats = document.getElementById('gpcStats')
let gpsStats = document.getElementById('gpsStats')

let zlotoImgCointainer = document.querySelector('.zlotoImg-div')

let gpc = 1; //Zloto na klikniecie
let gps = 0; //Zloto na sekunde

const ulepszeniaClickera = [
    {
        name: 'kilof',
        koszt: document.querySelector('.kosztUlepszenia'),
        ku: kU = parseFloat(document.querySelector('.kosztUlepszenia').innerHTML),
        ulepszeniezlota: document.querySelector('.ulepszenieZlota') ,  
        ud: parseFloat(document.querySelector('.ulepszenieZlota').innerHTML),
        poziom: document.querySelector('.poziom'),
        mnoznikZlota: 1.025,
        mnoznikKosztu: 1.12,
    },
    {
        name: 'lepszykilof',
        koszt: document.querySelector('.kosztUlepszenia1'),
        ku: kU = parseFloat(document.querySelector('.kosztUlepszenia1').innerHTML),
        ulepszeniezlota: document.querySelector('.ulepszenieZlota1') ,  
        ud: parseFloat(document.querySelector('.ulepszenieZlota1').innerHTML),
        poziom: document.querySelector('.poziom1'),
        mnoznikZlota: 1.025,
        mnoznikKosztu: 1.12,
    },
    {
        name: 'pracownik',
        koszt: document.querySelector('.kosztUlepszenia2'),
        ku: kU = parseFloat(document.querySelector('.kosztUlepszenia2').innerHTML),
        ulepszeniezlota: document.querySelector('.ulepszenieZlota2') ,  
        ud: parseFloat(document.querySelector('.ulepszenieZlota2').innerHTML),
        poziom: document.querySelector('.poziom2'),
        mnoznikZlota: 1.025,
        mnoznikKosztu: 1.12,
    },
]

function ulepszenia(ulepszenie){
    const znajdzUlepszenie = ulepszeniaClickera.find((u) => {
        if(u.name === ulepszenie) return u 
    })

    if(z >= znajdzUlepszenie.ku){
        zloto.innerHTML = Math.round(z -= znajdzUlepszenie.ku);
        
        znajdzUlepszenie.poziom.innerHTML ++

        znajdzUlepszenie.ud = parseFloat((znajdzUlepszenie.ud * znajdzUlepszenie.mnoznikZlota).toFixed(2))
        znajdzUlepszenie.ulepszeniezlota.innerHTML = znajdzUlepszenie.ud

        znajdzUlepszenie.ku *= znajdzUlepszenie.mnoznikKosztu
        znajdzUlepszenie.koszt.innerHTML = Math.round(znajdzUlepszenie.ku)

        if(znajdzUlepszenie.name === 'kilof'){
            gpc += znajdzUlepszenie.ud
        }else {
            gps += znajdzUlepszenie.ud
        }
    }
}

function zbierajZloto(event){
    zloto.innerHTML = Math.round(z += gpc)

    const x = event.offsetX
    const y = event.offsetY

    const div = document.createElement('div')
    div.innerHTML ='+' + Math.round(gpc)
    div.style.cssText = `color:white; position:absolute; top: ${y}px; left: ${x}px; font-size:15px; pointer-events:none;`
    zlotoImgCointainer.appendChild(div)

    div.classList.add('animacja')
    timeout(div)

    console.log("Wykopano zloto")
}

const timeout = (div) => {
    setTimeout(() => {
        div.remove()
    }, 800);
}

setInterval(() => {
    z += gps / 10
    zloto.innerHTML = Math.round(z)
    gpcStats.innerHTML = Math.round(gpc)
    gpsStats.innerHTML = Math.round(gps)
}, 100)