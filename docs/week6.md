#Week 6

##Artificial Life
Build a virtual online ecosystem.

##Git Update
* Maintain your local repository. Submit your homework via a link to your folder for this week or via dropping a zip of this folder into the Moodle dropbox.
*  I will update to the class folder. 
*  Note the new drag and drop functionality.


##Looking inside p5
* [Inside p5js video](https://vimeo.com/142953316)

##Local Server

* What is a local server and why do we need to use it sometimes?
* [How to get it running?](https://github.com/processing/p5.js/wiki/Local-server) 
* Using images (compared to Processing). As Javascript runs asynchronously, we need to handle loading images in a different way to Processing by loading them in a function called preload. Or by using a call back function - See Image 2 example. 
On a mac:
Running SimpleHTTPServer
Your job is to get terminal to point to the directory on your computer where you are storing your p5.js work. On my computer I've got a ton of examples in a directory called "The-Nature-of-Code-Examples-p5.js". So I'm going to browse to it by doing the following.

$ cd /Users/shiffman/Documents/noc/The-Nature-of-Code-Examples-p5
(You don't need to type the '$' I'm just using it to represent a prompt.)

Once I'm there, I can start up a web server with the following command.

$ python -m SimpleHTTPServer
I should then see:

Serving HTTP on 0.0.0.0 port 8000 ...
This means the server is up and running at localhost on port 8000. And this means I can type http://localhost:8000/ into the address of a web browser and I'll see:




##Review: NoC so far
This week we will be reviewing and getting up to speed on our progress with Nature of Code. 

* Review of motion and distribution: [noise()](http://codepen.io/tega/pen/MKMQxX?editors=0010), random(), [gaussian()](http://codepen.io/tega/pen/RrzQdr?editors=0010#), [probability().](http://codepen.io/pen/?editors=0010)
* Review of vectors so far...  NoC: p27-52.

##Vectors

* What is a vector? 
* Differences with Processing
* [p5.Vector class](http://p5js.org/reference/#/p5.Vector)
* [Normalize a vector.](http://codepen.io/tega/pen/EPBQzM?editors=0010#)
* Mover example reviewed - [object and vectors.](http://codepen.io/tega/pen/jWjZjZ?editors=0010)
* Static and non static functions - review example: code/5-1-Vectors/1.92-Static-vectors. Do exercise 1.7, see example in p5js in code folder [or here.](http://codepen.io/tega/pen/xZoyWm?editors=0011)
* Interactive Mover -> See 1.93. Can you make the movers move towards a different point? Do exercise 1.8 in NoC. 
* Let's make an array of movers. -> See example.

##Forces
* Chapter 2. Newtons laws. YES!

##Deliverables

* Read through the [Introduction of Mitchel Whitelaw's metacreation.](https://github.com/tegacodes/Drawing-Seeing-Moving-with-Code/blob/gh-pages/docs/readings/mitchell-whitelaw-metacreation-art-and-artificial-life.pdf)
* Use the mover class to create a virtual creature using vectors. Your creature should have specific movement characteristics. See page 62 of NoC. 
* Complete the helium balloon using force simulation, first without mass and then introducing mass. 
* Continue with forces. [Watch 2.1 to 2.4](https://www.youtube.com/watch?v=II1A3bBo6gM&list=PLRqwX-V7Uu6ZRrqLcQ5BkBKmBLiGD8n4O) and refer to chapter 2 in NoC (up to page 88). Do exercises up to 2.7.
* Bring an example of an artificial life art or design project to class for next week.
