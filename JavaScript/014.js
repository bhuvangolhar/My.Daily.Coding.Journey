<!-- HTML file: Change text color -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change text color</title>
    <link rel="stylesheet" href="014.css">
</head>
<body>
    <h2 id="heading">Click the button to change the text color ✍️</h2>
    <button id="change">Change</button>

    <script src="014.js"></script>
</body>
</html>


/* CSS file: Change text color */

body {
    background-color: lavenderblush;
    color: darkred;
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    text-align: center;
    margin-top: 120px;
}

button {
    padding: 10px 20px;
    font-size: 15px;
    cursor: pointer;
}


/* JS file: Change text color */

document.getElementById("change").onclick = function() {

    document.getElementById("heading").style.color = "blue";
    document.getElementById("heading").innerText = "Text color changed successfully 🎉";

    document.getElementById("change").style.display = "none";
};