let userInput = document.getElementById("date");


// user will be able to select (any previous date > today)
userInput.max = newDate().toISOString().split("T")[0];