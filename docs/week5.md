#Week 6

##Artificial Life
* Introduction to Artificial Life lecture materials are here. 
* For the next few weeks we will be working towards building a virtual online ecosystem. This will be Assignment 2 for this class. 

##Git Update
* Maintain your local repository. Submit your homework via a link to your folder for this week or via dropping a zip of this folder into the Moodle dropbox.
*  I will update to the class folder manually. 
*  Note the new drag and drop functionality.

##Looking inside p5
* For insight into how p5 is built watch this draft [Inside p5js video](https://vimeo.com/142953316) by Luisa Pereira. Password: p5.

##Local Server

* What is a local server and why do we need to use it sometimes?
* [For windows machines see this guide on how to get it running?](https://github.com/processing/p5.js/wiki/Local-server) 
* On a mac:
Easiest way is to run a SimpleHTTPServer
1) Open terminal, get terminal to point to the directory on your computer where you are storing your p5.js work. On my computer I've got a ton of examples in a directory called "The-Nature-of-Code-Examples-p5.js". So I'm going to browse to it by doing the following.

```cd /Users/shiffman/Documents/noc/The-Nature-of-Code-Examples-p5```

Once I'm there, I can start up a web server with the following command.

```python -m SimpleHTTPServer```
I should then see:

```Serving HTTP on 0.0.0.0 port 8000 ...```
This means the server is up and running at localhost on port 8000. And this means I can type ```http://localhost:8000/``` into the address of a web browser and I'll see:

* See examples using images (compared to Processing) in code folder. As Javascript runs asynchronously, we need to handle loading images in a different way to Processing by loading them in a function called preload. Or by using a call back function - See Image 2 example. 

##Review: NoC so far
This week we will be reviewing and getting up to speed on our progress with Nature of Code. 

* Review of motion and distribution: [noise()](http://codepen.io/tega/pen/MKMQxX?editors=0010), random(), [gaussian()](http://codepen.io/tega/pen/RrzQdr?editors=0010#), [probability().](http://codepen.io/pen/?editors=0010)
* Review of vectors so far...  NoC: p27-52.

##Vectors

* What is a vector? A vector is a quantity that has a direction. Or in code, we can think of it as a variable that holds 2 (or 3) numbers. 
* Note differences in syntax in comparison with Processing. Check out how to implement the [p5.Vector class](http://p5js.org/reference/#/p5.Vector) in p5js. 
* If you haven't gone through the steps from last week please do so, doing the exercises in Chapter 1 of NoC.

<-------------------- Review from last week ------------------->
###Getting started with Vectors.
We will be drawing heavily on [Nature of Code.](http://natureofcode.com/) for this next part of the course. This week's material is all on pages 27-52.
Ensure you have done the Walker class exercises from last week. I.1, I.2 and I.3 (try some more examples in this chapter if you can)

####Vectors
Watch the following videos, doing the examples in p5js as you go along. The video's are described using Processing but the concept of Vectors are universal.
If you need to see the p5js example sketches they are here in [THIS P5JS CODE REPOSITORY. ALL THE NOC EXAMPLES ARE HERE IN P5.](https://github.com/shiffman/The-Nature-of-Code-Examples-p5.js/tree/master/chp01_vectors)

* 1.1 [Vectors (The Nature of Code)](https://vimeo.com/58734251)
* [1.2 PVector class (The Nature of Code)](https://www.youtube.com/watch?v=7nTLzLf7jUg) Remember we are using p5js. So you will be using the [p5js pVector class.](http://p5js.org/reference/#/p5.Vector). ATTENTION - I have also found that with this example, it will fail if you use the word 'location' as Shiffman does here and in the book. Use the word 'position' or similar instead. Javascript has [many reserved words](http://www.w3schools.com/js/js_reserved.asp) that are used in the language for different things, and so we cannot name variables after them. Location is one of these reserved words -it is used to describe window propoerties. See [this example in code pen with the bouncing ball vector example using the word position.](http://codepen.io/tega/pen/zrQXOo?editors=0010)

*Do exercises 1.1 and 1.2 from the book in p5js (you can do 1.3 if you are excited and familiar with 3D)*

* [1.3 Vector Math (The Nature of Code)](https://www.youtube.com/watch?v=s6b1_3bNCxk)
* [1.4 Vector Math II (Nature of Code)](https://www.youtube.com/watch?v=uHusbFmq-4I)
* [1.5 Acceleration (The Nature of Code)] (https://www.youtube.com/watch?v=TQ_WZU5s_VA&list=PLRqwX-V7Uu6ZwSmtE13iJBcoI-r4y7iEc&index=5)

*Do exercise 1.4 and 1.5 in p5js.*

Still confused? Read through the book p27 chapter 1.
<---------------------------------------------------------->

Continuation of this .. keep going to the end of this chapter. 

* [See this example on how to normalize a vector.](http://codepen.io/tega/pen/EPBQzM?editors=0010#)
* Mover example reviewed - [object and vectors.](http://codepen.io/tega/pen/jWjZjZ?editors=0010)
* Static and non static functions - review example: code/5-1-Vectors/1.92-Static-vectors. Do exercise 1.7, see example in p5js in code folder [or here.](http://codepen.io/tega/pen/xZoyWm?editors=0011)
* Watch the last video of this chapter - [1.6 Accelerations towards mouse  ](https://www.youtube.com/watch?v=mWJkvxQXIa8&list=PLRqwX-V7Uu6ZwSmtE13iJBcoI-r4y7iEc) and/or read 1.10.
* Interactive Mover -> Can you make the movers move towards a different point? Do exercise 1.8 in NoC. 
* Make an array of Movers. 

##Deliverables

* Read through the [Introduction of Mitchel Whitelaw's metacreation.](https://github.com/tegacodes/Drawing-Seeing-Moving-with-Code/blob/gh-pages/docs/readings/mitchell-whitelaw-metacreation-art-and-artificial-life.pdf)
* Do the exercises in NoC chapter 1 on vectors, read chapter and review the [Shiffman videos on Vectors as needed.](https://www.youtube.com/watch?v=mWJkvxQXIa8&list=PLRqwX-V7Uu6ZwSmtE13iJBcoI-r4y7iEc) 
* Use the mover class to create a virtual creature using vectors. Your creature should have specific movement characteristics. See page 62 of NoC for the details on this. 
* Bring an example of an artificial life art or design project to class for next week.
