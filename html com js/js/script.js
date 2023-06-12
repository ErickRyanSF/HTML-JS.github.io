const frm = document.querySelector("input")
const resp = document.querySelector("h3")

function mostrar(){
  const nome = frm.value 
  resp.innerText = "Sua musica favorita é " + nome + "? Ótima música!!!"
}