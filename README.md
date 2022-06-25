# AngularHttpCrud1

## Getting Started

### Cloning the Project

To have a local copy of the project to work on clone the repository using the command `git clone https://github.com/The-Azure-Coder/Angular-group-crud.git` in the terminal.

This will create a folder called `Angular-group-crud` in the directory specified in the terminal. Use the command ` cd Angular-group-crud` to change the directory into the project folder.

### Installing the Dependencies.

node_modules which contains all the modules for this project is selected to be ignored to reduce project size. Therefore to retrieve all the dependencies of this project run the command `npm install` which will install the dependencies defined in the package.json file.

### Starting the Server.

We are using a dummy server to behave as the database. In order to start the server, run the command `npm run server`. This will call the npm script described in the package.json file and starts the server.

### Run the Application.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Making Changes.

### Creating branch

To make changes to the application you must first create a branch which will house the changes you will make.
From the terminal run the command `git checkout -b <branch name>` to create a branch with the name you specify then swith from the main branch to that branch.

### Commiting Changes

Before you make a change ensure that you the most updated version of the project run the command `git pull`.
After you make the necessary changes to the project, run the command `git add .` which adds all the changes to the staging area to signal that its ready to be committed. After which run the command `git commit -m "<message that describes the changes>"` to make changes to that branch.

### Publishing the change for review.

Before you propose a change, run the command `git pull` to check for change again. After you have confirmed that you have the most latest version, run the command `git push origin --set-upstream <your branch name>` to push the branch with the changes to the project repository.

### Seeing all changes in your branch.

You can view all the code from the other branches in the repository, on your machine by running the code `git fetch` in your terminal. This will check the repository for changes that are not in your branch. If any is found, it will ask if you wish to pull in those changes to your branch. This can be done by running the command `git pull`.
