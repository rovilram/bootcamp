
const escribe = msg => {
  const $body = document.querySelector('body')
  const $message = document.createElement('p')
  $message.innerHTML = msg
  $body.appendChild($message)
}

function printString(string) {
  return new Promise((resolv, reject) => {

    setTimeout(
      () => {
        resolv(escribe(string))
      },
      Math.floor(Math.random() * 500) + 1
    )
  })
}
// con await async
function printPrecuela() {
  return new Promise((resolve, reject) => {
    printString('Episodio I: la amenaza fantasma')
      .then(() => printString('Episodio II: el ataque de los clones'))
      .then(() => resolve(printString('Episodio III: la venganza de los sith')))

  })
}
function printParalelas() {
  return new Promise((resolve, reject) => {
    resolve(printString('Han Solo: una historia de Star Wars')
      .then(() => printString('Rogue One: una historia de Star Wars')));
  })
}
// con await async
async function printOriginal() {
  await printString('Episodio IV: una nueva esperanza');
  await printString('Episodio V: el imperio contraataca');
  printString('Episodio VI: el regreso del jedi');
}

//aquí no es necesario hacer async/await ni promesa ya que es la última a ejecutar.
function printSecuelas() {
  printString('Episodio VII: el despertar de la fuerza')
    .then(() => printString('Episodio VIII: el último jedi'))
    .then(() => printString('Episodio IX: el ascenso de Skywalker'))
}
//si lo hago "gestionando" las promesa
async function printAll() {
  await printPrecuela()
  await printParalelas()
  await printOriginal()
  printSecuelas()
}

printAll()
