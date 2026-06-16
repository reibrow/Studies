const frase = "Programar é divertido"

const contagem = {}

for (let i = 0; i<frase.length; i++){
    const letra = frase[i].toLocaleLowerCase()

    if (letra !== " "){
        if (contagem[letra]){
            contagem[letra]++
        } else {
            contagem[letra] = 1
        }
    }
}

console.log(contagem);