<!-- HTML file: Temperature check -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Temperature check</title>
    <link rel="stylesheet" href="006.css">
</head>
<body>
    <h5 id="report">Find out the temperature around you🌡️</h5>
    <button id="tap">Check</button>

    <script src="006.js"></script>
</body>
</html>


/* CSS file: Temperature check */

body {
    background-color: lavenderblush;
    color: darkred;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    margin-top: 120px;
}

button {
    padding: 10px 20px;
    font-size: 15px;
    cursor: pointer;
}


// JS file: Temperature check

document.getElementById("tap").onclick = function() {

    let temperature = Number(prompt("Enter your room temperature: "));

    if (temperature >= 30) {
        document.getElementById("report").innerText = "It is hot here ☀️";
    } else {
        document.getElementById("report").innerText = "It is cold here ❄️";
    }
};