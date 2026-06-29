<!-- HTML file: Change font family -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change font family</title>
    <link rel="stylesheet" href="016.css">
</head>
<body>
    <h2 id="heading">Click the button to change the font family 🔤</h2>
    <button id="change">Change</button>

    <script src="016.js"></script>
</body>
</html>


/* CSS file: Change font family */

body {
    background-color: aliceblue;
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


/* JS file: Change font family */

document.getElementById("change").onclick = function() {

    document.getElementById("heading").style.fontFamily = "Courier New";
    document.getElementById("heading").innerText = "Font family changed successfully 🎉";

    document.getElementById("change").style.display = "none";
};