function Frame(){
  this.bowlCount = []
};

Frame.prototype.bowl = function(){
  this.bowlCount += 1
  return this.bowlCount.length;
};
