# 2024SDD-Rayan-AeroFit 
AeroFit is a beginner-friendly and simplistic step-tracking app made to help beginners reach their fitness goals. The application comes with three prominent features, a step tracker, fitness logbook, and a timed challenge mode. 

## Step Tracker 
### Core Features: 
- The Step Tracker used accelerometer data and time between steps to track user steps accurately.
- Step-Goal progress bar shows accurate progress towards goals
- Calorie conversions use a standardised ratio of 1cal:20steps to track calories
- Main page uses local storage to detect if motion-permissions have been activated. If not, it guides the user to do so, thus automating the setup process.

### Preview:


<img src="https://i.ibb.co/3kPQgZM/RPReplay-Final1709196170.gif" width="20%" height="10%">



**Challenges I faced:**

I had to overcome numerous roadblocks when trying to implement this code. 
- My first plan was to write an algorithm that **uses distance for step-tracking using the GeoLocation API**. This method failed as the GeoLocation API **tracks displacement** from a single point of origin, which wouldn't track steps. _(E.g: Walking back and forth would result in steps going up and down)_.
- After that, I scratched my plan of using GeoLocation, and decided to only use accelerometar data to simplify the algorithm. This worked far better and was more feasible for this project.

## Fitness Logbook
### Core Features:

#### Submission Form:
- **Exercise Type Selection**: Users can select an exercises.
- **Distance Tracking**: Input for tracking the distance covered, allowing selections between kilometers and steps.
- **Additional Notes**: A field for users to add any notes about their exercise session.

### Preview:

<img src="https://i.ibb.co/rbKcjmZ/logbooktutorial.gif" width="20%" height="10%">


#### Generated Entries:
- **Entry Creation**: Each exercise log submission generates a new entry in the logbook with the corresponding information inside and formatted.
- **Date Tagging**: Automatically tags each entry with the current date in a day-month-year format.

### Preview:

<img src="https://i.ibb.co/G37TWZY/Screenshot-2024-02-29-at-8-18-09-pm.png" width="20%" height="10%">



### Error Prevention:



 





**How It Works**

This app is designed for individuals who prioritize simplicity and ease of use in their fitness journey. It’s built for those who want to focus on the fundamental aspects of health, such as cardiovascular fitness and weight loss, without being overwhelmed by detailed tracking and planning.  By focusing on essential health metrics and removing unnecessary intricacies, the app is able to provide a streamlined approach to fitness.
