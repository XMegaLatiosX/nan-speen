// ['picles', 'dinhero', 'assasinato', 'minecraft', 'penis', 'pq?', 'OF', 'lol', '5$', 'cpf', 'vaza cartao']
let options = ['A', 'N', 'A', 'A', 'P', 'K', '💣', '1$', '3$', '5$', '5k points', 'SUB']

function show(btn) {
    btn.disabled = true
    btn.style = "animation: spin-faster 5s cubic-bezier(0, 0, 0.66, 0.83) 1; ";
    setTimeout(() => {btn.firstChild.textContent = shuffle();}, 3950);
    setTimeout(() => {
        btn.firstChild.style = "animation: glow 3s linear infinite;";
        btn.style = "animation: spin-slower 5s cubic-bezier(0, 0, 0.66, 0.83) 1; text-shadow: 0px -1px 3px red, 0 3px red, -1px 0 3px red, 1px 0 3px red;";
    }, 4000);
}

function shuffle() {
    const result = options[(Math.random() * (options.length -1)).toFixed()]//pega um valor aleatório dentro do array options
    const index = options.indexOf(result)//pega a posição do valor result
    const save = options[0]//salva o valor da posição 0
    options[0] = result//troca o valor da posição 0 pelo valor pega em resultado
    options[index] = save//troca o valor da variavel resultado pelo index 0 q foi salvo
    return options.shift()//remove o index 0 e retorna seu valor
}
