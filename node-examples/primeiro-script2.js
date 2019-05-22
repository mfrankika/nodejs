console.log('n-fatorial')

/*console.log(`Executando o script a partir do diretório ${process.cwd()}`)

process.on('exit', ()=>{
  console.log('script está prestes a terminar')
})*/

const fatorial  = (num)=>{
    if(num === 0) {
      return 1
    }

    return num * fatorial (num - 1)
}

//o 3º num arg usado valor é posicao 2
const num = parseInt(process.argv[2])

console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`)


/* 
**no console resposta:**
$ node primeiro-script2.js 10
n-fatorial
O fatorial de 10 é igual a 3628800 */


