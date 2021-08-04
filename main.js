const click = document.querySelector(".click");

function hexGenerator() {
  const hexNumbers = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    'A',
    'B',
    'C',
    'D',
    'E',
    'F'
  ];

  let result = "#";

  for (var i = 0; i < 6; i += 1) {
    const randomIndex = Math.floor(Math.random() * hexNumbers.length);
    result += hexNumbers[randomIndex];
  }

  changeColor(result);
}

// color,color code output

function changeColor(color) {
  const name = document.querySelector(".colorName");

  document.body.style.background = color;
  name.innerText = `HEX COLOR : ${color}`
}

click.addEventListener("click", hexGenerator);
