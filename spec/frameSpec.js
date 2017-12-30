describe('Frame', function (){
  var frame;

  beforeEach(function(){
    frame = new Frame()
  });

  it('should start with a 0 count', function(){
    expect(frame.bowlCount.length).toEqual(0);
  });

  it('should allow a player to record a bowl', function(){
    frame.bowl(7)
    expect(frame.bowlCount.length).toEqual(1);
  });

  it('should limit number of bowls in a frame', function(){
    frame.bowl(5)
    frame.bowl(5)
    expect(function(){frame.bowl(3)}).toThrowError('Max balls bowld in frame')
  });

  // it('should limit maximum pins knocked down to 10', function(){
  //   expect(function(){frame.bowl(11)}).toThrowError('Maximum number of pins have been knocked down')
  // });
});
