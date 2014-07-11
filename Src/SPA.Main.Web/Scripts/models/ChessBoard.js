var ChessBoard = function(chessPiece) {
    this.chessPiece = chessPiece;
    this.board = new Array(7);
    for (var i = 0; i <= 7; i++)
        this.board[i] = new Array(7);
};

ChessBoard.prototype.moveTo = function(x,y) {

    var chessBoardPosition = this.board[x][y];
    if (typeof chessBoardPosition !== "undefined" && chessBoardPosition !== null) throw new Error('Illegal move');

    this.board[x][y] = this.chessPiece;
    this.chessPiece.setCurrentPosition(x, y);
}