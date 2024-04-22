const container = document.querySelector(".scroll-container");
const sections = gsap.utils.toArray(".scroll-container section");
const heroCard = gsap.utils.toArray(".hero-card");
const heroCardMiddle = document.querySelector(".hero-mid-card");
const heroMainCard = document.querySelector(".hero-card");
const nav = document.querySelector("nav");
const card = gsap.utils.toArray(".hero-content");
const loader = document.querySelector(".loader");
console.log(nav);
console.log(sections);

//smoth scroll
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);

  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// //disable scroll

// setTimeout(() => {
//   document.body.classList.remove("disable-scroll");
// }, 5000);

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

// gsap.set(loader, {
//   opacity: 1,
// });
// //set initial state
// gsap.set(card, {
//   opacity: 0,
//   y: 100,
// });

// gsap.set(nav, {
//   opacity: 0,
// });

// //start the animation sequence
// gsap.fromTo(
//   heroCardMiddle,
//   {
//     width: " 100vw",
//     height: "100vh",
//     borderRadius: 0,
//   },
//   {
//     height: "70vh",
//     width: "30vw",
//     borderRadius: 20,
//     delay: 2,
//     duration: 2,
//     ease: "back.out(1)",
//     onStart: () => {
//       //stop the loader
//       gsap.to(loader, {
//         opacity: 0,
//         duration: 1,
//       });

//       setTimeout(() => {
//         //enable scroll
//         loader.style.display = "none";
//       }, 3000);
//     },
//     onComplete: () => {
//       //after the card shrink start the animation
//       heroCard.forEach((element) => {
//         //card items
//         gsap.to(card, {
//           opacity: 1,
//           y: 0,
//           duration: 0.7,
//           stagger: 0.1,
//           delay: 0.5,
//         });
//       });

//       //nav
//       gsap.to(nav, {
//         opacity: 1,
//         duration: 0.7,
//         delay: 0.5,
//       });
//     },
//   }
// );

//About section
const aboutSection = document.querySelector(".about-section");
const aboutCard = document.querySelector(".about-card");
const aboutHeader = document.querySelector(".about-header");
const aboutText = gsap.utils.toArray(".about-text");
console.log(aboutText);

gsap.set(aboutCard, {
  opacity: 0,
  y: 100,
});

gsap.set(aboutHeader, {
  opacity: 0,
  y: -100,
});

gsap.set(aboutText, {
  opacity: 0,
  y: 100,
});

gsap.to(aboutCard, {
  opacity: 1,
  y: 0,
  duration: 2,
  scrollTrigger: {
    trigger: aboutSection,
    start: "-10% center",
    end: "15% center",
    scrub: 1,
    markers: false,
    containerAnimation: scrollTween,
  },
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: aboutSection,
    start: "15% center",
    end: "+=400",
    scrub: 1,
    markers: false,
    containerAnimation: scrollTween,
  },
});

tl.to(
  aboutHeader,
  {
    opacity: 1,
    y: 0,
    duration: 1,
  },
  "<"
);

tl.to(
  aboutText,
  {
    opacity: 1,
    y: 0,
    duration: 2,
    stagger: 0.5,
  },
  "<"
);

//hide card on scroll for each section

// gsap.utils.toArray(".hero-section").forEach((element) => {
//   //card items
//   let heroTl = gsap.timeline({
//     scrollTrigger: {
//       trigger: element,
//       start: "85% center",
//       end: "110% center",
//       scrub: 1,
//       markers: false,
//       containerAnimation: scrollTween,
//     },
//   });

//   heroTl.to(card, {
//     opacity: 0,
//     y: 0,
//     duration: 0.7,
//     stagger: 0.5,
//   });

//   heroTl.to(aboutText, {
//     opacity: 0,
//     duration: 0.7,
//     y: 0,
//     stagger: 0.5,
//   });
// });

// heroTl.to(heroMainCard, {
//   opacity: 0,
//   y: 100,
//   scrollTrigger: {
//     trigger: ".hero-section",
//     start: "90% center",
//     end: "110% center",
//     scrub: 1,
//     markers: true,
//     containerAnimation: scrollTween,
//   },
// });

//Forum text
const forumSection = document.querySelector(".forum-section");
const forumCardRight = document.querySelector(".forum-card-right");
const forumCardLeft = document.querySelector(".forum-card-left");
const forumTextRight = document.querySelector(".forum-text-right");
const forumTextLeft = gsap.utils.toArray(".forum-text-left");

gsap.set(forumCardRight, {
  opacity: 0,
  y: 100,
});

gsap.set(forumCardLeft, {
  opacity: 0,
  y: -100,
});

gsap.set(forumTextRight, {
  opacity: 0,
  y: -100,
});

gsap.set(forumTextLeft, {
  opacity: 0,
  y: 100,
});

let forumRightTl = gsap.timeline({
  scrollTrigger: {
    trigger: forumSection,
    start: "-20% center",
    end: "15% center",
    scrub: 1,
    markers: true,

    containerAnimation: scrollTween,
  },
});

forumRightTl.to(
  forumCardRight,
  {
    opacity: 1,
    y: 0,
  },
  "<"
);

forumRightTl.to(
  forumTextRight,
  {
    opacity: 1,
    y: 0,
  },
  "<"
);

let forumLeftTl = gsap.timeline({
  scrollTrigger: {
    trigger: forumSection,
    start: "20% center",
    end: "45% center",
    scrub: 1,
    markers: true,
    containerAnimation: scrollTween,
  },
});

forumLeftTl.to(
  forumCardLeft,
  {
    opacity: 1,
    y: 0,
  },
  "<"
);

forumLeftTl.to(
  forumTextLeft,
  {
    opacity: 1,
    y: 0,
  },
  "<"
);
