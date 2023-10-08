console.log("hi class");
const game = {
    team1: 'Viet Nam',
    team2: 'Thai Lan',
    players: [[
        'Van Thanh',
        'Tuan Tu',
        'Toan Thang',
        'Hong Son',
        'Hai Dang'
    ],
    [
        'Sakawoa',
        'Burki',
        'Brand',
        'Hummer',
        'Hakimi'
    ]],
    score: '4:0',
    scored: ['Van Thanh','Tuan Tu',
    'Toan Thang','Hong Son'],
    date: 'Jun 8th, 2023',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    }
};
// 1. Tạo 2 mảng players cho mỗi team (vd: player1, player2)

const [player1,player2] = game.players;
const [doi01,doi02,doi03]=game.players;
console.log(player1,player2);
console.log(doi01,doi02,doi03)

//2. Người chơi đầu tiên trong bất kỳ mảng nào là gk, và những người còn lại là fplay
const [gk,...fplays]=player1;
console.log(gk,fplays);

//3. Nối hai mảng lại thành một
const allplayer = [...player1,...player2];
console.log(allplayer);

// 4. Thêm 3 phần tử vào mảng player1
const player1_all =[...player1,'Thanh Hung', 'Quang Viet','Tran Van'];
console.log(player1_all);
//5. đổi tên x thành draw trong odds

const {odds:{team1, x: draw,team2}} = game;
console.log(team1,draw,team2);

//6. Viết hàm in ra số bàn thắng được ghi
const inGoals = function (...players){
    console.log(players);
    console.log(`${players.length} goals were scored`);
};
inGoals('Quang Viet','Van Thanh');
inGoals('Sakawoa','Burki','Hakimi');
inGoals(...game.scored);
//7. Xác định đội nào có khả năng dành chiến thắng nhất
// dựa vào tỷ lệ cá cược giữa team1 và team2 (odds) không sử dụng if else mà sử dụng toán tử logic
team1 < team2 && console.log('Team1 có khả năng chiến thắng');
team1 > team2 && console.log('Team1 có khả năng chiến thắng');
// nhập vào một chuỗi rồi in ra màn hình
// const input = prompt("Nhập vào một chuỗi");
// console.log(input);



