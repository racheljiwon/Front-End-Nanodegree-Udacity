// Enemies our player must avoid
var Enemy = function(y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = -200;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x = this.x + this.speed * dt;

    //handle collision with the player

    if (this.x < Player.x + Player.width &&
        this.x + this.width > Player.x &&
        this.y < Player.y + Player.height &&
        this.height + this.y > Player.y) {
     //collision detected
     Player.reset();
   }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
  this.sprite = "images/char-cat-girl.png";
  this.x = 252.5;
  this.y = 430;
}

//update player's position
Player.prototype.update = function() {

  //handle player's reaching the river
  if (Player.y <= 101 && Player.x - this.x >= 30) {
    Player.reset();
  }

}

// Draw the player on the screen
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(key) {
  if (key == 'left' && this.x >= 10) {
    this.x -= 10;
  } else if (key == 'right' && this.x <= 495) {
    this.x += 10;
  } else if (key == 'up' && this.y >= 111) {
    this.y -= 10;
  } else if (key == 'down' && this.y + this.height <= (606-10)) {
    this.y += 10;
  } else {
    this.x = this.x;
    this.y = this.y;
  }
}

//reset the player's position
Player.prototype.reset = function() {
  this.x = 252.5;
  this.y = 430;
}

// Now instantiate your objects.

var enemy1 = new Enemy(101, 20);
var enemy2 = new Enemy(202, 50);
var enemy3 = new Enemy(303, 10);

// Place all enemy objects in an array called allEnemies
var allEnemies = [enemy1, enemy2, enemy3];

// Place the player object in a variable called player
var player = new Player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
