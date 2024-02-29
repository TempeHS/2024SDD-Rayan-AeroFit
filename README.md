# 2024SDD-Rayan-AeroFit 
AeroFit is a beginner-friendly and simplistic step-tracking app made to help beginners reach their fitness goals. The application comes with three prominent features, a step tracker, fitness logbook, and a timed challenge mode. 

## Step Tracker 
**Core Features:**
- The Step Tracker utilises accelerometer data and time between steps to track user steps accurately.
- Step-Goal progress bar shows accurate progress towards goals
- Calorie conversions use a standardised ratio of 1cal:20steps to track calories
- Main page uses local storage to detect if motion-permissions have been activated. If not, it guides the user to do so, thus automating the setup process.

**Challenges I faced:**
I had to overcome numerous roadblocks when trying to implement this code. 
- My first plan was to write an algorithm that detects changes in distance by using the GeoLocation API. This method failed as the GeoLocation API tracks displacement from a single point of origin, which wouldn't track steps. (E.g: Walking back and forth would result in steps going up and down).
- After that, I scratched my plan of using GeoLocation, and decided to only use accelerometar data via the deviceMotionEvent to simplify the algorithm. When I first implemented the code, it tracked motion, but it was too sensitive and detected even the slightest movement as a full step. The excess sensitivity made tracking steps impractical.
- I did some research into the deviceMotionEvent and found that you could include gravity into the equation (event.accelerationIncludingGravity). Just adding that to my code  improved i's accuracy. Furthermore, I learnt you could add a minimum time delay in order for a step to be registered. These two implementations alone cancelled out many false steps.



research other step-trackers and try and learn how to make my own. However,  






**How It Works**

<img src="https://i.ibb.co/3kPQgZM/RPReplay-Final1709196170.gif" width="20%" height="10%">

This app is designed for individuals who prioritize simplicity and ease of use in their fitness journey. It’s built for those who want to focus on the fundamental aspects of health, such as cardiovascular fitness and weight loss, without being overwhelmed by detailed tracking and planning.  By focusing on essential health metrics and removing unnecessary intricacies, the app is able to provide a streamlined approach to fitness.
