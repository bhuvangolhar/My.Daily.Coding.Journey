<!-- HTML file: Check eligibility -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Check eligibility</title>
    <link rel="stylesheet" href="005.css">
</head>
<body>
    <h4 id="result">Find out whether you are eligible to vote or not 🗳️</h4>
    <button id="press">Check</button>

    <script src="005.js"></script>
</body>
</html>


/* CSS file: Check eligibility */

body {
    background-color: azure;
    color: #000000;
    font-family:'Courier New', Courier, monospace;
    text-align: center;
    margin-top: 110px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}


// JS file: Check eligibility

document.getElementById("press").onclick = function() {

    let age = prompt("Enter your current age: ");

    if (age >= 18) {
        document.getElementById("result").innerText = "You are eligible to vote ✅";
    } else {
        document.getElementById("result").innerText = "You are not eligible to vote ❌";
    }
};
