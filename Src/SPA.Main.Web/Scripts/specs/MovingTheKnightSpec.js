describe('Moving the Knight with x and y', function () {
    it('Legally move the knight to 3,1', function() {
        var blackKnight = new ChessPiece('Black Knight');
        var board = new ChessBoard(blackKnight);

        board.moveTo(3, 1);

        expect(blackKnight.x).toBe(3);
        expect(blackKnight.y).toBe(1);
    });

    it('Illegally move knight to 3,1 will raise error "Illegal move"', function() {
        var blackKnight = new ChessPiece('Black Knight');
        var board = new ChessBoard(blackKnight);

        board.moveTo(3, 1);
        
        expect(function () {
            board.moveTo(3, 1);
        }).toThrow(new Error("Illegal move"));
    });

    it('Knight will have stored x and y from its last move', function() {
        var blackKnight = new ChessPiece('Black Knight');
        var board = new ChessBoard(blackKnight);

        board.moveTo(2, 0);

        expect(blackKnight.x).toBe(2);
        expect(blackKnight.y).toBe(0);
    });
});