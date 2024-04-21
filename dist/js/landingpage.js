const container = document.querySelector(".scroll-container");
const sections = gsap.utils.toArray(".scroll-container section");
const heroCard = gsap.utils.toArray(".hero-card");
const heroCardMiddle = document.querySelector(".hero-mid-card");
const nav = document.querySelector("nav");
const card = gsap.utils.toArray(".hero-content");
console.log(nav);
console.log(sections);

//smoth scroll
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//horizontal scroll
let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".scroll-container",
    pin: true,
    scrub: 1,
    markers: false,
    end: "+=1500",
  },
});

//set initial state
gsap.set(card, {
  opacity: 0,
  y: 100,
});

gsap.set(nav, {
  opacity: 0,
});

//start the animation sequence
gsap.fromTo(
  heroCardMiddle,
  {
    width: " 100vw",
    height: "100vh",
    borderRadius: 0,
  },
  {
    height: "70vh",
    width: "30vw",
    borderRadius: 20,
    delay: 3,
    duration: 2,
    ease: "back.out(1)",
    onComplete: () => {
      //after the card shrink start the animation
      heroCard.forEach((element) => {
        console.log(card);

        //card items
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          delay: 0.3,
        });
      });

      //nav
      gsap.to(nav, {
        opacity: 1,
        duration: 0.7,
        delay: 0.3,
      });
    },
  }
);
