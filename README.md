# Workout Tracker

## Description
This workout tracker helps you better track your resistance and cardio workouts in order to reach your fitness goals. 

The app lets the user input and view the statistics of all recent workouts that they have inputted. 

The app utilizes a Mongo database with a Mongoose schema. Routes are all handled with Express. 

## User Story
```
As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.
```

## Technologies Used
HTML, CSS, JavaScript, Mongo DB, Mongoose
NPM Packages: Express, Morgan, Mongoose

## Demonstration & output
Deployed Site: https://workout-tracking-application.herokuapp.com/

Output: 

Step 1: Click "New Workout" to add a completed workout
![Screen Shot 2020-07-06 at 4 25 20 PM](https://user-images.githubusercontent.com/60197994/86639050-4ddc9700-bfa6-11ea-8dc2-1620514667ba.png)

Step 2: Indicate your type of workout from "Resistance" and "Cardio"
![Screen Shot 2020-07-06 at 4 25 36 PM](https://user-images.githubusercontent.com/60197994/86639136-6fd61980-bfa6-11ea-8805-9deee926fad3.png)

Step 3: Add in the details of your workout. To add another excercise click "Add Exercise", otherwise click "Complete"
![Screen Shot 2020-07-06 at 4 25 55 PM](https://user-images.githubusercontent.com/60197994/86639141-706eb000-bfa6-11ea-9fc1-4edd1193fb5a.png)

Step 4: This page shows a total summary of your daily workout
![Screen Shot 2020-07-06 at 4 26 17 PM](https://user-images.githubusercontent.com/60197994/86639143-71074680-bfa6-11ea-8840-b975fc50c080.png)

Step 5: If you would like to see your workout as a graph, click "Fitness Tracker Dashboard" in the upper left hand corner
![Screen Shot 2020-07-06 at 4 31 59 PM](https://user-images.githubusercontent.com/60197994/86639106-651b8480-bfa6-11ea-9cc9-a591d1b6b51c.png)