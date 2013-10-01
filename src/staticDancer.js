var StaticDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
};
StaticDancer.prototype = Object.create(Dancer.prototype);
StaticDancer.prototype.constructor = StaticDancer;
StaticDancer.prototype.step = function(){

  var topDistance, leftDistance;
  var randomInt =  Math.floor(Math.random() * 30) + 1;
  var timeInt = Math.floor(Math.random() * 500) + 200;

  var nodePosition = this.$node.position();
  var pad = 40;
  var maxWidth = $(window).width() - pad;
  var maxHeight = $(window).height() - pad;


  if((randomInt%2 === 0 || nodePosition.top < pad) && !(nodePosition.top > maxHeight )){
    topDistance = '+=' + randomInt + 'px' ;
  } else{
    topDistance = '-=' + randomInt + 'px' ;
  }
  randomInt =  Math.floor(Math.random()*20) + 1;
  if((randomInt%2 === 0 || nodePosition.left < pad) && !(nodePosition.left > maxWidth )){
    leftDistance = '+=' + randomInt + 'px' ;
  } else{
    leftDistance= '-=' + randomInt + 'px' ;
  }
  //makes it move!
  this.$node.animate({top:topDistance, left:leftDistance}, timeInt);

  //changes color
  this.changeColor(this);
  this.changeShape(this);


  this.stepper(this);
};

//StaticDancer.