function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'criançamenino.jpg.jpg')
            } else if (idade < 21) {
                //adolecente
                img.setAttribute('src', 'adolecentemenino.jpg.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adultohomem.jpg.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosohomem.jpg.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'criançamenina.jpg.jpg')
            } else if (idade < 21) {
                //adolecente
                img.setAttribute('src', 'adolecentemenina.jpg.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adultamulher.jpg.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosamulher.jpg.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}