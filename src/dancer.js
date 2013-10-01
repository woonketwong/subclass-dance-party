var Dancer = function(top, left, timeBetweenSteps){
  this._timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<div class="dancer"></div>');
  this.setPosition(top, left);
  this.step();
};

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

Dancer.prototype.setColor = function(instance){
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