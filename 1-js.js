// ['picles', 'dinhero', 'assasinato', 'minecraft', 'penis', 'pq?', 'OF', 'lol', '5$', 'cpf', 'vaza cartao']
let options = ['A', 'N', 'A', 'A', 'P', 'K', '💣', '1$', '3$', '5$', '5k points', 'SUB']

function show(btn) {
    btn.disabled = true
    btn.style = "animation: spin-faster 5s cubic-bezier(0, 0, 0.66, 0.83) 1; ";
    setTimeout(() => {
        btn.firstChild.textContent = shuffle();
        btn.firstChild.style = "animation: glow 3s linear infinite;";
        btn.style = "animation: spin-slower 5s cubic-bezier(0, 0, 0.66, 0.83) 1; text-shadow: 0px -1px 3px red, 0 3px red, -1px 0 3px red, 1px 0 3px red;";
    }, 5000);
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
