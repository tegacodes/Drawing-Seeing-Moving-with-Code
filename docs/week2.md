#Loops and Trigonometry

####Update Git
* Update your fork of the class repository. ([Instructions from here.](https://help.github.com/articles/merging-an-upstream-repository-into-your-fork/))
  * First make sure your online repository has your homework. If it hasn't, [push your changes to github (see section on this here.](https://github.com/tegacodes/Drawing-Seeing-Moving-with-Code/blob/gh-pages/docs/git.md)
  * Then in the terminal cd to whereever your local repo is - this is whereever you have been working
  * Make sure your remote and your local repos are synced. (`git status`) will tell you this
  * You may need to `git pull` which will bring in your online changes to your local repository
  * Now your local and your remote version should be matched. `git status` showing no red lines!
  * Now you are going to pull in the new examples for this week from the master repository to your local. `git checkout gh-pages`
  * And pull the updated branch from the main repo
  `git pull https://github.com/tegacodes/Drawing-Seeing-Moving-with-Code.git gh-pages`
  * Fingers crossed you have no merge conflicts. (If you do, talk to me)
  * Push your now updated local repo to your repo online `git push origin gh-pages`
* Github markdown. You may with to use Markdown reader such as [MacDown for mac](http://macdown.uranusjr.com/) or [Markdown pad for windows](http://markdownpad.com/)

###Using a local server

* There will come a time when you want to load images or fonts or sound into your sketch. This means we have to use a local server. [Follow these instructions to get one set up.](https://github.com/processing/p5.js/wiki/Local-server)

###Examples
* Try the load image example to see a local server in action.
* Trigonometry review and loops. All these example are in folders in your

####Load an Image
* [Example 2.4: Load an image](https://github.com/tegacodes/Drawing-Seeing-Moving-with-Code/tree/gh-pages/code/2-4-LoadImage/image-1)
* [Example 2.4: Load an image with a callback](https://github.com/tegacodes/Drawing-Seeing-Moving-with-Code/tree/gh-pages/code/2-4-LoadImage/image-2-callback)


####Trigonometry
*See chapter 3 in [Nature of Code.](http://natureofcode.com/)*  
Angular motion

* [Example 2-3: Trig angularVel](http://codepen.io/tega/pen/BjVEzE?editors=0010)  

Polar & Cartesian coordinates  

* [Example 2-3: Trig circularMotion](http://codepen.io/tega/pen/pgKBEj?editors=0010)  

Oscillation

* [Example 2-3: Trig sinWave](http://codepen.io/tega/pen/zraXKZ?editors=0010)  
* [Example 2-3: Trig sinScaling](http://codepen.io/tega/pen/rxKbqz?editors=0010)  
* [Example 2-3: Trig sinCosMotion](http://codepen.io/tega/pen/EPRJGQ?editors=0010)


####Loop Example

* [Example 2-2: Loop with frame Export](http://codepen.io/tega/pen/MKQpOX?editors=0010)



###Tutorial Outline

####Submit your Week 1 homework

* Pull request to Github (submit your homework)
  * Now you have everything synced and updated. Let's make your first pull request. This is where you are asking to add your new work to the class repo.
  * First navigate to your online repository
  * Find the *New Pull Request* button. Press it and you should see information on the changes between your repo and the main one. Create the request and I will then accept.
  * Well done! You've made your first pull request.

####Trigonometry Exercises
* See chapter 3 in [Nature of Code.](http://natureofcode.com/) or this draft primer [on trig over here.](http://www.trig.tegabrain.com/)
* With one line of code, transform the circular motion example into a spiral (see the trig chapter reading for more on this)
* Create a pulsing sketch where a color oscillates with sine. (You could hack the sinScaling example using sin to change the color rather than the scale).


###Deliverables:

* Read this excerpt from the [trig chapter from Nature of Code here to better understand the trig examples.](https://github.com/tegacodes/Drawing-Seeing-Moving-with-Code/blob/gh-pages/docs/readings/NoC-Oscillation.pdf) I have blanked some of the text out, so as not to confuse you with stuff we havent covered yet. It goes over the difference between transformations and sin and cos equations. It is a chapter from Shiffman's Nature of Code.
* Do the two exercise listed above.
* Read the [Project 1 brief in detail](https://github.com/tegacodes/Drawing-Seeing-Moving-with-Code/blob/gh-pages/docs/project1.md). Take a look at the examples of loops from the links and blogs in this outline. Review [this video of some past student work to get a sense of how the prints come out](https://vimeo.com/123751930). Start your project by doing a series of at least 3 hand drawn sketches of how your loop will work. Scan or take photos of these images and make a folder for these images in your student folder in the repo, you will be using them in a post on your project process post and that will be made as a markdown file. Come to class with your project process and code experiments for refinement next week. You will have most of class to work on your lenticular loop, the project will be due for upload by Monday at midnight.
* If you are interested. [Here is a short history of Javascript.](https://www.w3.org/community/webed/wiki/A_Short_History_of_JavaScript)
