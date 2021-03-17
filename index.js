let express = require('express'); //웹서버를 돌려주는 코드
let app = express();
let router = require('./router/main')(app); //실행할 코드 main.js 소환
let port = process.env.PORT || 3000; //포트번호 할당

//
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

let server = app.listen(port, function(){ //listen: 서버가 접속해 들어올 client를 기다리고 있음
    console.log("Express server has started on port "+ port)
});
