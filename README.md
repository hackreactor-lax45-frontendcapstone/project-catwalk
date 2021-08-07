# Overview

Project Catwalk

Frontend-focused project to implement a product page at a generic clothing company. The page will be updated with dynamic components to improve user experience and bolster sales.

Built in React-Redux, stylings done in vanilla CSS, with a Node Express server for API request routing, and deployed to AWS EC2 instance.

# Table of Contents

1. Description
2. Installation
3. Usage
4. Team Members
5. License

# 1.0 Description

The Project-Catwalk site was built with a React 16.0 front end and uses Redux for state management. A node express server serves up the site on an AWS instance, which was utilized at the time of development. (Note instance has been deactivated to save on hosting costs for this project). The express server utilizes custom routing and controller to allow the front end components to independently and asynchronously updated as necessary, which minimizes the amount of data transmitted during live site deployment to only that data which needs to be updated based on the action initiated.

Styling was completed using vanilla CSS and flexbox for educational pursposes, though the team did briefly explore Boostrap-React and SASS libraries to understand their offerings.

All components are built to follow strong 'separation of concerns' best practices, such that any team member has full domain over a particular feature, route, behavior, or other aspect of the site without causing conflict with another existing aspect.

Key features of the site include:
- Click Tracking available to entire site to track user activity and interaction behavior
- Image gallery with three (3) settings: default view, expanded view, and zoomed view
- Style selector with flexible icons and custom 'check mark' indication of selection (reused for image thumbnail selection)
- Add to Cart which limits quantity per customer, and ensures stock provided to customer for purchase matches inventory.
- Integrated share with various social media sites (Facebook, Twitter, etc.)
- Related product cards which allow a "feature comparison" modal upon selection of the "star" on each product cart
- Outfit tracking, specific to the customer who is accessing the particular site instance, which persists between product windows
- Question and Answer generation, with helpfullness markers and reporting features
- Search feature for Q&A
- Ratings and Reviews generation, also with helpfullness markers and reporting features
- Ratings summary and product characteristic summary (size: too small, quality: perfect, etc.)

# 2.0 Installation

1. Run `npm install` inside the project directory to install dependencies.
2. Create a `config.js` file in the `./server/config` directory from the provided example file.
3. Your personal access token from github should be included in the `config.js` file.
4. ** Warning ** Make sure you don't put your github token in the `example.config.js` file!

# 3.0 Usage

1. Navigate to the main project directory at the top level.
2. Run `npm run dev:start` to initialize the webpack transpile and bundle process in development mode.
3. If you wish to start in production mode, use `npm run start` isntead.
4. Ensure there are no errors in the terminal. You must run the install command before this step.
5. On your local machine, navigate to `localhost:3000` and the website will be displayed with the default product ID.
6. For the most powerful spell in the Harry Potter universe, checkout `localhost:3000/hello`.
7. At the time of development the website was accessible on the internet via an AWS EC2 instance configured by the development team.

# 4.0 Team Members

* [Sean Lawlor](https://github.com/lawlorseanr) - Scrum Master / Product Owner / Development Team
* [Anna Lee](https://github.com/dlthfl87) - Product Owner / Development Team
* [Jooyoung Kim](https://github.com/jky0420) - Product Owner / Development Team
* [Tyler Jones](https://github.com/tyler-audio) - Product Owner / Development Team

# 5.0 License

Please cite the authors of this repo where you use it.