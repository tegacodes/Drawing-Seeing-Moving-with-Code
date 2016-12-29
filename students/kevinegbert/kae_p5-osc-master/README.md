# kae_p5-osc
Final project for drawing, moving, seeing code.

##### project description
This project adapts Gene Kogan's [p5js-osc](https://github.com/genekogan/p5js-osc) to create an interactive instrument with objects that control parameters in Ableton Live. All of the sounds were created using a field recorder or contact mic on my bedroom windows or the surrounding area. This project is presented with the aid of a speaker and a transducer attached to a window pane. 

##### what's next...
My original intention was to use p5-osc to create an web instance where multiple users could adjust parameters of one local instance of Ableton Live. I am currently in the process of trying to implement [rhizome](https://github.com/sebpiq/rhizome) as a framework so many users can connect via phone/computer. [Examples here.](https://github.com/sebpiq/rhizome/wiki/Gallery) Thank you to Gene Kogan for answering my tweets and pointing me in the right direction.


#### setup

Install [node](https://nodejs.org/)

```javascript
npm install socket.io
```
```javascript 
npm install node-osc
```
```cd kae_p5-osc```

Start node.

    $ node bridge.js

Run your index.js using the p5js editor / browswer.

Install [LiveOSC](http://livecontrol.q3f.org/ableton-liveapi/liveosc/)

This will allow Ableton and p5 to communicate through socket.io.

You can use AbletonOSC to map parameters, just make sure you open it after your Ableton Live project is already running. If you make changes to your Ableton project (add to new audio effects), you may need to re-open AbletonOSC.
