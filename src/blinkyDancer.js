

var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function(){
  this.stepper(this);
  this.$node.toggle();
}
// BlinkyDancer.prototype.danceStep = function(){
//   this.$node.toggle();
//}