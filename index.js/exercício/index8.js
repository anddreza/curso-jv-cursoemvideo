
function carregar(){
var mensagem = window.document.getElementById('mensagem')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

mensagem.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora <12){
    //Bom dia
    img.src = "manha.jpg"
    document.body.style.background = '#F4A460'
} else if (hora >= 12 && hora < 18){
    //Boa tarde
    img.src = "tarde.jpg"
    document.body.style.background = '#F5DEB3'	
} else{
    //Boa noite
    img.src = "noite.jpg"
    document.body.style.background = '#191970'
}

}

