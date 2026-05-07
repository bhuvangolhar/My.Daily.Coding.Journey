<!-- HTML file: Positive negative -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Positive negative</title>
    <link rel="stylesheet" href="009.css">
</head>
<body>
    <h3 id="math">Check whether the number is positive or negative 🔢</h3>
    <button id="num">🔍</button>

    <script src="009.js"></script>
</body>
</html>


/* CSS file: Positive negative */

body {
    background-color: mintcream;
    color: darkslateblue;
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: center;
    margin-top: 120px;
}

button {
    padding: 10px 20px;
    font-size: 15px;
}


// JS file: Positive negative

document.getElementById("num").onclick = function() {

    let number = Number(prompt("Enter any number: "));

    if (number > 0) {
        document.getElementById("math").innerText = "The given number is positive";
    } else {
        document.getElementById("math").innerText = "The given number is negative";
    }
    
    document.getElementById("num").style.display = "none";
};
