#Getting started with Git

* Read [about version control](http://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) and [read through this excellent introduction to git](https://sklise.com/2012/09/22/introduction-to-git/)
* As outlined in the tutorial you should have signed up for a Github account here: [https://github.com/](https://github.com/)
* Download the Github client so you have it: [Github client](https://desktop.github.com/). I occasionally use the Github client in moments when I've been confused by the command line.

##Basic setup
Although this is install and setup is covered in the introduction to git (linked above), here are the key steps again:

###Install:
*Mac OSX*
* You can also install Git via the download from the [git website](http://git-scm.com/download) or through package management tools such as Homebrew and Macports.  

*Windows*

* Install [Git for Windows](https://git-for-windows.github.io/) which includes a Unix-like Bash terminal environment that matches the commands in the Try Git tutorial.  
* If you're familiar with the Win/DOS Command shell but are new to Bash, check out this [DOS - Bash command comparison.](http://www.yolinux.com/TUTORIALS/unix_for_dos_users.html)  

*Linux*
* Install git through your distro's package management system

###Configure Git

* Set you username and email address (only need to do this once).  
```$ git config --global user.name "YOUR_FULL_NAME"```  
```$ git config --global user.email "YOUR_EMAIL_ADDRESS"```  
* Turn on git colors with makes reading status and diffs much easier (only need to do this once). You shouldn't need to do this if you're using the Git Bash installed by Git for Windows.  
```$ git config --global color.ui true```  

###Command line basics
 
```ls``` - list file in directory  
```pwd``` - shows the path of your current location  
```cd``` - change directory, follow with the name of a folder in your current location or a path  
```cd ..``` - follow with .. to go up a directory  
```mkdir``` - make a new dir  
```touch``` - create an empty file or update the timestamp on an existing file  
```rm``` - follow with a file name to delete file  
```cp``` - follow with a file name to copy file  
```mv``` - follow with a file name and then a location to move file to new location  
And for some fun:  
```say``` - gets your computer talking, follow with a phrase or word  

Be careful, from the command line you can do many more things than from a finder or GUI. It is possible to delete and move system files in ways that can break your OS. Make sure you think about what you are doing and ask me in class or via the code forum if you are worried about something you are trying to do.  

###Git command line basics  
```git init``` - initialize git in your local directory  
```git status``` - gives the status of your repo  

####To upload, there are 3 steps:  
```git add``` - stage a file for commit, responds to wildcards like *.txt (adds all .txt file) and . which refers to all modified files (careful with this one!)  
```git commit -m "your comment here"``` - commits changes for upload with a comment  
```git push origin 'your branch name'``` - pushes your work to your external repository online (we're using github), note the branch name is for us is gh-pages.  

####If you have made changes online and want to download them to your local repo:  
```git pull``` - pull in any changes from the remote    

Other commands:  
```git checkout``` - switch to a branch, commit, or tag; the base location is the master branch  
```git rm``` - remove a file or folder form the staging area, removing a modfied file may require the -f argument to force it, -r adds files recursively (useful within folders).    
```git mv``` - move or rename files or folders, only works for files currently managed by git (aka added previously)  
```git branch some_branch``` - creates a branch called "some_branch"; don;t forget to switch to it using git checkout!  
```git merge some_branch``` - merge a branch into the current branch, in this case merge "some_branch" with "master"  
