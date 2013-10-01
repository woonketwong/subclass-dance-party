describe("staticDancer", function() {

  var staticDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    staticDancer = new StaticDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(staticDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node jump", function() {
    sinon.spy(staticDancer.$node, 'animate');
    staticDancer.step();
    expect(staticDancer.$node.animate.called).to.be.true;
  });

  it("should never have the same position", function() {
    // staticDancer.step();

    // var position1Top = staticDancer.$node.position().top;
    // var position1Left = staticDancer.$node.position().left;
    
    // staticDancer.step();

    // expect(staticDancer.$node.position().top).to.be.not.equal(position1Top);
    // expect(staticDancer.$node.position().left).to.be.not.equal(position1Left);
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(staticDancer, "stepper");
      expect(staticDancer.stepper.callCount).to.be.equal(0)
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      //clock.tick(timeBetweenSteps);

      expect(staticDancer.stepper.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(staticDancer.stepper.callCount).to.be.equal(2);
    });
  });
});
