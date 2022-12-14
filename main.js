function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="bandeira do ${player1}">
      <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="bandeira da ${player2}"> 
  </li>`
}

let delay = -0.4

function createCard(date, day, games) {
  delay = delay + 0.4
  return `
  <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div> `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("portugal", "13:00", "gana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("cameroon", "07:00", "serbia") +
      createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("gana", "12:00", "uruguai") +
      createGame("serbia", "16:00", "switzerland") +
      createGame("brazil", "16:00", "cameroon")
  ) +
  createCard(
    "03/12",
    "sábado",
    createGame("classificado", "12:00", "classificado") +
      createGame("classificado", "16:00", "classificado")
  )
