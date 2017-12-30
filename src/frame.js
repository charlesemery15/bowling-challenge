function Frame(){
  this.bowlCount = []
  this.bowlMax = 2
}

Frame.prototype.bowl = function(pins){
  if(this.bowlCount.length >= this.bowlMax){
  throw new Error('Max balls bowld in frame')}
  this.bowlCount.push(pins)
  return this.bowlCount.length;
};
