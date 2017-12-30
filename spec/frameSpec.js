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
    frame.bowl(3)
    frame.bowl(4)
    expect(function(){frame.bowl(3)}).toThrowError('Max balls bowld in frame')
  });
});
