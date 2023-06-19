
function libro(){
navigator.mediaDevices.getUserMedia({audio:true})
flor=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/cSr65qGaR/model.json",modelocargado)
}
function modelocargado(){
    console.log("Listo")
    flor.classify(resultado)
    }
function resultado(error,estabien){
if (error) {
    console.log(error)
}
else {
    console.log(estabien)
    var sonido=estabien[0].label
    var procentage=estabien[0].confidence
    document.getElementById("messi").innerHTML="El sonido es : "+sonido
    document.getElementById("luffy").innerHTML="Precision: "+procentage
    if (sonido=="aplaudir") {
        document.getElementById("fuecoco").src="Fuecoco.gif"
        document.getElementById("charmander").src="charmander.jpg"
        document.getElementById("dragonite").src="dragonite.jpg"
        document.getElementById("charizar").src="charizar.jpg"
    }
    if (sonido=="golpear mesa") {
        document.getElementById("fuecoco").src="Fuecoco.jpg"
        document.getElementById("charmander").src="charmander.jpg"
        document.getElementById("dragonite").src="dragonite.gif"
        document.getElementById("charizar").src="charizar.jpg"
    }  if (sonido=="lengua ") {
        document.getElementById("fuecoco").src="Fuecoco.jpg"
        document.getElementById("charmander").src="charmander.gif"
        document.getElementById("dragonite").src="dragonite.jpg"
        document.getElementById("charizar").src="charizar.jpg"
    }
    if (sonido=="chiflar") {
        document.getElementById("fuecoco").src="Fuecoco.jpg"
        document.getElementById("charmander").src="charmander.jpg"
        document.getElementById("dragonite").src="dragonite.jpg"
        document.getElementById("charizar").src="charizar.gif"
    }

}
}