//possible locations for the player
xCanBe = [(0 + 101) / 2, (101 + 202) / 2, (202 + 303) / 2, (303 + 404) / 2, (404 + 505) / 2];
yCanBe = [(0 + 101) / 2, (101 + 202) / 2, (202 + 303) / 2, (303 + 404) / 2, (404 + 505) / 2, (505 + 606) / 2];
//the initialized location of the player
initX = 505 / 2; //middle of the horizontal line
initY = (505 + 606) / 2; //downside of the vertical line

// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = -200;


};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //handle collision with the player
    if (Player.x - this.x < 30 && Player.x - this.x >= 0 && Player.y == this.y) {
      Player.reset();
    }

    //handle player's reaching the river
    if (Player.y == yCanBe[1] && Player.x - this.x >= 30) {
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
  this.x = initX; //half of the row length
  this.y = initY;
}

//update player's position
Player.prototype.update = function(dt) {

}

// Draw the player on the screen
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(key) {
  if (key == 'left' && this.x != xCanBe[0]) {
    this.x -= 101;
  } else if (key == 'right' && this.x != xCanBe[4]) {
    this.x += 101;
  } else if (key == 'up' && this.y != yCanBe[1]) {
    this.y -= 101;
  } else if (key == 'down' && this.y != yCanBe[5]) {
    this.y += 101;
  } else {
    this.x = this.x;
    this.y = this.y;
  }

}

Player.prototype.reset = function() {
  this.x = initX;
  this.y = initY;
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(), new Enemy(), new Enemy()];
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
