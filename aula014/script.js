function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        res.innerHTML = 'Impossível contar!'
    } else {
       res.innerHTML = 'Contando: <br>'
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(passo.value)

       if (p <= 0 ) {
        //Caso coloque números negativos ou 0.
        window.alert('Passo Inválido! Considerando PASSO 1')
        p = 1
       }
        if (i < f) {
        //contagem crescente.
        for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} `
           }
       } else {
        //contagem regressiva.
        for(let c = i; c >= f; c -= p) {
            res.innerHTML += `${c} `
        }
       }

       
    }
}