<!-- HTML file: Increase counter -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Increase counter</title>
    <link rel="stylesheet" href="023.css">
</head>
<body>
    <h5 id="count">0</h5>

    <button id="increase">Increase</button>

    <script src="023.js"></script>
</body>
</html>


/* CSS file: Increase counter */

body {
    background-color: lavender;
    color: midnightblue;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
    margin-top: 120px;
}

h5 {
    font-size: 60px;
}

button {
    padding: 10px 20px;
    font-size: 15px;
    cursor: pointer;
}


/* JS file: Increase counter */

let count = 0;

document.getElementById("increase").onclick = function() {

    count++;

    document.getElementById("count").innerText = count;
};