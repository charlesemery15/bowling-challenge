function Game() {
  this.frames = [];
  for (var i = 0; i <= 9; i++) {
    this.frames.push(new Frame(i));
  }
}
