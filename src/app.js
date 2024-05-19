/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const button = document.getElementById("changeButton");
  const excuseDisplay = document.getElementById("excuseDisplay");

  const colors = ["#FF5733", "#33FF57", "#5733FF", "#33FFFF", "#FFFF33"];

  const who = ["The dog", "My grandma", "The mailman", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "my phone", "the car"];
  const when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  const excuses = [];

  who.forEach(whoItem => {
    action.forEach(actionItem => {
      what.forEach(whatItem => {
        when.forEach(whenItem => {
          excuses.push(`${whoItem} ${actionItem} ${whatItem} ${whenItem}`);
        });
      });
    });
  });

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function getRandomExcuse() {
    return excuses[Math.floor(Math.random() * excuses.length)];
  }

  let clickCount = 0; // Definindo a variável clickCount aqui

  function changeButton() {
    document.body.style.backgroundColor = getRandomColor();

    excuseDisplay.textContent = getRandomExcuse();

    if (clickCount % 2 === 0) {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      button.style.top = Math.random() * (windowHeight - 100) + "px";
      button.style.left = Math.random() * (windowWidth - 100) + "px";
    }

    clickCount++;
  }

  button.addEventListener("click", changeButton);

  changeButton();

  console.log("Hello Rigo from the console!");
};
