// node_modules 에 있는 express 관련 파일을 가져온다.
var express = require("express");

// express 는 함수이므로, 반환값을 변수에 저장한다.
var app = express();

// 3000 포트로 서버 오픈
app.listen(5000, function () {
    console.log("start! express server on port 5000");
});

// request 와 response 라는 인자를 줘서 콜백 함수를 만든다.
// localhost:3000 브라우저에 res.send() 내부의 문자열이 띄워진다.
app.get("/", function (req, res) {
    res.send("<h1>hi friend!</h1>");
});

// localhost:3000/main 브라우저에 res.sendFile() 내부의 파일이 띄워진다.
//__dirname 은 요청하고자 하는 파일의 경로(최상위 디렉토리~현재 디렉토리)를 단축시켜주는 절대경로 식별자이다.
app.get("/main", function (req, res) {
    res.sendFile(__dirname + "/public/main.html");
});

// public 디렉토리를 static으로 기억한다.
// public 내부의 파일들을 localhost:3000/파일명 으로 브라우저에서 불러올 수 있다.
app.use(express.static("public"));
