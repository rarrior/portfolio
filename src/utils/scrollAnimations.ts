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

    // Entry Animation Timeline
    const entryTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'bottom 70%',
        end: 'bottom 70%',
        scrub: 0.5,
      },
    });

    entryTimeline.fromTo(
      elements,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.05,
        ease: 'power2.out',
      }
    );

    // Exit Animation Timeline
    const exitTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: '50% 10%',
        end: 'bottom 10%',
        scrub: 0.5,
      },
    });

    exitTimeline.fromTo(
      elements,
      {
        y: 0,
        opacity: 1,
      },
      {
        y: -150,
        opacity: 0,
        duration: 1,
        stagger: 0.02,
        ease: 'power2.in',
      }
    );
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
