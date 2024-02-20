Syntax and tutorial on using the Device motion Event.
https://developer.mozilla.org/en-US/docs/Web/API/Window/devicemotion_event

**How it works:**

1) The function first checks the current time and compares it to the last update to ensure the minTimeBetweenSteps is met.

The minTimeBetweenSteps delays the step-tracking to mimick the delay between steps, reducing the effect shaking a phone would have on Step Data.

**Reference Code:** if (currentTime - lastUpdate > minTimeBetweenSteps) {

2) The var accel = event.acceleration retrieves acceleration data in the x y and z axis.

**Reference Code:** var accel = event.accelerationIncludingGravity;

3) The totalAccel variable is neccessary as event.acceleration alone provides me the values as three seperate values (XYZ). When someone steps, their phone may move in any of, if not all of these axises. Thus, I needed to find the magnitude of the acceleration across all 3 axises so that my app is more response to user movement. This required the vector magnitude formula, as acceleration is a vector quantity (meaning it has direction and magnitude). The formula is applied by squaring and adding up all the axises together, and then square rooting them to find the magnitude. This gave me a totalAccel value for the acceleration that took into account all 3 axises.

**Reference Code:**  var totalAccel = Math.sqrt(accel.x * accel.x + accel.y * accel.y + accel.z * accel.z);

4) If the total acceleration goes above the limit, the program labels that as a steps and increments the stepCount.

**Reference Code:** if (totalAccel > accelLimit) { 
                     stepCount++;


5) The lastUpdate variable is updated to correctly equal to the current time.

**Reference Code:** lastUpdate = currentTime;
