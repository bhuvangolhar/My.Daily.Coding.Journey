<!-- HTML file: Change border -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change border</title>
    <link rel="stylesheet" href="017.css">
</head>
<body>
    <h2 id="heading">Click the button to change the border 🖼️</h2>
    <button id="change">Change</button>

    <script src="017.js"></script>
</body>
</html>


/* CSS file: Change border */

body {
    background-color: beige;
    color: midnightblue;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
    margin-top: 120px;
}

#heading {
    display: inline-block;
    padding: 15px;
}

button {
    padding: 10px 20px;
    font-size: 15px;
    cursor: pointer;
}


/* JS file: Change border */

document.getElementById("change").onclick = function() {

    document.getElementById("heading").style.border = "4px solid blue";
    document.getElementById("heading").innerText = "Border changed successfully 🎉";

    document.getElementById("change").style.display = "none";
};