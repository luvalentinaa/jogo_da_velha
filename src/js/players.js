function namePlayers() {
  player()
}
function player() {
  namePlayer = document.getElementsByName('player')
  const text = namePlayer[0].value

  let registerNames = document.getElementById('register')

  registerNames.innerHTML += `
    <p>Jogador: ${text}</P>

    `
}
