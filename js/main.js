let kilometriViaggio = prompt("kilometri da percorrere");

let etaSoggetto = prompt("età");

let priceJourney = .21 * kilometriViaggio

let upDateUtente;


if (etaSoggetto < 18){
    alert(priceJourney * .80); 
}else if (etaSoggetto > 65){
    alert(priceJourney * .60);
}else{
    alert(priceJourney);
}

if (etaSoggetto < 18){
    upDateUtente = document.getElementById("prezzoBiglietto");
    upDateUtente.innerHTML = (priceJourney * .80).toFixed(2);
}else if (etaSoggetto > 65){
    upDateUtente = document.getElementById("prezzoBiglietto");
    upDateUtente.innerHTML = (priceJourney * .60).toFixed(2);
}else {
    upDateUtente = document.getElementById("prezzoBiglietto");
    upDateUtente.innerHTML = priceJourney;
}

if (etaSoggetto){
    upDateUtente = document.getElementById("età")
    upDateUtente.innerHTML = etaSoggetto;
}

if (kilometriViaggio){
    upDateUtente = document.getElementById("km")
    upDateUtente.innerHTML = kilometriViaggio;
}
