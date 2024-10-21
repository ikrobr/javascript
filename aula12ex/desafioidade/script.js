function verificar() {
    var data = new Date() //captura a data do aparelho
    var ano = data.getFullYear() 
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro]') //se a data de nasc for igual a 0 ou mair q o ano atual
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) //ano - idade de nasc
        var genero = ''
        var img = document.createElement('img') 
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) { // o sexo(fsex[0] é o primeiro botão(nesse ex é o masculino))
            genero = 'Homem'
            if (idade > 3 && idade < 11){
                //criança
                img.setAttribute('src', 'criancam.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemm.png')
            } else if (idade < 45){
                //adulto
                img.setAttribute('src', 'adultom.png')
            } else if (idade <100){
                //idoso
                img.setAttribute('src', 'idosom.png')
            }
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade > 3 && idade < 11){
                //criança
                img.setAttribute('src', 'criancaf.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemf.png')
            } else if (idade < 45){
                //adulto
                img.setAttribute('src', 'adultof.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosof.png')
            }
        }
        res.style.textAlign = 'center' //centralizei resposta(res)
        res.innerHTML = `Detectamos o gênero ${genero} com idade ${idade} anos.`
        res.appendChild(img) 
    }
}

/*  var img = document.createElement('img')
img.setAttribute('id', 'foto')

É igual a colocar dentro da div [html] : <img id = 'foto'>
*/