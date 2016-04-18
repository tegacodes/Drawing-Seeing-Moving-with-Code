# Making Interactive, Multi-User Environments with p5js and Socket.io
A tutorial by [Sam Lavigne.](https://github.com/antiboredom/)

Update: Since we did this tutorial, the wonderous Dan Shiffman has published [this series of videos on this topic!](https://www.youtube.com/watch?v=bjULmG8fqc8&list=PLRqwX-V7Uu6b36TzJidYfIYwTFEq3K5qH)

In this brief tutorial I'll cover how integrate web sockets (with socket.io) into a p5js sketch.

## Setting up a web server

First we'll set up a basic web server using nodejs. Nodejs is a "javascript runtime" that works out of the browser. This just means that you write code in javascript, but can run it from the terminal rather than inside Chrome or Firefox. It is useful as it can run on a server to serve context. 
For a video introduction to Node see [this Shiffman video.](https://www.youtube.com/watch?v=RF5_MPSNAtU)

### Extremely quick introduction to nodejs

- Running `node`
- It's just javascript
- But with extra stuff

### Installing packages with npm

NPM is node's package manager. It comes with node for free and manages extra code modules (packages!) that we might want to use with node ([Video tutorial on npm here](https://www.youtube.com/watch?v=s70-Vsud9Vk&nohtml5=False)).   

Make a new folder, and navigate to that folder in the terminal.

Before we create the server we'll set up a `package.json` file. This file contains the name of our project and a list of all of its depencies.  

In the terminal type:

```bash
npm init
```

You will be prompted to give your project a name, and fill out the rest of the questions, or just leave them blank. If you type `cd` you'll see a new file called `package.json` in the directory. You can open it up in a text editor (or just type `more package.json`) and you should see that it's just a json file.

The next step is to install expressjs - a simple web framework that will help us serve files. Express is a nodejs package. These packages can be installed with a tool that comes with nodejs called `npm` (the node package manager).

To install express, just type:

```bash
npm install express --save
```

This will install express. The `--save` means that npm will automatically update your `package.json` file with express listed as a project dependency. Type `more package.json` to see what I mean.

Now type `ls` (which shows you all the files in your current directory). You'll see a new folder called `node_modules`. This is where your npm packages are located. The folder was created automatically for you when you ran `npm install`.

Ok, so now we have expressjs installed, we can use it to make a very simple web server.

### Serving files with express

Create a new file called `server.js`, and paste this in:

```javascript
var express = require('express')
var app = express();
var server = require('http').Server(app);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

server.listen(3000);
```

Run the server by typing:

```bash
node server.js
```

(this is the part where I explain routes, and GET vs POST)

#### Static files

```javascript
app.use(express.static('public'));
```

To serve a simple page with a p5js sketch running your server.js file should look like this:
```javascript
var express = require('express')
var app = express();

app.use(express.static('public'));
app.listen(process.env.PORT || 5000);
```
Your main html file and sketch.js file should be located in the public directory. Your main html file should be called index.html

### Socket.io

Socket.io is library that uses a technology called web sockets to enable real-time communication between a client (your browser) and a server (in this case your nodejs server).

```bash
npm install --save socket.io
```

#### Super simple socket example
Note: socket.io is totally independent of p5js.

In `server.js`:

```javascript
var express = require('express')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(process.env.PORT || 5000);

app.use(express.static('public'));

io.on('connection', function (socket) {
  socket.emit('connected', {msg: "You're connected!"});
  socket.on('message', function (data) {
    console.log(data);
    socket.broadcast.emit('message', data);
  });
});
```

In `index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.socket.io/socket.io-1.4.5.js"></script>
    <script>
      var socket = io.connect(window.location.origin);
      socket.on('message', function (data) {
        console.log(data.msg);
      });
    </script>
  </head>
  <body>
  </body>
</html>
```

#### Boxes socket example
[see example_2]

#### Flocking socket example
[see example_3]

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

###Troubleshooting
Heroku not serving your app?
Check:
* Does your p5js sketch run locally? Maybe its a problem with your code. 
* Are your paths to the p5js library correct? 
* Is your html file and your sketch.js file and any of your other javascript files you've written located in the public folder?
* Make sure you call your html file index.html (if you call it embed.html or similar your app will be at http://mycoolapp.herokuapp.com/embed.html
* Has your repository got a Procfile, a package.json file and a gitignore file as specified here?
* Has your folder got the node_modules folder (this is where express is installed)? If not, you have not installed express or sockets properly and your sketch will not run locally. 
* Here is a [great guide for debugging code.](http://p5js.org/tutorials/debugging/)




