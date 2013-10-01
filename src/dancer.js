var Dancer = function(top, left, timeBetweenSteps){
  this._timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<div class="dancer"></div>');
  this.setPosition(top, left);
  this.$node.css({'opacity' : (Math.random()+.2)})
};
Dancer._timeOutID;
Dancer.linedUp = false;

Dancer.startDancing = function(dancers){
  Dancer.linedUp = false;
  Dancer.theStep(dancers);

};

Dancer.stopDancing = function(dancers){
  window.clearTimeout(Dancer._timeOutID);
  for (var i = 0; i < dancers.length; i++) {
    dancers[i].$node.stop();
  };
}

Dancer.theStep = function(dancers, moveTime){
  moveTime = moveTime || 1000;
  Dancer._timeOutID = setTimeout(function(){
    for (var i = 0; i < dancers.length; i++) {
       dancers[i].step(moveTime);
    };
    moveTime = Math.floor(Math.random()*1000 + 200);
    Dancer.theStep(window.dancers, moveTime);
  }, moveTime);

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
  instance.$node.animate({'height':height, 'width':width, 'border-radius':radius, 'border-width':borderWidth},700);
};

Dancer.lineUp = function(dancers){
  Dancer.linedUp = true;
  Dancer.stopDancing(dancers);
  var x = 10;
  var y = 60;
  for (var i = 0; i < dancers.length; i++) {
    dancers[i].$node.animate({top: y+'px',left: x+'px'});
    if(x < $(window).width() - 100){
      x += dancers[i].$node.width();
    } else {
      y += 100;
      x = 10;
    } 
  };
}