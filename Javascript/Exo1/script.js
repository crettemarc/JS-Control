
function bot(){
    let response = prompt("Qu'est-ce que tu veux ?", "")
    if(response.slice(-1) === "?" ){
        console.log("C'est pas faux")
        bot()
    }else if(response  && response === response.toUpperCase()){
        console.log("Vas-y, calme-toi wesh !")
        bot()
    }else if(response.includes("Javascript") || response.includes("javascript")){
        console.log("Oula ça à l'air dur ton truc... flemme")
        bot()
    }else if(response === ""){
        console.log("t'es en PLS ?")
        bot()
    }else {
        console.log("balek.")
        bot()
    }
}
bot()