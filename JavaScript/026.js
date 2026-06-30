<!-- HTML file: Complete counter application -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complete counter application</title>
    <link rel="stylesheet" href="026.css">
</head>
<body>
    <h4 id="count">0</h4>

    <button id="increase">Increase</button>
    <button id="reset">Reset</button>
    <button id="decrease">Decrease</button>

    <script src="026.js"></script>
</body>
</html>


/* CSS file: Complete counter application */

body {
    background-color: aliceblue;
    color: midnightblue;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
    margin-top: 120px;
}

h4 {
    font-size: 60px;
}

button {
    padding: 10px 20px;
    font-size: 15px;
    cursor: pointer;
    margin: 5px;
}


/* JS file: Complete counter application */

let count = 0;

document.getElementById("increase").onclick = function() {

    count++;

    document.getElementById("count").innerText = count;
};

document.getElementById("reset").onclick = function() {

    count = 0;

    document.getElementById("count").innerText = count;
};

document.getElementById("decrease").onclick = function() {

    count--;

    document.getElementById("count").innerText = count;
};