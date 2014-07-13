describe('Moving the Knight with x and y', function () {
    it('Legally move the knight to 3,1', function () {
        var blackKnight = new ChessPiece('Black Knight');
        var board = new ChessBoard(blackKnight);

        board.moveTo(3, 1);

        expect(blackKnight.x).toBe(3);
        expect(blackKnight.y).toBe(1);
    });

    it('Illegally move knight to 3,1 will raise error "Illegal move".', function () {
        var blackKnight = new ChessPiece('Black Knight');
        var board = new ChessBoard(blackKnight);

        board.moveTo(3, 1);

        expect(function () {
            board.moveTo(3, 1);
        }).toThrow(new Error("Illegal move"));
    });

    it('Knight will have stored x and y from its last move.', function () {
        var blackKnight = new ChessPiece('Black Knight');
        var board = new ChessBoard(blackKnight);

        board.moveTo(2, 0);

        expect(blackKnight.x).toBe(2);
        expect(blackKnight.y).toBe(0);
    });

    it('Knight will calculate where next on chess board is legal to move to given starting position of 1,0.', function () {
        var blackKnight = new ChessPiece('Black Knight');
        var board = new ChessBoard(blackKnight);

        var availableMoves = blackKnight.availableMoves(board);

        expect(availableMoves.forward).toBe(2);
        expect(availableMoves.right).toBe(2);
        expect(availableMoves.backward).toBe(-1);
        expect(availableMoves.left).toBe(0);
    });

    xit('With current position of knight set to 0,3 calculate all possible moves within chess board boundary. Moves outside of chess baord set to null.', function () {
        var blackKnight = new ChessPiece('Black Knight');
        var board = new ChessBoard(blackKnight);
        blackKnight.setCurrentPosition(0, 3);

        var availableMoves = blackKnight.availableMoves(board);

        expect(availableMoves[0].x).toBe(4);
        expect(availableMoves[0].y).toBe(3);
        expect(availableMoves[1].x).toBe(5);
        expect(availableMoves[1].y).toBe(1);
        expect(availableMoves[2].x).toBe(2);
        expect(availableMoves[2].y).toBe(3);
        expect(availableMoves[3].x).toBe(1);
        expect(availableMoves[3].y).toBe(1);
        expect(availableMoves[4].y).toBeNull();
        expect(availableMoves[4].x).toBeNull();
        expect(availableMoves[5].y).toBeNull();
        expect(availableMoves[5].x).toBeNull();
        expect(availableMoves[6].y).toBeNull();
        expect(availableMoves[6].x).toBeNull();
        expect(availableMoves[7].y).toBeNull();
        expect(availableMoves[7].x).toBeNull();
    });

    xit('Illegally move knight to 3,0 will raise error "Illegal move"', function () {
        var blackKnight = new ChessPiece('Black Knight');
        var board = new ChessBoard(blackKnight);

        expect(function () {
            board.moveTo(3, 0);
        }).toThrow(new Error("Illegal move"));
    });
});