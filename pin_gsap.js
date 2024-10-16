gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray('.container');

gsap
    .to(sections, {
        xPercent: -100 * (sections.length - 1),
        scrollTrigger: {
            trigger: ".main-test-container",
            pin: true,
            scrub: 0.5,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + document.querySelector('.main-test-container').offsetWidth
        }
    })
