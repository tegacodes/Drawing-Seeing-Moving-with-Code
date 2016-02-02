##Need to push your homework to git?

####There are 3 steps:  

1) ```git add``` - stage a file for commit, use (```git add path of file```), ```git add .``` which will add all modified files (careful with this one!), also responds to wildcards (like *.txt adds all .txt files)

2) ```git commit -m "your comment here"``` - commits changes for upload with a comment. If you forget to add the comment, you will get stuck in a weird text editor program called VIM. It's a pain. Press ```esc``` and then ```:wq``` to exit.

3) ```git push origin 'your branch name'``` - pushes your work to your external repository online (we're using github), note the branch name is for us is ```gh-pages```.  

* If you get some errors saying commit not made due to the upstream being ahead of your repository, pull the changes from the remote first. ```git pull``` Then try these three steps again.
