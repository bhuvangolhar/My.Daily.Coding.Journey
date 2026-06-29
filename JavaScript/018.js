<!-- HTML file: Hide an element -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hide an element</title>
    <link rel="stylesheet" href="018.css">
</head>
<body>
    <h2 id="heading">Click the button to hide this text 👀</h2>
    <button id="hide">Hide</button>

    <script src="018.js"></script>
</body>
</html>


/* CSS file: Hide an element */

body {
    background-color: lavender;
    color: darkmagenta;
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    text-align: center;
    margin-top: 120px;
}

button {
    padding: 10px 20px;
    font-size: 15px;
    cursor: pointer;
}


/* JS file: Hide an element */

document.getElementById("hide").onclick = function() {

    document.getElementById("heading").style.display = "none";

    document.getElementById("hide").style.display = "none";
};