import { prisma } from "./generated/prisma-client";
import { EXP, CHICKEN_GAME } from "./app";
import bodyParser from "body-parser";

export const home = async (req, res) => {
  res.render("info");
  //   res.json(subjects);
};

export const postInfo = async (req, res) => {
  const {
    body: { name, age, country, education },
  } = req;
  const newSubject = await prisma.createSubject({
    name,
    age: Number(age),
    country,
    education,
  });
  res.redirect(EXP(newSubject.id));
};

export const getExp = async (req, res) => {
  const {
    params: { id },
  } = req;
  res.render("exp", { id });
};

export const postExp = async (req, res) => {
  const {
    params: { id },
    body: { comment },
  } = req;
  await prisma.updateSubject({
    data: {
      questions1: comment,
    },
    where: {
      id: id,
    },
  });
  res.redirect(CHICKEN_GAME(id));
};

export const startGame = async (req, res) => {
  const {
    params: { id },
  } = req;
  res.render("chickenGame", { id });
};
