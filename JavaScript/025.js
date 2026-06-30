<!-- HTML file: Reset counter -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset counter</title>
    <link rel="stylesheet" href="025.css">
</head>
<body>
    <h6 id="count">25</h6>

    <button id="reset">Reset</button>

    <script src="025.js"></script>
</body>
</html>


/* CSS file: Reset counter */

body {
    background-color: azure;
    color: darkred;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    margin-top: 120px;
}

h6 {
    font-size: 60px;
}

button {
    padding: 10px 20px;
    font-size: 15px;
    cursor: pointer;
}


/* JS file: Reset counter */

let count = 25;

document.getElementById("reset").onclick = function() {

    count = 0;

    document.getElementById("count").innerText = count;
};