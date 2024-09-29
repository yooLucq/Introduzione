let punteggio = 0
let risposta_sbagliata = 0

let ans1 = prompt("Chi ha vinto il pallone d'oro nel 2010?")
if(ans1 === null){
    while(ans1 === null){
        ans1 = prompt("Rispondi alla domanda, Chi ha vinto il pallone d'oro nel 2010?")
    }
}
ans1 = ans1.toLowerCase()
ans1 = ans1.trim()
if(ans1 === "messi"){
    punteggio++
}
else{
    risposta_sbagliata++
    consol.log("Risposta corretta: "+ "messi")
}

let ans2 = prompt("Chi ha vinto l'ultimo mondiale del 2022?")
if(ans2 === null){
    while(ans2 === null){
        ans2 = prompt("Rispondi alla domanda, Chi ha vinto l'ultimo mondiale nel 2022?")
    }
}
ans2 = ans2.toLowerCase()
ans2 = ans2.trim()
if(ans2 === "argentina"){
    punteggio++
}
else{
    risposta_sbagliata++
    consol.log("Risposta corretta: "+ "argentina")
}

let ans3 = prompt("Chi ha scritto la divina commedia?")
if(ans3 === null){
    while(ans3 === null){
        ans3 = prompt("Rispondi alla domanda, Chi ha vinto l'ultimo mondiale nel 2022?")
    }
}
asn3 = ans3.toLowerCase()
ans3 = ans3.trim()
if(ans3 === "dante"){
    punteggio++
}
else{
    risposta_sbagliata++
    consol.log("Risposta corretta: "+ "dante")
}

let ans4 = prompt("Dove si trova la torre Eiffel?")
if(ans4 === null){
    while(ans4 === null){
        ans4 = prompt("Rispondi alla domanda, Dove si trova la torre Eiffel?")
    }
}
ans4 = ans4.toLowerCase()
ans4 = ans4.trim()
if(ans4 === "parigi"){
    punteggio++
}
else{
    risposta_sbagliata++
    consol.log("Risposta corretta: "+ "parigi")
}

let ans5 = prompt("Qual è la capitale della Spagna?")
if(ans5 === null){
    while(ans5 === null){
        ans5 = prompt("Rispondi alla domanda, Qual è la capitale della Spagna?")
    }
}
ans5 = ans5.toLowerCase()
ans5 = ans5.trim()
if(asn5 === "madrid"){
    punteggio++
}
else{
    risposta_sbagliata++
    consol.log("Risposta corretta: "+ "madrid")
}

let ans6 = prompt("Quando è scoppiata la prima guerra mondiale?")
if(ans6 === null){
    while(ans6 === null){
        ans6 = prompt("Rispondi alla domanda, Quando è scoppiata la prima guerra mondiale?")
    }
}
asn6 = asn6.toLowerCase()
asn6 = ans6.trim()
if(asn6 === "1914"){
    punteggio++
}
else{
    risposta_sbagliata++
    consol.log("Risposta corretta: "+ "1914")
}

let ans7 = prompt("Qual è il risultato di 100 diviso 4?")
if(ans7 === null){
    while(ans7 === null){
        ans7 = prompt("Rispondi alla domanda, Qual è il risultato di 100 diviso 4?")
        }
}
ans7 = ans7.toLowerCase()
ans7 = ans7.trim()
if(ans7 === "25"){
    punteggio++
  }
else{
    risposta_sbagliata++
    consol.log("Risposta corretta: " + "25")
}



