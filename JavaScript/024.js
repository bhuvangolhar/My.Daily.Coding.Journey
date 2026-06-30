<!-- HTML file: Decrease counter -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Decrease counter</title>
    <link rel="stylesheet" href="024.css">
</head>
<body>
    <h5 id="count">10</h5>

    <button id="decrease">Decrease</button>

    <script src="024.js"></script>
</body>
</html>


/* CSS file: Decrease counter */

body {
    background-color: honeydew;
    color: darkgreen;
    font-family: "Trebuchet MS", Helvetica, sans-serif;
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


/* JS file: Decrease counter */

let count = 10;

document.getElementById("decrease").onclick = function() {

    count--;

    document.getElementById("count").innerText = count;
};