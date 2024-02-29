**Documentation For Developers Wanting To Maintain This App**

**index.html Functions:**

**1) toggleUserDoc**
-  function toggleUserDoc() {

Explanation: 
- The toggleUserDoc function shows / hides an image demonstration for users when the button titled "How to do it:" is clicked.

- The closePopup function closes the popup when the button titled "close button" is clicked.

**script.js Functions:**

**1) submitValues**
- function submitValues() {

Explanation: 
- The function sets the stepGoal/calGoal values to the user-inputted values.
- The function then uses "parseInt" to convert the value from a string to an integer
- The function then checks if either input is invalid by using "isNan" if so, it outputs an alert, forcing the user to retry their input. If input is valid, it takes the user to the home page.
- The function stores the items in local storage so that they can be saved and retrieved in the home page

**home.html Functions:**

**1) requestMotionPermissions:**

- function requestMotionPermissions() {

Explanation:
- This is the standard function for requesting motion permissions. There is no reason to change it.

**2) checkPermissions**

- function checkPermissions() 

Explanation: 
- This functions checks if the user is on mobile view and if permission hasn't already been granted. If both conditions are met, it will pop up the request motion permissions buttion. It retrieves the permission state from local storage so that the popup doesn't appear every time you refresh page.

**3) **checkDesktopView**

- function checkDesktopView() {
  if (window.innerWidth > 1025) { // Limit for desktop screen
        alert("Warning: App does not work on desktop. Please launch on mobile.");
    }}

Explanation: 
- This function checks if the user is viewing the page on desktop, if so, it will provide user feedback, warning them to launch the app on mobile

**4) **updateStep/CalCounts**

- function updateStepCount() { 

Explanation: 
- Updates the displayed stepCount and calCount by grabbing the stepBox and calBox elements and swapping them with the current stepCount and calCount values.

**5) updateStepGoalBox**
f
unction updateStepGoalBox()

Explanation: 
- This function updates the displayed stepGoalBox progress bar and also displays the stepGoalValue. 
- If stepGoalValue is a valid number, it will calculate the progressPercentage. To ensure the progressPercentage doesn't exceed 100%, the function checks if the percentage has surpassed 100, and if so it sets it back to 100.
- The width percentage of the bar is set to the progress percentage, thus allowing the displayed progress bar to match the progressPercentage value.

**6) calConversion**

- function calConversion() 
Explanation: 
- This function converts the steps into calories using the ratio 1 cal = 20 steps. It works by saving the stepCount before the function is called as stepCountOld. It then compares the stepCountOld to the current stepCount, if they differ by 20, then calCount is incremented by one.

**7) startStepTracking**
Explanation: This function is used to track the steps, but given its more complex than the other functions, please read Explained StepTracker Logic.md to gain an understanding of how it all works. It should be attached in the github project within the main branch.

**records.html Functions:**

**1) makeEasyChallenge, makeMediumChallenge, MakeHardChallenge**
 
Explanation: 
- All three functions generate a random timed step challenge for the user to complete, however each one varies in difficulties like their names suggest. The functions work by randomly choosing a challengeStep and challengeTime value from a range of numbers (in this case both variables can range from 80-100). After this. The variables are displayed to the user inside the challenge box, letting them know the objective for the challenge.
It then saves the variables to localStorage so that they can be used by another function when the challenge is active.

**2) function startChallengeStepTracking()**
Explanation:
- Works in the exact same way as the startStepTracking() function from home.html, except it decrements the variable challengeStepCount, instead of incrementing the variable stepCount. It's basically just a re-used function slightly modified for the purposes of the challenge mode.

**3)  **startChallenge and startTimer** 

Explanation:
- The startChallenge function begins the challenge selected by user. It gets the challenge's step count and time limit from localStorage, hides the challenge selection box, and displays the active challenge box with the steps remaining and the time left. It also starts the challenge timer by calling the startTimer function.
- The startTimer starts and handles the timer. If a timer is already running, it clears the existing timer to prevent any conflict between them. The timer counts down each 1000ms (1 second), updating the UI with the time left. If time runs out and the challenge is incomplete, it alerts the user to try again and hides the active challenge box. If the challenge is completed within the time limit, it congratulates the user.

**log.html Functions:**

**1) submitForm**

Explanation:
- The submitForm function gets user input from an exercise form, validating the input and displaying the information inside a generated resultBox.
-  It first checks if the "Distance Travelled" input (progressValue) is a numerical value, alerting the user and forcing them to retry input if not.
- A new div element (resultBox) is created for each form submission, displaying the date, exercise type, progress, and any additional notes the user entered. 
- The resultBox is added to top of a container (resultsContainer) on the webpage, this way, the most recent submission is displayed first. This enhances the UX by organising data.
- A close button is added to each resultBox, if clicked, the resultBox will be removed from the DOM.




