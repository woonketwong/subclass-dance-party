var JumpingDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
};
JumpingDancer.prototype = Object.create(Dancer.prototype);
JumpingDancer.prototype.constructor = JumpingDancer;
JumpingDancer.prototype.step = function(){
  this.$node.animate({top:'+=20px'});
  this.$node.animate({top:'-=20px'}, 20);
  this.stepper(this);
}
