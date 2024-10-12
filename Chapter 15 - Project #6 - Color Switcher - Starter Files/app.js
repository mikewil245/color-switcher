const body = document.body;
const switchBtn = document.querySelector(".switch");
const switchPara = document.querySelector(".color");

switchBtn.addEventListener("click", () => {
  let color1 = getRandomNum();
  let color2 = getRandomNum();
  let color3 = getRandomNum();

  const colorString = `rgb(${color1},${color2},${color3})`;
  console.log(colorString);

  body.style.backgroundColor = colorString;
  switchPara.innerHTML = colorString;
});

function getRandomNum() {
  return Math.floor(Math.random() * 256);
}
