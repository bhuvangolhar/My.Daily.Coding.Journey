<!-- HTML file: Click event -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Click event</title>
    <link rel="stylesheet" href="004.css">
</head>
<body>
    <h3 id="output">click the button ⬇️</h3>
    <button id="pop">▶</button>

    <script src="004.js"></script>
</body>
</html>


/* CSS file: Click event */

body{
    background-color: aliceblue;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: purple;
}


// JS file: Click event

document.getElementById("pop").onclick = function() 
{
    document.getElementById("output").innerText = "Success 🎉";
}
