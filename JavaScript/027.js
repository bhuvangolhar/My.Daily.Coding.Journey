<!-- HTML file: Random number generator -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random number generator</title>
    <link rel="stylesheet" href="027.css">
</head>
<body>
    <h3 id="number">0</h3>

    <button id="generate">Generate</button>

    <script src="027.js"></script>
</body>
</html>


/* CSS file: Random number generator */

body {
    background-color: mintcream;
    color: darkslateblue;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
    margin-top: 120px;
}

h3 {
    font-size: 60px;
}

button {
    padding: 10px 20px;
    font-size: 15px;
    cursor: pointer;
}


/* JS file: Random number generator */

document.getElementById("generate").onclick = function() {

    let number = Math.floor(Math.random() * 100) + 1;

    document.getElementById("number").innerText = number;
};