const container = document.querySelector(".container");
let ct = 1;

const getStudent = () => {
  for (let i = 0; i < 25; i++) {
    const html = `<div id="student">Student ${ct}</div>`;
    ct++;
    container.insertAdjacentHTML("beforeend", html);
  }
};

//Infinite scroll logic

container.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = container;
  if (scrollHeight <= Math.ceil(scrollTop + clientHeight)) {
    getStudent();
  }
});

getStudent();
