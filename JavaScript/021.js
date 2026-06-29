<!-- HTML file: Change page title -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change page title</title>
    <link rel="stylesheet" href="021.css">
</head>
<body>
    <h2 id="heading">Click the button to change the page title 📄</h2>
    <button id="change">Change</button>

    <script src="021.js"></script>
</body>
</html>


/* CSS file: Change page title */

body {
    background-color: lemonchiffon;
    color: saddlebrown;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    margin-top: 120px;
}

button {
    padding: 10px 20px;
    font-size: 15px;
    cursor: pointer;
}


/* JS file: Change page title */

document.getElementById("change").onclick = function() {

    document.title = "Page Title Changed";
    document.getElementById("heading").innerText = "Page title changed successfully 🎉";

    document.getElementById("change").style.display = "none";
};