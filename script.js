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



//Global functions
function startStepTracking() {
    window.addEventListener('devicemotion', (event) => { //
        var currentTime = new Date().getTime(); // Current time in ms 
        // Checks 3D Acceleration data
        if (currentTime - lastUpdate > minTimeBetweenSteps) { // Ensures Step Delay is Met
            var accel = event.accelerationIncludingGravity; // XYZ Acceleration measured
            var totalAccel = Math.sqrt(accel.x * accel.x + accel.y * accel.y + accel.z * accel.z); // Uses Vector Magnitude Formula for Magnitude of Acceleration
            if (totalAccel > accelLimit) { 
                stepCount++;
                localStorage.setItem('stepCount', stepCount);
                updateStepCount(); // Updates step count display
                updateStepGoalBox();
                calConversion();
                updateCalCount()
              
                lastUpdate = currentTime;
            }
        }
    });
}
function calConversion() {
    // For every 20 steps, calCount++
          if (stepCount - stepCountOld == 20) {
          stepCountOld = stepCount
          calCount++
          localStorage.setItem('calCount', calCount);
          localStorage.setItem('stepCountOld', stepCountOld);
          }
        }    

