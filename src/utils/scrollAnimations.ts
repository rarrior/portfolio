import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize scroll animations for section transitions
 */
export function initScrollAnimations() {
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
        start: 'top 80%', // Start when section is 80% from top of viewport
        end: 'top 20%',   // End when section is 20% from top of viewport
        scrub: 1,
        toggleActions: 'play none none reverse',
      },
    });

    // Animate in with stagger
    timeline.to(elements, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.05,
      ease: 'power2.out',
    });

    // Exit animation: Fade out when section reaches the top
    const exitTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',      // Start when section top reaches viewport top
        end: 'bottom top',     // End when section bottom reaches viewport top
        scrub: 1,
      },
    });

    exitTimeline.to(elements, {
      y: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.02,
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
 * Kill all ScrollTrigger instances
 * Useful for cleanup
 */
export function killScrollAnimations() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}
