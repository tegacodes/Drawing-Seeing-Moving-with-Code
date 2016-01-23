##Set up
  * Download [latest version of p5js here](http://p5js.org/download/)
  * Setup with a text editor, I recommend [the atom text editor](https://atom.io/) but you can use any that you like. There are some details of the set up here [http://p5js.org/get-started/](http://p5js.org/get-started/) under the environment section.
  * Overview file structure
  * Your first p5 sketch
  * Starting a local server:  

*On a mac:*
  
  * Open a terminal window (in Applications/Utilities/ and cd to your sketch directory
  * ```python -m SimpleHTTPServer 8000```
  *  In your browser then go to localhost:8000 and this will serve whatever is index.html
  
*On a pc:*

* Windows doesnt have a built in command line but never fear you can install one for free. [Download Gitbash](https://git-scm.com/downloads), here's [a video](https://www.youtube.com/watch?v=albr1o7Z1nw) that walks you through this.  
* To start the server. Open up the command line and do the above. 
* It is also possible (and gives faster results) to start a server with node. [Instructions are here.](https://github.com/processing/p5.js/wiki/Local-server)



##Getting started with Github

* We're going to be using github in this class. Git is source code management software that allows version control. We're going to be using Github which is one of many code management sites aroundt. We're going to be running through how to use github from the command line. But it's also fine to use their desktop client. 
* Sign up for a Github account here: [https://github.com/](https://github.com/)
* Download the Github client so you have it: [Github client](https://desktop.github.com/)
* Fork the class repository to your own account
* Create a local version of this repository
* Make an edit
* Commit the changes back to your online repository.
* The most important Git commands you need are:  

     
```git status``` - gives the status of your repo  

*To upload, there are 3 steps:*  
```git add .``` - stages your files for commit  
```git commit -m "your comment here"``` - commits changes for upload  
```git push origin master``` - pushes your work to your external repository online  

*If you have made changes online and want to bring them into your local repo:*  
```git pull``` - pull in any changes from the remote  


##Introduction to p5js
* Yes it's [Javascript](https://www.instagram.com/p/BA0-Vxvmj5f/)
* Transitioning from Processing: [https://github.com/processing/p5.js/wiki/Processing-transition](https://github.com/processing/p5.js/wiki/Processing-transition)
  
  