<!-- HTML file: Leap year -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leap year</title>
    <link rel="stylesheet" href="010.css">
</head>
<body>
    <h4 id="year">Check whether the given year is a leap year or not📅</h4>
    <button id="check">🔍</button>

    <script src="010.js"></script>
</body>
</html>


/* CSS file: Leap year */

body {
    background-color: lavender;
    color: darkblue;
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: center;
    margin-top: 120px;
}

button {
    padding: 10px 20px;
    font-size: 15px;
}


/* JS file: Leap year */

document.getElementById("check").onclick = function() {

    let year = Number(prompt("Enter any year: "));

    if (year < 1) {
        document.getElementById("year").innerText = "Please enter a valid year!";
    } else if (year % 4 == 0) {
        document.getElementById("year").innerText = "The given year is a leap year.";
    } else {
        document.getElementById("year").innerText = "The given year is not a leap year.";
    }

    document.getElementById("check").style.display = "none";
};