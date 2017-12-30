function Frame(){
  this.bowlCount = []
  this.bowlMax = 2
};

Frame.prototype.bowl = function(){
  if(this.bowlCount >= 2){
  throw new Error('Max balls bowld in frame')}
  this.bowlCount += 1
  return this.bowlCount.length;
};
