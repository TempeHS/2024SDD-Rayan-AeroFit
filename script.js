function submitValues() {
    var stepGoalInput = document.getElementById("stepGoal");
    var calorieGoalInput = document.getElementById("calorieGoal");  

    if (!stepGoalInput.value || !calorieGoalInput.value) {
        alert("Enter both Step Goal and Calorie Goal.");
        return;
      }
}
if (!isInteger(stepGoalInput.value) || !isInteger(calorieGoalInput.value)) {
    alert("Please enter valid integer values for Step Goal and Calorie Goal.");
  }
