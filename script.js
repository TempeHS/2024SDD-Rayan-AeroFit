function submitValues() {
    var stepGoal = document.getElementById("stepGoal");
    var calGoal = document.getElementById("calGoal");

    var stepGoalValue = parseInt(stepGoal.value);
    var calGoalValue = parseInt(calGoal.value);

    if (isNaN(stepGoalValue) || isNaN(calGoalValue)) {
        alert("No Empty Spaces. Only Type In Numbers");
        return;
    }

    alert(stepGoalValue);
}
