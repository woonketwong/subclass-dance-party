var Dancer = function(top, left, timeBetweenSteps){
  this._timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<div class="dancer"></div>');
  this.setPosition(top, left);
  this.step();
};

Dancer.linedUp = false;

Dancer.prototype.stepper = function(instance){
  setTimeout(function(){instance.step();}, instance._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.generateColor = function(){
  var colorHexDigits = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  var hexCode = '';
  for(var i = 0; i < 6; i++){
    hexCode += colorHexDigits[Math.floor(Math.random()*colorHexDigits.length)];
  }
  return hexCode;
};

Dancer.prototype.changeColor = function(instance){
  var bgColor = '#' + instance.generateColor();
  var borderColor = '#' + instance.generateColor();

  instance.$node.css({'background-color': bgColor, 'border-color': borderColor});
}

Dancer.prototype.changeShape = function(instance, factor){
  factor = factor || 50;
  var height = Math.floor(Math.random()*factor)+1;
  var width = Math.floor(Math.random()*factor)+1;
  var radius = Math.floor(Math.random()*factor)+1;
  var borderWidth = Math.floor(Math.random()*factor/5)+1;

  var speed = Math.floor(Math.random()*700)+100;
  instance.$node.animate({'height':height, 'width':width, 'border-radius':radius, 'border-width':borderWidth},speed);
};

Dancer.lineUp = function(dancers){
  Dancer.linedUp = true;
  var x = 10;
  var y = 60;
  for (var i = 0; i < dancers.length; i++) {
    //set timeout
    dancers[i].$node.animate({top: y+'px',left: x+'px'});
    if(x < $(window).width() - 100){
      x += dancers[i].$node.width();
    } else if(y < $(window).height() - 100){
      y += dancers[i].$node.height();
    } else if( x > 100){
      x -= dancers[i].$node.width();
    } else{
      y -= dancers[i].$node.height();
    }
    console.log(x);
  };
}