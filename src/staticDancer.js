var StaticDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
};
StaticDancer.prototype = Object.create(Dancer.prototype);
StaticDancer.prototype.constructor = StaticDancer;
StaticDancer.prototype.step = function(moveTime){

  //changes color
  this.changeColor(this);
  this.changeShape(this);

  var topDistance, leftDistance;
  var maxDistance = 100;
  var x =  Math.floor(Math.random() * maxDistance) + 1;
  var y = Math.floor(Math.sqrt(Math.pow(maxDistance,2) - Math.pow(x,2)));

  var nodePosition = this.$node.position();
  var pad = 40;
  var maxWidth = $(window).width() - pad;
  var maxHeight = $(window).height() - pad;
  

  if((y%2 === 0 || nodePosition.top < pad) && !(nodePosition.top > maxHeight )){
    topDistance = '+=' + y + 'px' ;
  } else{
    topDistance = '-=' + y + 'px' ;
  }
  if((x%2 === 0 || nodePosition.left < pad) && !(nodePosition.left > maxWidth )){
    leftDistance = '+=' + x + 'px' ;
  } else{
    leftDistance= '-=' + x + 'px' ;
  }
  //makes it move!
  // console.log(Dancer.linedUp);
  if(!Dancer.linedUp){
    this.$node.animate({top:topDistance, left:leftDistance}, moveTime);
  }
};

//StaticDancer.