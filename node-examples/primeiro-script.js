console.log('n-fatorial')

//de onde foi iniciado o script
console.log(`Executando o script a partir do diretorio ${process.cwd()}`)

//ouvir eventos de saida
    // se inscriver num evento com process.on
process.on('exit', () =>{
    console.log('script está prestes a terminar')
})


const fatorial  = (num)=>{
    if(num === 0) {
      return 1
    }

    return num * fatorial (num - 1)
}

//process.argv - dá acesso aos argumentos da linha de comando
// q foram utilizados p iniciar o script
console.log(process.argv)

console.log(`O fatorial de 5 é igual a ${fatorial(5)}`)

/* 
****resposta do console***

n-fatorial
Executando o script a partir do diretorio D:\stack\nodejs\node-examples
[ 'C:\\Program Files\\nodejs\\node.exe',
  'D:\\stack\\nodejs\\node-examples\\primeiro-script.js' ]
O fatorial de 5 é igual a 120
script está prestes a terminar
 */
