var num = 1
num = 5

if (num === 1) {
  console.log('num é igual a 1')
} else if (num === 2) {
  console.log('num é igual a 2')
} else {
  console.log('num é 5')
}

// Switch - só quando for verdadeira

var mes = 'janeiro'

switch (mes) {
  case 'fevereiro':
    console.log('mes 2')
    break
  // palavra reservada para interromper o bloco de código caso seja atendido

  case 'março':
    console.log('mes 3')
    break

  case 'janeiro':
    console.log('mes 1')
    break

  default:
    console.log('nenhum dos casos acima foi atendido')
}

//Default é uma palavra reservada caso nenhum dos blocos de cógidos acima for verdadeiro, irá aparecer uma mensagem.
