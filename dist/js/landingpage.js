const container = document.querySelector(".scroll-container");
const sections = gsap.utils.toArray(".scroll-container section");
const heroCard = gsap.utils.toArray(".hero-card");
const heroCardMiddle = document.querySelector(".hero-mid-card");
const heroMainCard = gsap.utils.toArray(".hero-card");
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

gsap.to(heroMainCard, {
  opacity: 0,
  y: 100,
  scrollTrigger: {
    trigger: ".hero-section",
    start: "110% center",
    end: "120% center",
    scrub: 1,
    markers: false,
    containerAnimation: scrollTween,
  },
});

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
  y: 100,
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
  onComplete: () => {
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

    tl.to(aboutHeader, {
      opacity: 1,
      y: 0,
      duration: 1,
    });

    tl.to(aboutText, {
      opacity: 1,
      y: 0,
      duration: 2,
      stagger: 0.2,
    });
  },
});

gsap.utils.toArray(".hero-section").forEach((element) => {
  //card items
  let heroTl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: "85% center",
      end: "110% center",
      scrub: 1,
      markers: false,
      containerAnimation: scrollTween,
    },
  });

  heroTl.to(card, {
    opacity: 0,
    y: 0,
    duration: 0.7,
    stagger: 0.5,
  });

  heroTl.to(aboutText, {
    opacity: 0,
    duration: 0.7,
    y: 0,
    stagger: 0.5,
  });
});
