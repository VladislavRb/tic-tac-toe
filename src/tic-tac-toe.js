class TicTacToe {
    constructor() {
        this._currentPlayer = "x";
        this._field = [[], [], []];
    }

    getCurrentPlayerSymbol() {
        return this._currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if(!(columnIndex in this._field[rowIndex])){
            this._field[rowIndex][columnIndex] = this._currentPlayer;
            this._currentPlayer == "x" ? this._currentPlayer = "o" : this._currentPlayer = "x";
        }
    }

    getColumn(matrix, columnIndex){
        return [matrix[0][columnIndex], matrix[1][columnIndex], matrix[2][columnIndex]];
    };

    getDiagonal(matrix, leftToRight){
        if(leftToRight){
            return [matrix[0][2], matrix[1][1], matrix[2][0]];
        }
        else{
            return [matrix[0][0], matrix[1][1], matrix[2][2]];
        }
    }

    isFinished() {
        if(this.getWinner() || this.isDraw()){
            return true;
        }
        return false;
    }

    checkArrFor(arr, player){
        for(let i = 0; i < 3; i++){
            if(arr[i] != player){
                return false;
            }
        }
        return true;
    }

    playerIsWinner(player){
        if(this.checkArrFor(this._field[0], player) || this.checkArrFor(this._field[1], player) || this.checkArrFor(this._field[2], player) || this.checkArrFor(this.getColumn(this._field, 0), player) || this.checkArrFor(this.getColumn(this._field, 1), player) || this.checkArrFor(this.getColumn(this._field, 2), player) || this.checkArrFor(this.getDiagonal(this._field, true), player) || this.checkArrFor(this.getDiagonal(this._field, false), player)){
            /*console.log(this._field[0]);
            console.log(this._field[1]);
            console.log(this._field[2]);
            console.log();*/
            return true;
        }
        return false;
    }

    getWinner() {
        if(this.playerIsWinner("x")){
            return "x";
        }
        else{
            if(this.playerIsWinner("o")){
                return "o";
            }
            else{
                return null;
            }
        }
    }

    noMoreTurns() {
        let occupiedPlaces = 0;
        for(let row of this._field){
            for(let i = 0;  i < 3; i++){
                if(i in row){
                    occupiedPlaces++;
                }
            }
        }
        if(occupiedPlaces == 9){
            return true;
        }
        return false;
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this._field[rowIndex][colIndex] ? this._field[rowIndex][colIndex] : null;
    }
}

module.exports = TicTacToe;
