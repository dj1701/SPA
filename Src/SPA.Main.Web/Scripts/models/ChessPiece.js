var ChessPiece = function(name) {
    this.name = name;
    this.x = 0;
    this.y = 1;
};

ChessPiece.prototype.setCurrentPosition = function(x,y) {
    this.x = x;
    this.y = y;
};