function submitValues() {
    var stepGoal = document.getElementById("stepGoal");
    var calGoal = document.getElementById("calGoal");

    var stepGoalValue = parseInt(stepGoal.value);
    var calGoalValue = parseInt(calGoal.value);

    if (isNaN(stepGoalValue) || isNaN(calGoalValue)) {
        alert("No Empty Spaces. Only Type In Numbers");
        return;
    }
    else {
        window.location.href = "home.html"; 
    }



   // Stores the users steps anf cals and then redirects it to home.html
    localStorage.setItem("stepGoal", stepGoalValue);
    localStorage.setItem("calGoal", calGoalValue);

    window.location.href = "home.html";
}
function requestMotionPermissions() {
  // Request Motion permissions for devices
  if (typeof DeviceMotionEvent.requestPermission === 'function') {
      DeviceMotionEvent.requestPermission()
          .then(permissionState => {
              if (permissionState === 'granted') {
                  startStepTracking();
              } else {
                  alert("Permission not granted for motion tracking");
              }
          })
          .catch(console.error);
  } else {
      // Automatically start tracking on devices not requiring permission
      startStepTracking();
  }
}