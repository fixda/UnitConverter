/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let num = 0
let convert = document.getElementById("inputBtn")

convert.addEventListener("click", function(){
    let inputEl = document.getElementById("heroInput")
    let num = inputEl.value
    
    meterFeet(num)
    feetMeter(num)
    gallonLiter(num)
    literGallon(num)
    kilosPounds(num)
    poundKilos(num)
})


function meterFeet(convValue){
     let feet = convValue * 3.28084
     let feetR = feet.toFixed(3)
     document.getElementById("meter").textContent = convValue
     document.getElementById("meterFeet").textContent = feetR
     console.log(feetR)
 }
function feetMeter(convValue){
    let meter = convValue / 3.28084
    let meterR = meter.toFixed(3)
    document.getElementById("feet").textContent = convValue
    document.getElementById("feetMeter").textContent = meterR
}
function literGallon(convValue){
    let liter = convValue / 3.785
    let literR = liter.toFixed(3)
    document.getElementById("gallon").textContent = convValue
    document.getElementById("literGallon").textContent = literR
}
function gallonLiter(convValue){
    let gallon = convValue * 3.785
    let gallonR = gallon.toFixed(3)
    document.getElementById("liter").textContent = convValue
    document.getElementById("gallonLiter").textContent = gallonR
}
function kilosPounds(convValue){
    let pounds = convValue * 2.20462
    let poundsR = pounds.toFixed(3)
    document.getElementById("kilos").textContent = convValue
    document.getElementById("kilosPound").textContent = poundsR
}
function poundKilos(convValue){
    let kilos = convValue / 2.20462
    let kilosR = kilos.toFixed(3)
    document.getElementById("pounds").textContent = convValue
    document.getElementById("poundKilos").textContent = kilosR
}


// document.getElementById("heroInput").textContent = num

// console.log(num)

// function calcRoute(){
//     input = document.getElementById("inputBox").value;
//     console.log(input)
// }


// function printVar(){
//     inputVar.textContent = "test"
//     // console.log(inputVar);
// }


    
