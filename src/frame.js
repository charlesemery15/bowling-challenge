function Frame(){
  this.bowlCount = 0
  this.totalKnockedPins = 0
  this.frameIndex = 1
}

Frame.prototype.knocked = function(knockedPins){
  if (!this.end()){
    this.totalKnockedPins += knockedPins;
    this.bowlCount += 1;
  }
};

Frame.prototype.end = function(){
  if (this.bowlCount === 2){
    return true;
  } else if (this.aStrike()){
    return true;
  }else {
    return false;
  }
};

Frame.prototype.aStrike = function(){
  if (this.totalKnockedPins === 10 && this.bowlCount === 1){
    return true;
  } else {
    return false;
  }
};

Frame.prototype.aSpare = function(){
  if (this.totalKnockedPins === 10 && this.bowlCount === 2){
    return true;
  } else {
    return false;
  }
};
