//Initialize Phaser Engine.Create a 400x490px game.

var game = new Phaser.Game(400,490,Phaser.AUTO,"gameDiv");

//Create our 'main' state that wil contain the game
//This is the body of the game itself.It contains all relevant code

var mainState = {
  
  preload: function () {
  //This function will execute at the beginning of the game
  //Here ell load all of our assets(art, music, etc)  

},
  
  create: function () {
  //The create function is called right after the preload f(x)
  //This is where we'll set up the game assets from scratch
  
},
  
  update: function () {
    //This funtion is called 60 times a second
    //It contains the games logic and all time related actions
    
  },
  
}


//Add and start the gameState
game.state.add('main',mainState);
game.state.start('main');