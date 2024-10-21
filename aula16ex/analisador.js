var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
        //add n° caso ele seja um ou não esteja na lista
    } else {
        alert('Número inválido ou repetido!')
    }
    num.value = ''
    num.focus() //setinha piscando
}

function fin() {
    if (valores.length == 0) {
        alert('Digite um número')
    } else {
       var tot = valores.length
       var maior = valores[0]
       var menor = valores[0]
       for(var pos in valores) {
        if (valores [pos] > maior)
            maior = valores[pos]
        if (valores [pos] < menor)
            menor = valores[pos]
       }
       res.innerHTML = ''
       res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados</p>`
       res.innerHTML += `O maior número foi ${maior}`   
       res.innerHTML += `O menor número foi ${menor}`
       
    }
}
