var ChessPiece = function (name) {
    this.name = name;
    this.x = 1;
    this.y = 0;
};

ChessPiece.prototype.setCurrentPosition = function(x,y) {
    this.x = x;
    this.y = y;
};

ChessPiece.prototype.availableMoves = function (board) {
    var currentXAxis = this.x,
        currentYAxis = this.y,
        forward = 2,
        left = 2,
        right = 2,
        backward = 2;

    var chessBoardPositions = function (possibleForwardMove, possibleBackMove, possibleLeftMove, possibleRightMove) {
        this.forward = possibleForwardMove;
        this.backward = possibleBackMove;
        this.left = possibleLeftMove;
        this.right = possibleRightMove;
    };

    var oneDimensionXAxisLength = board.length - 1;
    var oneDimensionYAxisLength = board[0].length - 1;

    var possibleForwardMove = (currentYAxis + forward) <= oneDimensionYAxisLength ?
                               (currentYAxis + forward) : (currentYAxis + forward - 1) <= oneDimensionYAxisLength ? (currentYAxis + forward - 1) : -1;

    var possibleBackMove = (currentYAxis - backward) >= 0 ? (currentYAxis - backward) : (currentYAxis - backward - 1) >= 0 ? (currentYAxis - backward - 1) : -1;

    var possibleLeftMove = (currentXAxis - left) >= 0 ? (currentXAxis - left) : (currentXAxis - left) - 1 >= 0 ? (currentXAxis - left) - 1 : -1;

    var possibleRightMove = (currentYAxis + right) <= oneDimensionXAxisLength ? (currentYAxis + right) : (currentXAxis + right) - 1 <= oneDimensionXAxisLength ? (currentXAxis + right - 1) : -1;

    var availableKnightMoves = new chessBoardPositions(possibleForwardMove, possibleBackMove, possibleLeftMove, possibleRightMove);

    return availableKnightMoves;
};