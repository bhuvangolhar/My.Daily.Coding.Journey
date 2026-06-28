<!-- HTML file: Smallest integer -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smallest integer</title>
    <link rel="stylesheet" href="011.css">
</head>
<body>
    <h4 id="result">Find the smallest among three integers 🔢</h4>
    <button id="find">🔍</button>

    <script src="011.js"></script>
</body>
</html>


/* CSS file: Smallest integer */

body {
    background-color: honeydew;
    color: darkgreen;
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: center;
    margin-top: 120px;
}

button {
    padding: 10px 20px;
    font-size: 15px;
    cursor: pointer;
}


/* JS file: Smallest integer */

document.getElementById("find").onclick = function() {

    let x = Number(prompt("Enter the first integer: "));
    let y = Number(prompt("Enter the second integer: "));
    let z = Number(prompt("Enter the third integer: "));

    if (x < y && x < z) {
        document.getElementById("result").innerText = x + " is the smallest integer";
    } else if (y < x && y < z) {
        document.getElementById("result").innerText = y + " is the smallest integer";
    } else {
        document.getElementById("result").innerText = z + " is the smallest integer";
    }

    document.getElementById("find").style.display = "none";
};