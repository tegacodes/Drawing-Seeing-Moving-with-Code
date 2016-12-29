# Spaz Snake
http://spazsnake.herokuapp.com/

## Inspiration

My inspiration for this project was the Twitch Plays Pokemon project. 
This project livestreamed a Pokemon game that the viewers were able to interact with. 
Using the chat, viewers were able to play the game. 
However, with so many people sending commands it created chaos where it was very difficult to get anything done.
Despite this, the game was eventaully completed. 

## The Game

I thought this was a very interesting mechanic and I wanted to try applying this mechanic to a different game and see how successful it would be.
I decided to use snake as it is a simple game that many people know how to play already.
The biggest challenge I had was developing the best method of data transfer. What data I needed to send, where the data should be held, and how often should sketches be updated.
Often I would experience one user's instance running smoothly while others lagged or new connections wouldn't load the current snake.
My current solution assigns one user as a 'host' that brings any new user's data up to speed with the current session when they connect.
Rather than having to keep sending the snake position back and forth between the host, server, and the other users, the host only updates all the info once to the user when they connect.
After the initial update, the server just adds to the data on the sketch as the data comes rather than constantly overwriting the arrays.
This way I was able to get instance for each user to run smoothly as well as having the turn command executed at almost the same time for each user.

### How To Play

Use the arrow keys to control the snake. When the key is pressed, the information is sent to the server and then broadcasted to all users. Commands are stored in a queue, so they are executed in the order they are recieved. This delay is intentional as every command is counted (except if in opposite direction of previous command). The colored squares (apple) players collect are in different locations for each user. If a user's apple is collected, the segment added to the body of the snake retains the color of the user who collected the apple.

## Thoughts
What I found most interesting about this project was the visual representation of the other users playing the same game as you.
Having the chat/message box makes the game feel more fluid and alive as it gives the feeling that you are playing together as a collective.
I also really liked that segments you add retain your color as it is a visual representation of your contribution to the progression of the game. 

All code used in the files index.html, server.js, and SnakeS.js are all my own.
