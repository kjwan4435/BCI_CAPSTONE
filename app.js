import express from "express";

import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";

import { home, postInfo, getExp, postExp, startGame } from "./main";

const app = express();

export const EXP = (id) => {
  if (id) {
    return `/experiment/${id}`;
  } else {
    return "/experiment";
  }
};

export const CHICKEN_GAME = (id) => {
  if (id) {
    return `/chicken-game/${id}`;
  } else {
    return "/chicken-game";
  }
};

app.use(helmet()); // for security
app.set("view engine", "pug"); // set은 앱의 설정, view engine의 default는 undefined임. expressjs 공식문서 볼 것.
app.use("/static", express.static("static"));
app.use(cookieParser()); // user 정보를 쿠키에 저장하기 위함, 쿠키를 전달받아서 사용할 수 있도록 해줌.(ex 사용자 인증)
app.use(bodyParser.json()); // 서버에 저장된 것들을 받아오기 위함. 사용자가 웹사이트로 전달하는 정보들을 검사
app.use(bodyParser.urlencoded({ extended: true })); // (우리가 서버에 어떤 형식을 전송하는 지 알려주어야 함) urlencoded - normal html
app.use(morgan("dev")); // for logging

app.get("/", home);
app.post("/", postInfo);
app.get(EXP(), getExp);
app.post(EXP(), postExp);
app.get("/experiment/:id", getExp);
app.post("/experiment/:id", postExp);
app.get("/chicken-game/:id", startGame);

export default app;
