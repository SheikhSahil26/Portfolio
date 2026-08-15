import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─── Scroll-triggered fade in ───────────────────────────────────

export function createScrollFadeIn(
  element: string | Element,
  options: {
    y?: number;
    duration?: number;
    delay?: number;
    start?: string;
  } = {}
) {
  const { y = 60, duration = 1, delay = 0, start = 'top 85%' } = options;

  return gsap.fromTo(
    element,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element as gsap.DOMTarget,
        start,
        toggleActions: 'play none none none',
      },
    }
  );
}

// ─── Scroll-triggered stagger ───────────────────────────────────

export function createScrollStagger(
  container: string | Element,
  children: string,
  options: {
    y?: number;
    stagger?: number;
    duration?: number;
    start?: string;
  } = {}
) {
  const { y = 40, stagger = 0.1, duration = 0.8, start = 'top 85%' } = options;

  return gsap.fromTo(
    `${container} ${children}`,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container as gsap.DOMTarget,
        start,
        toggleActions: 'play none none none',
      },
    }
  );
}

// ─── Text split animation ───────────────────────────────────────

export function createTextReveal(
  element: string | Element,
  options: {
    duration?: number;
    delay?: number;
    start?: string;
  } = {}
) {
  const { duration = 1.2, delay = 0, start = 'top 85%' } = options;

  return gsap.fromTo(
    element,
    { y: '100%', opacity: 0 },
    {
      y: '0%',
      opacity: 1,
      duration,
      delay,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: element as gsap.DOMTarget,
        start,
        toggleActions: 'play none none none',
      },
    }
  );
}

// ─── Horizontal line draw ───────────────────────────────────────

export function createLineDraw(
  element: string | Element,
  options: {
    duration?: number;
    start?: string;
  } = {}
) {
  const { duration = 1.5, start = 'top 90%' } = options;

  return gsap.fromTo(
    element,
    { scaleX: 0, transformOrigin: 'left center' },
    {
      scaleX: 1,
      duration,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: element as gsap.DOMTarget,
        start,
        toggleActions: 'play none none none',
      },
    }
  );
}

// ─── Parallax scroll ────────────────────────────────────────────

export function createParallax(
  element: string | Element,
  speed: number = 0.5
) {
  return gsap.to(element, {
    yPercent: -100 * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element as gsap.DOMTarget,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
}

// ─── Kill all ScrollTriggers ────────────────────────────────────

export function killAllScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}

export { gsap, ScrollTrigger };
