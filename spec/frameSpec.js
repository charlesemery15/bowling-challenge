describe('Frame', function (){
  var frame;

  beforeEach(function(){
    frame = new Frame()
  });

  it('should start with a 0 count', function(){
    expect(frame.bowlCount.length).toEqual(0);
  });
});
