var JumpingDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.changeShape(this);
  this.changeColor(this);
};
JumpingDancer.prototype = Object.create(Dancer.prototype);
JumpingDancer.prototype.constructor = JumpingDancer;
JumpingDancer.prototype.step = function(moveTime){
  this.$node.animate({top:'+=20px'}, moveTime/2);
  this.$node.animate({top:'-=20px'}, moveTime/2);
};
