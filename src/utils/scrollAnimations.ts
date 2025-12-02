import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Global Lenis instance
let lenis: Lenis | null = null;

/**
 * Initialize Lenis smooth scrolling
 */
export function initSmoothScroll() {
  // Initialize Lenis
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  });

  // Integrate Lenis with GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis?.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return lenis;
}

/**
 * Initialize scroll animations for section transitions
 */
export function initScrollAnimations() {
  // Initialize smooth scroll first
  initSmoothScroll();

  // Get all sections with scroll animations
  const sections = document.querySelectorAll('[data-scroll-section]');

  sections.forEach((section) => {
    const elements = section.querySelectorAll('[data-scroll-animate]');

    if (elements.length === 0) return;

    // Set initial state for elements
    gsap.set(elements, {
      y: 100,
      opacity: 0,
    });

    // Create a single timeline that handles both entry and exit
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 70%', // Start when section is 80% from top of viewport
        end: 'bottom bottom',   // End when section is 20% from top of viewport
        scrub: 1,
        toggleActions: 'play none none reverse',
      },
    });

    // Animate in with stagger
    timeline.to(elements, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.5,
      ease: 'power2.out',
    });

    // Exit animation: Fade out when section reaches the top
    const exitTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 20%',      // Start when section top reaches viewport top
        end: 'bottom top',     // End when section bottom reaches viewport top
        scrub: 1,
      },
    });

    exitTimeline.to(elements, {
      y: -50,
      opacity: 0,
      duration: 0.4,
      stagger: 0.2,
      ease: 'power2.in',
    });
  });
}

/**
 * Refresh ScrollTrigger instances
 * Call this after dynamic content changes
 */
export function refreshScrollAnimations() {
  ScrollTrigger.refresh();
}

/**
 * Kill all ScrollTrigger instances and destroy Lenis
 * Useful for cleanup
 */
export function killScrollAnimations() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  lenis?.destroy();
  lenis = null;
}

/**
 * Get the Lenis instance
 */
export function getLenis() {
  return lenis;
}
