const piedra = document.querySelector(".stone")
const papel = document.querySelector(".paper")
const tijeras = document.querySelector(".scissors")

const stone = 0
const paper = 1
const scissors = 2

const empate = 0
const ganador = 1
const Perdedor = 2

piedra.addEventListener("click", () => {
  play(stone)
})
papel.addEventListener("click", () => {
  play(paper)
})
tijeras.addEventListener("click", () => {
  play(scissors)
})

function play(userOption) {
  const optionRamdon = Math.floor(Math.random() * 3)
  const result = CalcResult(userOption, optionRamdon)
  switch (result) {
    case empate:
      swal.fire({
        title: "(ô_ô)",
        text: "Looks like there was a tie",
        footer: "Retry",
        background: "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)",
        color: "#000",
        backdrop: `
               rgba(0,0,0,0.7)
            url("/img/empate.gif")
             top
            no-repeat
          `,
      })
      break
    case ganador:
      swal.fire({
        title: "ヽ(-‿-)ノ",
        text: "In good time!!, you have won...",
        footer: "Keep it up!!",
        background: "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)",
        color: "#000",
        backdrop: `
    rgba(0,0,0,0.7)
    url("/img/win.gif")
     top
    no-repeat
  `,
      })
      break
    case Perdedor:
      swal.fire({
        title: "T^T",
        text: "You lost... :(",
        footer: "Don't get discouraged, keep trying",
        background: "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)",
        color: "#000",
        backdrop: `
    rgba(0,0,0,0.7)
    url("/img/perdio.gif")
     top
    no-repeat
  `,
      })
      break
  }
}

function CalcResult(userOption, optionRamdon) {
  if (userOption === optionRamdon) return empate

  if (userOption === stone) {
    if (optionRamdon === paper) return Perdedor
    if (optionRamdon === scissors) return ganador
  } else if (userOption === paper) {
    if (optionRamdon === scissors) return Perdedor
    if (optionRamdon === stone) return ganador
  } else if (userOption === scissors) {
    if (optionRamdon === stone) return Perdedor
    if (optionRamdon === paper) return ganador
  }
}
