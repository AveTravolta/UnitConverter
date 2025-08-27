const convertDistanceBTN = document.getElementById("convert-distance");

convertDistanceBTN.onclick = function() {
    let value = Number(document.getElementById("distance-input").value);
    let from = document.getElementById("distance-from").value;
    let to = document.getElementById("distance-to").value;
    let result = 0;

    if (from === "miles" && to === "kilometers") result = value * 1.60934;
    else if (from === "kilometers" && to === "miles") result = value / 1.60934;
    else result = value;

    document.getElementById("distance-result").textContent = "Result: " + result; 

    document.getElementById("reset-distance").onclick = function() {
    document.getElementById("distance-input").value = "";
    document.getElementById("distance-result").textContent = "";
}
}

const convertTemperatureBTN = document.getElementById("convert-temp");

convertTemperatureBTN.onclick = function() {
    let value = Number(document.getElementById("temp-input").value);
    let from = document.getElementById("temp-from").value;
    let to = document.getElementById("temp-to").value;
    let result = 0;

    if (from === "fahrenheit" && to === "celsius") result = (value - 32) * 5/9;
    else if (from === "celsius" && to === "fahrenheit") result = value * 9/5 + 32;
    else result = value;

    document.getElementById("temp-result").textContent = "Result: " + result; 

    document.getElementById("reset-temp").onclick = function() {
    document.getElementById("temp-input").value = "";
    document.getElementById("temp-result").textContent = "";
}
}