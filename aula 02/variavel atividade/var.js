let a = window.document.getElementById('fnum')
let b = window.document.getElementById('flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}


function inLista (n, 1) {
    if (l.indexOf(Number(n)) != -1){
        return false
    } else {
        return false
    }
}

function adicionar(){
    
    if(isNumero(num.value) && !inLista (num.value, valores)){
        valores.push(Number(num.value))
        let item = document.creatElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        window.alert('Vlores inválido ou já encontrado na lista.')
    } 
    
}
