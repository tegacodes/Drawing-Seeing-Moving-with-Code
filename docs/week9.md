#Week 9 Tutorial

* Assignment 2 was due last week and 2A is due this week. Ensure you uploaded a zip of your first iteration of this assignment into the Moodle dropbox from last week. Labelling the zip with your name and title.
* You may want to review some of the live web examples and incorporate something very simple in your assignment for the final iteration. It is also fine to develop it and refine it without the live web functionality.
* Finalize and finish this project during the studio this week, fix bugs, comment your code and document your work well. Get ready to submit on Friday. Submission requirements are below.
* Review and check you have submitted Research and Discovery posts so far. These should be submitted either as markdown/text files in your own github repo. If you do this, send me links in an email. Or put your work in a word doc, export as a pdf and upload to the Moodle dropbox. You should have done Research posts from W1: Creative tools and W6: Artificial Life.

##Assignment 2B submission requirements:
* You must deploy your p5 sketch online to a heroku instance or equivalent. To submit your code you can EITHER post all your code to your github repo and send me a link to it. Or zip all your code and files into a zip folder and submit to class Moodle assignment box.
* Documentation: To explain your project you are to either make a github markdown page or a pdf document that describes your project. This page should include. A title, your name, a description of what happens in your program, a short paragraph of the challenges/surprises your faced in the process, a list of the different species in your system, and at least 3 screen shots showing the evolution of your system. Add captions to these screen shots. This document should also have a link to a live version of this project online and a bibliography listing any references you may have used in the making of this project.
* If you are using github for submissions, add this markdown file as a README.md to your project repository and add to your own course repository online. If you are submitting via Moodle, add your file to your project folder. Zip up the folder and upload to the class Moodle, labelling with your name and Assig2A

## Deploying your project to Heroku

Make sure you have cd 'ed into the project folder that you want to deploy to heroku.
### Initialize a git repository

Make your local folder a Git repository. This adds a .git folder to the current directory and makes it possible to start recording revisions of the project. It is a bit of software that tracks what version is in your local folder and what version is in your remote folder (on the server), it is what github is built with. You do this by:

```
git init
```

Create a .gitignore file and put node_modules in it. This command will do this:

```
echo 'node_modules/' >gitignore
```


###Authenticate with Heroku

Sign up for a [Heroku account.](https://signup.heroku.com/www-header) Choose node.js as your development language. Login to your account and follow the instructions to download and install the Heroku toolkit for your operating system from here. (https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up).  

Login to heroku:  

```
heroku login
```

and enter your heroku user name and password.

###Create Heroku instance and put your app on this server.

You can do this with the following command. This creates a placeholder for where we will upload your new app on the Heroku server. Doesn’t matter what you call it here, its just for your future reference. I’ve called mine myAwesomeProject.

```heroku create myAwesomeProject```   
You should see text print out in the terminal like:    
```
Creating filebotty… done, stack is cedar-14
https://filebotty.herokuapp.com/ | https://git.heroku.com/filebotty.git
```

You can check also this worked by going to the heroku website and now looking at the menu option myApps where you should see the name of your app in the list.  

Add a Procfile (Heroku needs this in order to know what to do with your server). Create a new file called Procfile (no extension) if there is not one already in your repo, and stick this in:

```
web: node server.js
```
You can do this as follows:
```
echo 'web: node server.js' >Procfile
```

###Add your files  
Set this up as your remote directory so that it will upload.  (This is the same as how you upload to the github server). Use the command:
```
git add .
git commit -m 'initial commit'
```
### Deploy

```bash
git push heroku master
```

###Making Changes.
If you make changes and need to update your repo, Commit your change to the git repo:

```
git add .
git commit -m 'added procfile for heroku'
git push heroku master
```

###Where's my app?
You should then be able to see your app online. THe boxes example is here: [http://boxes1.herokuapp.com/](http://boxes1.herokuapp.com/)

Or you can see yours at:
http://YOURHEROKUINSTANCENAME.herokuapp.com/
