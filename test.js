var Chess = require('chess.js').Chess;
var chess = new Chess();

pgn = ['[Event "Lets Play!"]',
    '[Site " Chess.com"]',
    '[Date "Aug 12, 2018"]',
    '[White "antonioydora"]',
    '[Black "Jadenity"]',
    '[Result "*"]',
    '[WhiteElo "907"]',
    '[BlackElo "965"]',
    '[TimeControl "1 in 3 days"]',
    '[SetUp "1"]',
    '1. e4 e6 2. d3 c5 3. c4 d5 4. cxd5 exd5 5. e5 Nc6 6. Nf3 f6 7. exf6 Nxf6',
    '8. Nc3 d4 9. Nb5 a6 10. Na3 Qa5+ 11. Bd2 Qb6 12. Nfg5 Bg4 13. f3 Bf5',
    '14. Nc4 Qb5 15. a4 Qxc4 16. dxc4 h6 17. Qe2+ Be7 18. g4 Nb4 19. Bxb4',
    'cxb4 20. Qe5 Bd7 21. Qxd4 hxg5 22. Qb6 Be6 23. Rd1 Rc8 24. Qxb7 Kf7',
    '25. Qxa6 Bxc4 26. Bxc4+ Rxc4 27. Qxc4+ Kg6 28. h4 Rxh4 29. Rxh4 gxh4  *'];

var success = chess.load_pgn(pgn.join('\n'));
console.log(success);