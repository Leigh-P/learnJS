function chessBoard() {
    let line = "";
    let result = "";
    const str = "#";
    for (let i = 0; i < 4; i++) {
        line += str + " ";
    }
    for (let i = 0; i < 8; i++) {
        if (!(i % 2)) {
            result += " " + line;
        }else{
            result += line;
        }
        result += '\n';
    }
    console.log(result);
}
chessBoard();