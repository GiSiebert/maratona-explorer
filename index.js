const elementoResposta = document.querySelector ('#resposta')
const inputPergunta = document.querySelector ("#inputPergunta")
const buttonPerguntar = document.querySelector ('#buttonPerguntar')
const respostas = [
   "Certeza",
   "Acho que não",
   "Provavelmente",
   "Não conte com isso",
   "Sem dúvidas",
   "Pergunte novamente mais tarde",
   "Sim, definitivamente",
   "Ao meu ver sim",
   "Sinais apontam que sim",
   "Concentre-se e pergunte novamente",
   "Sim.",
   "Não",
   "Não é possível prever agora",
   "Minhas fontes dizem que não",
]

function fazerPergunta() {

   if(inputPergunta.value == "") {
      alert("Digite sua pergunta")
      return
   }

   
   buttonPerguntar.setAttribute("disabled", true)   
   
   const pergunta = "<div>" + inputPergunta.value + "</div>"


   const totalRespostas = respostas.length
   const numeroAleatorio = Math.floor(Math.random () * totalRespostas)

   elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

   
   elementoResposta.style.opacity = 1;
   
   setTimeout(function() {
      elementoResposta.style.opacity = 0;
      buttonPerguntar.removeAttribute("disabled") 
      }, 3000)

   }