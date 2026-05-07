<!-- HTML file: Score checker -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Score checker</title>
    <link rel="stylesheet" href="007.css">
</head>
<body>
    <h6 id="status">Know your examination result status here 📝</h6>
    <button id="pen">Check</button>

    <script src="007.js"></script>
</body>
</html>


/* CSS file: Score checker */

body {
    background-color: honeydew;
    color: blue;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
    margin-top: 120px;
}

button {
    padding: 10px 20px;
    font-size: 15px;
    cursor: pointer;
}


// JS file: Score checker

document.getElementById("pen").onclick = function() {

    let score = Number(prompt("Enter your exam score: "));

    if (score >= 35) {
        document.getElementById("status").innerText = "Hurray, you passed the exam 💯";
    } else {
        document.getElementById("status").innerText = "Oops, you did not pass the exam ❌";
    }
};
