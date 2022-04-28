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

// GSAP
gsap.from(".container__hero-text__left", {
  duration: 3,
  x: "-100%",
  opacity: 0,
  ease: "expo.out",
});

gsap.from(".container__hero-text__right", {
  duration: 3,
  x: "-10%",
  opacity: 0,
  delay: 1,
  ease: "expo.out",
});

gsap.from(".header--link", {
  duration: 2,
  opacity: 0,
  stagger: 0.2,
  ease: "expo.out",
});

gsap.from(".container__about-part", {
  scrollTrigger: {
    trigger: ".container__about-part",
    scrub: 1,
    start: "center bottom",
  },
  duration: 2,
  y: "-100%",
  opacity: 0,
  stagger: 0.1,
  ease: "expo.out",
});

// gsap.fromTo(
//   ".contact-img",
//   {
//     opacity: 0,
//     rotation: 720,
//   },
//   {
//     duration: 2,
//     delay: 1.5,
//     opacity: 1,
//     rotation: 0,
//   }
// );
