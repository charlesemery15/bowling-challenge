describe('Frame', function (){
  var frame;

  beforeEach(function(){
    frame = new Frame()
  });

  it('should start a frame with no knocked pins', function() {
    expect(frame.totalKnockedPins).toEqual(0);
  });

  it('should start a frame with a zero bowl count', function(){
    expect(frame.bowlCount).toEqual(0);
  });

  it('should be say which frame you are playing', function(){
    expect(frame.frameIndex).toEqual(1);
  });

  it('should record increase bowlCount after every bowl', function(){
    frame.knocked(5)
    expect(frame.bowlCount).toEqual(1);
  });

  it('should end a frame after two bowls', function(){
    frame.knocked(3)
    frame.knocked(2)
    expect(frame.end()).toBe(true);
  });

  it('should record a strike if 10 pins are knocked', function(){
    frame.knocked(10)
    expect(frame.aStrike()).toBe(true);
  });

  it('should return false when there was less than 10 knocked pins recorded', function(){
    frame.knocked(9)
    expect(frame.aStrike()).toBe(false);
  });

  it('should end frame when a strike happens', function(){
    frame.knocked(10)
    expect(frame.end()).toBe(true)
  });

  it('should record a spare when 10 pins are knocked with two bowls', function(){
    frame.knocked(7)
    frame.knocked(3)
    expect(frame.aSpare()).toBe(true)
  });

  it('should return false when less than 10 pins are knocked with two bowls', function(){
    frame.knocked(6)
    frame.knocked(3)
    expect(frame.aSpare()).toBe(false)
  });
});
