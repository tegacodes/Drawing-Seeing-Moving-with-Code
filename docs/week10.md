#Computer Vision Tutorial

##CLM Tracker Library
* We will be experimenting with a JS face tracker library called CLM tracker in combination with p5js. [The repository for the library can be found here.](https://github.com/auduno/clmtrackr) 
* If you are interested in a technical description and some of the math behind the library, here is a [description of how the CLM tracker works.](http://auduno.com/post/61888277175/fitting-faces)
* Several example have been added to the class folder, thanks to Lauren McCarthy who prepared them. A zip of these can be [downloaded here.](https://github.com/tegacodes/Drawing-Seeing-Moving-with-Code/blob/gh-pages/code/910-faceTracker.zip)
 
###How can I use this library?
* The reference for the library [is here. ](http://auduno.github.io/clmtrackr/docs/reference.html)
From the first face tracker example:
```
var ctracker; //declare the object called ctracker
```
In void setup, setup the tracker:
```
ctracker = new clm.tracker(); //instantiate a new tracker
ctracker.init(pModel);//give it a model
ctracker.start(videoInput.elt); //input a video feed for it to analyze
```
The tracker will output an array of points that are numbered to describe certain features of a face. The point number corrospond to facial features as shown:

In void draw, the getCurrentPosition() function returns a 2d array of these points. 
```
// get array of face marker positions [x, y] format
  var positions = ctracker.getCurrentPosition();
```
To get the point on the chin for example I would then call the positions array at that point. This is a 2D array so imagine that it is like a list of pairs. Where:  
positions[7][0] is the x variable of point 7 -> to get the x we put 0 in the second box
positions[7][1] is the y variable of point 7 -> to get y we put 1 in the second box

You can then assess the size of facial features as follows:
```
if(positions.length>0){ //check the positions array is not empty
    fill(255); 
    var mouthTop = positions[60][1]; //get the y position of the point at the top of the mouth  
    ellipse(positions[60][0],positions[60][1],8,8)  //draw an ellipse there too  
    var mouthBottom = positions[57][1]; //get the y position of the point at the bottom of the mouth  
    fill(255,0,0);
    ellipse(positions[57][0],positions[57][1],8,8);  //draw an ellipse there too  
    var mouthSize = mouthBottom - mouthTop;  //the mouth size is top minus bottom

    console.log(mouthSize);
  }
```
You can then use an if statement to make something happen if the mouth opens or closes!

#More face resources.
* [Kyle McDonald's fantastic repository in faces in media art and computer science.](https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2)
* [Adam Harvey interview on face detection algorithms](https://vimeo.com/39561082)
* [Kyle McDonald interview on face detection tool called Face tracker.](https://vimeo.com/39034692)
* [This fantastic project by Mary Huang that generates a type face based on an individual's face.](http://www.creativeapplications.net/processing/typeface-processing/)


#Deliverables
* Reading: Golan Levin, 2006. [Computer Vision for Artists and Designers: Pedagogic Tools and Techniques for Novice Programmers](http://www.flong.com/texts/essays/essay_cvad/)
* Develop a final project idea for this class. Prepare a 3 minute presentation describing what you will explore, what questions your project is exploring and what techniques you will use.
* Create a face puppet (or do another face as interface project of your choosing!). A face puppet is an animated puppet that you can control with your face. Be creative! Your mission is to make something unexpected and surprising. See the video below for an example student response to this project. 
<a href="https://vimeo.com/75980739"><img src="https://github.com/tegacodes/Drawing-Seeing-Moving-with-Code/blob/gh-pages/images/facev.png" width="600"></a>
