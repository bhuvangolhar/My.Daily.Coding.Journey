<!-- HTML file: Show an element -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Show an element</title>
    <link rel="stylesheet" href="019.css">
</head>
<body>
    <h2 id="heading">JavaScript makes web pages interactive 🚀</h2>
    <button id="show">Show</button>

    <script src="019.js"></script>
</body>
</html>


/* CSS file: Show an element */

body {
    background-color: mintcream;
    color: darkblue;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-align: center;
    margin-top: 120px;
}

#heading {
    display: none;
}

button {
    padding: 10px 20px;
    font-size: 15px;
    cursor: pointer;
}


/* JS file: Show an element */

document.getElementById("show").onclick = function() {

    document.getElementById("heading").style.display = "block";

    document.getElementById("show").style.display = "none";
};