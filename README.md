# 2024SDD-Rayan-AeroFit 
AeroFit is a beginner-friendly and simplistic step-tracking app made to help beginners reach their fitness goals. The application comes with three main features, a step tracker, fitness logbook, and a timed challenge mode. 

## Step Tracker 
### Core Features: 
- The Step Tracker uses accelerometer data and time between steps to accurately track user steps.
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
- **Entry Creation**: Each log submission generates a new entry in the logbook with the corresponding information inside and formatted.
- **Date Tagging**: Automatically tags each entry with the current date in a day-month-year format.
- **Deletable Entries**: Entries can be easily removed from the logbook by clicking the 'x' button.

### Preview:

<img src="https://i.ibb.co/G37TWZY/Screenshot-2024-02-29-at-8-18-09-pm.png" width="20%" height="10%">

## Timed Challenge Mode
- **Step Count Tracking**: Uses acceleremoter data to track the user's steps in real-time.
- **Difficulty Levels**: Users can select challenges based on their difficulty
- **Random Challenges**: Each difficulty level generates a randomised challenge, making each one a unique experience.
- **Countdown Timer**: A timer counts down the remaining time for the challenge.

### Preview:

<img src="https://i.ibb.co/mtnLs3h/RPReplay-Final1709198872.gif" width="20%" height="10%">


## User Documentation

**I have enhanced User Documentation by using:**
- A help page
- Popups which guide user

### Help Page Preview: 

<img src="https://i.ibb.co/fNJJNXt/helppage.gif" width="20%" height="10%">

### Popup Preview: 

<img src="https://i.ibb.co/r4kcwLh/popup.gif" width="20%" height="10%">





## Error Prevention

I have ensured multiple errors are avoided. Here are a few examples:

### Invalid Input Prevention:

<img src="https://i.ibb.co/DD3RjcB/error1.gif" width="20%" height="10%">

<img src="https://i.ibb.co/fMZWMSx/error2.gif" width="20%" height="10%">

### NaN Error Prevention
- If goal values are invalid, they are detected and defaulted to zero.
```javascript
stepCount = parseInt(localStorage.getItem('stepCount')) || 0;
```






### Progress Bar Overstretching Prevention:
```javascript
 if (progressPercentage > 100) {
            progressPercentage = 100;}
```


# Developer Notes:
This app was created by me for my Year 12 Software Design & Development Major Project. It was created with HTML and Javascript and makes use of multiple API's.
