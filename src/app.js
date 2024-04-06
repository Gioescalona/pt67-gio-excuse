/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#key").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuseGenerator();
  });
  //write your code here
  console.log("Hello Rigo from the console!");
};

let excuseGenerator = () => {
  let article = ["¡La", "¡Una"];
  let substantive = ["niña", "yegua", "profesora", "compañera"];
  let action = ["se comió", "parió", "no explicó", "suspendió"];
  let thing = ["mi merienda", "un potrillo", "los deberes", "un moco"];
  let where = [
    "en el colegio!",
    "en clase!",
    "en el examen!",
    "en la hípica!",
    "en el establo!"
  ];

  let artHtml = Math.floor(Math.random() * article.length);
  let subsHtml = Math.floor(Math.random() * substantive.length);
  let actionHtml = Math.floor(Math.random() * action.length);
  let thingHtml = Math.floor(Math.random() * thing.length);
  let whereHtml = Math.floor(Math.random() * where.length);

  return (
    article[artHtml] +
    " " +
    substantive[subsHtml] +
    " " +
    action[actionHtml] +
    " " +
    thing[thingHtml] +
    " " +
    where[whereHtml]
  );
};
