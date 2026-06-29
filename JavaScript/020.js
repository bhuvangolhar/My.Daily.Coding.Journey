<!-- HTML file: Change button text -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change button text</title>
    <link rel="stylesheet" href="020.css">
</head>
<body>
    <h2>Click the button below 👇</h2>
    <button id="change">Click Me</button>

    <script src="020.js"></script>
</body>
</html>


/* CSS file: Change button text */

body {
    background-color: seashell;
    color: darkslategray;
    font-family: Garamond, serif;
    text-align: center;
    margin-top: 120px;
}

button {
    padding: 10px 20px;
    font-size: 15px;
    cursor: pointer;
}


/* JS file: Change button text */

document.getElementById("change").onclick = function() {

    document.getElementById("change").innerText = "Completed ✔";
};