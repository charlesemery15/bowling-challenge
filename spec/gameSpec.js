describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('should start game with 10 empty frames', function() {
    expect(game.frames.length).toEqual(10);
  });

});
