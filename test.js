var Chess = require('chess.js').Chess;
var chess = new Chess();

example = ['[Event "Casual Game"]',
    '[Site "Berlin GER"]',
    '[Date "1852.??.??"]',
    '[EventDate "?"]',
    '[Round "?"]',
    '[Result "1-0"]',
    '[White "Adolf Anderssen"]',
    '[Black "Jean Dufresne"]',
    '[ECO "C52"]',
    '[WhiteElo "?"]',
    '[BlackElo "?"]',
    '[PlyCount "47"]',
    '',
    '1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.b4 Bxb4 5.c3 Ba5 6.d4 exd4 7.O-O',
    'd3 8.Qb3 Qf6 9.e5 Qg6 10.Re1 Nge7 11.Ba3 b5 12.Qxb5 Rb8 13.Qa4',
    'Bb6 14.Nbd2 Bb7 15.Ne4 Qf5 16.Bxd3 Qh5 17.Nf6+ gxf6 18.exf6',
    'Rg8 19.Rad1 Qxf3 20.Rxe7+ Nxe7 21.Qxd7+ Kxd7 22.Bf5+ Ke8',
    '23.Bd7+ Kf8 24.Bxe7# 1-0'].join('\n');

bad = ['[Event "Lets Play!"]',
    '[Site " Chess.com"]',
    '[Date "Aug 12, 2018"]',
    '[White "antonioydora"]',
    '[Black "Jadenity"]',
    '[Result "*"]',
    '[WhiteElo "907"]',
    '[BlackElo "965"]',
    '[TimeControl "1 in 3 days"]',
    '[SetUp "0"]', // SetUp 1 fails
    '1. e4 e6 2. d3 c5 3. c4 d5 4. cxd5 exd5 5. e5 Nc6 6. Nf3 f6 7. exf6 Nxf6',
    '8. Nc3 d4 9. Nb5 a6 10. Na3 Qa5+ 11. Bd2 Qb6 12. Nfg5'].join('\n');

fixed = ['[Event "Lets Play!"]',
    '[Site "Chess.com"]',
    '[Date "2018.08.12"]',
    '[White "antonioydora"]',
    '[Black "Jadenity"]',
    '[Result "*"]',
    '[WhiteElo "907"]',
    '[BlackElo "965"]',
    '[TimeControl "1 in 3 days"]',
    '[SetUp "0"]', // SetUp 1 fails
    '1. e4 e6 2. d3 c5 3. c4 d5 4. cxd5 exd5 5. e5 Nc6 6. Nf3 f6 7. exf6 Nxf6',
    '8. Nc3 d4 9. Nb5 a6 10. Na3 Qa5+ 11. Bd2 Qb6 12. Ng5 Bg4 13. f3 Bf5', // 12. Nfg5 fails
    '14. Nc4 Qb5 15. a4 Qxc4 16. dxc4 h6 17. Qe2+ Be7 18. g4 Nb4 19. Bxb4',
    'cxb4 20. Qe5 Bd7 21. Qxd4 hxg5 22. Qb6 Be6 23. Rd1 Rc8 24. Qxb7 Kf7',
    '25. Qxa6 Bxc4 26. Bxc4+ Rxc4 27. Qxc4+ Kg6 28. h4 Rxh4 29. Rxh4 gxh4  *'].join('\n');

before_bad = ['[Event "Lets Play!"]',
    '[Site "Chess.com"]',
    '[Date "2018.08.12"]',
    '[White "antonioydora"]',
    '[Black "Jadenity"]',
    '[Result "*"]',
    '[WhiteElo "907"]',
    '[BlackElo "965"]',
    '[TimeControl "1 in 3 days"]',
    '[SetUp "0"]',
    '1. e4 e6 2. d3 c5 3. c4 d5 4. cxd5 exd5 5. e5 Nc6 6. Nf3 f6 7. exf6 Nxf6',
    '8. Nc3 d4 9. Nb5 a6 10. Na3 Qa5+ 11. Bd2 Qb6 *'].join('\n');


console.log('example: ' + chess.load_pgn(example));

console.log('bad: ' + chess.load_pgn(bad));

console.log('fixed: ' + chess.load_pgn(fixed));

var options = {
    sloppy: true
};

console.log('bad with sloppy: ' + chess.load_pgn(bad, options));
console.log('fixed with sloppy: ' + chess.load_pgn(fixed, options));

console.log('loading before_bad: ' + chess.load_pgn(before_bad));
console.log('FEN: ' + chess.fen());
// console.log('move Nfg5: ' + chess.move('Nfg5'));
console.log('move Nfg5 with sloppy: ' + chess.move('Nfg5', {sloppy: true}));
// console.log('move Ng5: ' + JSON.stringify(chess.move('Ng5')));
console.log('FEN: ' + chess.fen());
// console.log(chess.ascii());
// console.log();
// console.log('loading before_bad: ' + chess.load_pgn(before_bad));
// console.log('move from f3 to g5: ' + JSON.stringify(chess.move({from: 'f3', to: 'g5'})));
//
// console.log('pgn format for after successful move: ' + chess.pgn());
// console.log('loading pgn after move: ' + chess.load_pgn(chess.pgn()));
//
// newline_char = '\\[';
// var header = [
// '[BlackElo "965"]',
// '[TimeControl "1 in 3 days"]'
// //'[SetUp "1"]', // SetUp fails
// ].join(newline_char);
// function mask(str) {
//   return str.replace(/\\/g, '\\');
// }
// console.log(newline_char);
// console.log(mask(newline_char));
// console.log(header.split(new RegExp(mask(newline_char))));
