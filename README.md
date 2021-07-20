# Overview

Frontend capstone project to implement a product page at a generic clothing company. The existing page is outdated and slow, so we will first update the page to be more user friendly and then optimize the experience.

# How to setup

1. Run `npm install` inside the project directory to install dependencies.
2. Ensure any relevant database processes are running (NOT SETUP YET)

# How to start the app (locally)

1. Navigate to the main project directory at the top level.
2. Run `npm run server` to initialize the server (which will reload on changes using nodemon during development).
3. Ensure there are no errors in the terminal. A message should display which reads `Server connected on port 8000`.
4. Confirm the server responds with `Server active!` to a generic get request to the endpoint `https://localhost:8000/api` using Postman.
5. Run `npm run build` to initialize the webpack transpile and bundle process.
6. Ensure there are no errors in the terminal. You must run the install command before this step..
7. Navigate to `https://localhost:8000` in your browser and ensure you can see "Wingardium Leviosa" or similar text displayed.