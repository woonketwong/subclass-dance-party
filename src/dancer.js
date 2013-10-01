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