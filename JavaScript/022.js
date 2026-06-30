<!-- HTML file: Change image -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change image</title>
    <link rel="stylesheet" href="022.css">
</head>
<body>
    <img id="picture" src="day.png" alt="Day Image" height="250">

    <br><br>

    <button id="change">Change Image</button>

    <script src="022.js"></script>
</body>
</html>


/* CSS file: Change image */

body {
    background-color: aliceblue;
    text-align: center;
    margin-top: 80px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

button {
    padding: 10px 20px;
    font-size: 15px;
    cursor: pointer;
}


/* JS file: Change image */

document.getElementById("change").onclick = function() {

    document.getElementById("picture").src = "night.png";

    document.getElementById("change").style.display = "none";
};