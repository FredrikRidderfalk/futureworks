document.querySelector(".primary-btn").onmousemove = (e) => {
  const x = e.pageX - e.target.offsetLeft;
  const y = e.pageY - e.target.offsetTop;

  e.target.style.setProperty("--x", `${x}px`);
  e.target.style.setProperty("--y", `${y}px`);
};

document.querySelector(".contact-btn").onmousemove = (e) => {
  const x = e.pageX - e.target.offsetLeft;
  const y = e.pageY - e.target.offsetTop;

  e.target.style.setProperty("--x", `${x}px`);
  e.target.style.setProperty("--y", `${y}px`);
};

window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("preloader-finished");
});
