<!-- HTML file: Change font size -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change font size</title>
    <link rel="stylesheet" href="015.css">
</head>
<body>
    <h2 id="heading">Click the button to increase the font size 🔠</h2>
    <button id="change">Change</button>

    <script src="015.js"></script>
</body>
</html>


/* CSS file: Change font size */

body {
    background-color: ivory;
    color: darkslategray;
    font-family: Tahoma, Geneva, sans-serif;
    text-align: center;
    margin-top: 120px;
}

button {
    padding: 10px 20px;
    font-size: 15px;
    cursor: pointer;
}


/* JS file: Change font size */

document.getElementById("change").onclick = function() {

    document.getElementById("heading").style.fontSize = "40px";
    document.getElementById("heading").innerText = "Font size changed successfully 🎉";

    document.getElementById("change").style.display = "none";
};