# BetterMe
As a person who always has a handful of habits I would like to be building, I wanted to create an app to keep track of them. Most apps are geared towards a specific type of habit, but BetterMe provides users an organized space to create and track many different habits simultaneously, with a visual representation of their progress. 
  

## # To run this app, follow these instructions:
Make sure you have Node.js and npm installed
1. `git clone` repository URL
1. `cd` into the directory it creates
1. `npm install` `npm i --save react react-dom react-router-dom reactstrap` `npm install @material-ui/core`
1. `mkdir api` and `touch database.json` to create the database
1. In your `database.json` file, copy and paste the following empty arrays: 
    `{
        "habits": [],
        "colors": [],
        "users": [],
        "notes": [],
        "habitReps": []   
    }`
1. Serve JSON file utilizing `json-server -w database.json -p 8088`
1. In a new tab in your terminal, `npm start` from the repository directory
1. This app was designed for mobile screens, so press command + option + j (for Macs) or control + shift + j (for Windows) to open Dev Tools, click Toggle Device Toolbar to change browser view
1. Go to the localhost in your browser and register an account (`localhost:3000/login`)

## # Features

* User can create a new habit, including start date, frequency, optional goal, details, as well as associated color. 
* User can edit and delete habits
* User can add a "habit rep" (past or present) for each time they've completed the habit. A visual representation of their habit reps will be rendered on main, and a list of dates of completed reps is on each habit details page
* If the user has defined a goal, the habit details page will keep track of how many reps they've completed out of their total goal. The main page will alert them when they have reached their goal.
* User can add notes to each habit.
* Each note can be edited and deleted
* User can archive a habit. (It will be listed on "Saved For Later" and can be added back to the dashboard at any time.)

## # Planning Links
1. [ERD](https://dbdiagram.io/d/5f57e94988d052352cb67029)
1. [Wireframe](https://www.figma.com/file/VADBqiGQGxrGH5Sx3XRQzE/Capstone?node-id=0%3A1)


[Esther Sanders](https://github.com/estherviolin)  
