let intervalo = 3500, //TEMPO PARA A TROCA DAS IMAGENS
    imagemAtual = 0,
    img = document.querySelectorAll("#carrosel img"), //COLETANDO TODAS AS IMAGENS 
    maxImagens = img.length


function trocaImagem(){

    // console.log(img)
    img[imagemAtual].classList.remove("atual") //REMOVENDO A CLASSE PARA A IMAGEM APARECER

    imagemAtual++

    if(imagemAtual >= maxImagens)
        imagemAtual = 0

    img[imagemAtual].classList.add("atual") //ADICIONANDO A CLASSE PARA A IMAGEM APARECER

}

function iniciar(){

    setInterval(() => {
        trocaImagem()
    }, intervalo)

}


// let btnMenu = document.getElementById('menu-icon')

let btnMenu = document.querySelector('#menu-icon')
let nav = document.querySelector('.navlist')

btnMenu.addEventListener('click', function(){
    console.log("oi")
    console.log(nav)
    nav.classList.remove('nav')
    nav.classList.toggle('navlistOpen')
})






// function mostrar(){
//     let navlist = document.getElementById('navlist')
//     navlist.classList.toggle('active')
// }

// btnMenu.addEventListener('click', mostrar)


window.onscroll = () =>{
    navlist.classList.remove('navlistOpen');
}

window.addEventListener("load", iniciar) //FUNÇÃO PARA INICIAR O EVENTO APÓS A PAGINA SER CARREGADA