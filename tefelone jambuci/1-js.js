let options = ['picles', 'dinhero', 'assasinato', 'minecraft', 'penis', 'pq?', 'OF', 'lol', '5$', 'cpf', 'vaza cartao']

function show(btn) {
    btn.disabled = true
    btn.innerHTML = shuffle();
}

function shuffle() {
    let result = options[(Math.random() * (options.length -1)).toFixed()]
    let index = options.indexOf(result)
    let save = options[0]
    options[0] = result
    options[index] = save
    let a = options.shift()
    return a
}