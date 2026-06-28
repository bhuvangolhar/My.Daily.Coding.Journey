<!-- HTML file: Change background color -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change background color</title>
    <link rel="stylesheet" href="013.css">
</head>
<body>
    <h2 id="heading">Click the button to change the background color 🎨</h2>
    <button id="change">Change</button>

    <script src="013.js"></script>
</body>
</html>


/* CSS file: Change background color */

body {
    background-color: aliceblue;
    color: midnightblue;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
    margin-top: 120px;
}

button {
    padding: 10px 20px;
    font-size: 15px;
    cursor: pointer;
}


/* JS file: Change background color */

document.getElementById("change").onclick = function() {

    document.body.style.backgroundColor = "lightgreen";
    document.getElementById("heading").innerText = "Background color changed successfully 🎉";

    document.getElementById("change").style.display = "none";
};