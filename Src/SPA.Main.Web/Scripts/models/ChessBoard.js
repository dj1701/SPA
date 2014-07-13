var ChessBoard = function(chessPiece) {
    this.chessPiece = chessPiece;
    this.dimension = new Array(7);
    for (var i = 0; i <= 7; i++)
        this.dimension[i] = new Array(7);
};

ChessBoard.prototype.moveTo = function(x,y) {

    var chessBoardPosition = this.dimension[x][y];
    if (typeof chessBoardPosition !== "undefined" && chessBoardPosition !== null) throw new Error('Illegal move');

    this.dimension[x][y] = this.chessPiece;
    this.chessPiece.setCurrentPosition(x, y);
}