<!-- HTML file: Odd even -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Odd even</title>
    <link rel="stylesheet" href="008.css">
</head>
<body>
    <h3 id="math">Check whether the number is even or odd 🔢</h3>
    <button id="num">🔍</button>

    <script src="008.js"></script>
</body>
</html>


/* CSS file: Odd even */

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


// JS file: Odd even

document.getElementById("num").onclick = function() {

    let number = Number(prompt("Enter any number: "));

    if (number % 2 == 0) {
        document.getElementById("math").innerText = "The given number is even";
    } else {
        document.getElementById("math").innerText = "The given number is odd";
    }
    
    document.getElementById("num").style.display = "none";
};
