var Chess = require('chess.js').Chess;
var chess = new Chess();
chess.load_pgn(['[Event "Casual Game"]',
    '[Site "Berlin GER"]',
    '[Date "1852.??.??"]'].join('\n'));
chess.move({from: 'e2', to: 'e4'});
var pgn = chess.pgn({max_width: 5, newline_char: '\n'});
// output:
// [White "carolyn"]
// [Black "hippo"]
// [Date "2014-1-18"]
//
// 1. e4

var chessB = new Chess();
chessB.load_pgn(pgn);

// BUG HERE:
console.log(chessB.pgn({max_width: 5, newline_char: '\n'}));
// outputs: [[White "carolyn"] [Black "hippo"] [Date "2014-1-18"] "[White "carolyn"] [Black "hippo"] [Date "2014-1-18"]"]  1. e4
