function submitValues() {
    var stepGoal = document.getElementById("stepGoal");
    var calGoal = document.getElementById("calGoal");

    var stepGoalValue = parseInt(stepGoal.value);
    var calGoalValue = parseInt(calGoal.value);

    if (isNaN(stepGoalValue) || isNaN(calGoalValue)) {
        alert("No Empty Spaces. Only Type In Numbers");
        return;
    }
   // Stores the users steps anf cals and then redirects it to home.html
    localStorage.setItem("stepGoal", stepGoalValue);
    localStorage.setItem("calGoal", calGoalValue);

    window.location.href = "home.html";
}
