/**
 * Description Carousel
 * Creates two independently scrolling columns (adjectives and nouns) that create
 * random combinations. The semantic pairs remain in the DOM for screen readers
 * but are visually hidden. Respects prefers-reduced-motion.
 */

(function () {
  "use strict";

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    return;
  }

  const staticContainer = document.getElementById("description-static");
  const carouselContainer = document.getElementById("description-carousel");
  const adjectivesTrack = document.getElementById("adjectives-track");
  const nounsTrack = document.getElementById("nouns-track");

  if (!staticContainer || !carouselContainer || !adjectivesTrack || !nounsTrack) {
    return;
  }

  // Extract pairs from static HTML
  const pairs = Array.from(staticContainer.querySelectorAll(".description-pair")).map((pair) => ({
    adjective: pair.querySelector(".adjective").textContent,
    noun: pair.querySelector(".noun").textContent,
  }));

  if (pairs.length < 3) {
    return;
  }

  // Create items for each column (no shuffling)
  const adjectives = pairs.map((p) => p.adjective);
  const nouns = pairs.map((p) => p.noun);

  // Populate tracks
  adjectives.forEach((text) => {
    const item = document.createElement("div");
    item.className = "carousel-item";
    item.textContent = text;
    adjectivesTrack.appendChild(item);
  });

  nouns.forEach((text) => {
    const item = document.createElement("div");
    item.className = "carousel-item";
    item.textContent = text;
    nounsTrack.appendChild(item);
  });

  // Hide static, show carousel
  staticContainer.classList.add("visually-hidden");
  carouselContainer.style.display = "flex";

  // Animation state
  let adjectiveIndex = 0;
  let nounIndex = 0;
  let nounAdvanceCount = 0; // Track how many times nouns have advanced

  function updateCarousel() {
    const adjectiveItems = Array.from(adjectivesTrack.children);
    const nounItems = Array.from(nounsTrack.children);

    // Update adjectives (show 5: far-above, above, focus, below, far-below)
    adjectiveItems.forEach((item, i) => {
      item.classList.remove(
        "carousel-focus",
        "carousel-above",
        "carousel-below",
        "carousel-far-above",
        "carousel-far-below",
        "carousel-hidden",
      );

      const distance = (i - adjectiveIndex + adjectives.length) % adjectives.length;

      if (distance === 0) {
        item.classList.add("carousel-focus");
      } else if (distance === adjectives.length - 1) {
        item.classList.add("carousel-above");
      } else if (distance === adjectives.length - 2) {
        item.classList.add("carousel-far-above");
      } else if (distance === 1) {
        item.classList.add("carousel-below");
      } else if (distance === 2) {
        item.classList.add("carousel-far-below");
      } else {
        item.classList.add("carousel-hidden");
      }
    });

    // Update nouns (show 5: far-above, above, focus, below, far-below)
    nounItems.forEach((item, i) => {
      item.classList.remove(
        "carousel-focus",
        "carousel-above",
        "carousel-below",
        "carousel-far-above",
        "carousel-far-below",
        "carousel-hidden",
      );

      const distance = (i - nounIndex + nouns.length) % nouns.length;

      if (distance === 0) {
        item.classList.add("carousel-focus");
      } else if (distance === nouns.length - 1) {
        item.classList.add("carousel-above");
      } else if (distance === nouns.length - 2) {
        item.classList.add("carousel-far-above");
      } else if (distance === 1) {
        item.classList.add("carousel-below");
      } else if (distance === 2) {
        item.classList.add("carousel-far-below");
      } else {
        item.classList.add("carousel-hidden");
      }
    });
  }

  function advance() {
    // Nouns scroll up (decrement to move upward visually)
    nounIndex = (nounIndex - 1 + nouns.length) % nouns.length;
    nounAdvanceCount++;

    // Adjectives advance every 4 noun advances
    if (nounAdvanceCount % 4 === 0) {
      adjectiveIndex = (adjectiveIndex - 1 + adjectives.length) % adjectives.length;
    }

    updateCarousel();
  }

  // Initialize
  updateCarousel();

  // Click handlers for manual advancement
  const adjectivesColumn = adjectivesTrack.closest(".carousel-column");
  const nounsColumn = nounsTrack.closest(".carousel-column");

  if (adjectivesColumn) {
    adjectivesColumn.style.cursor = "pointer";
    adjectivesColumn.addEventListener("click", () => {
      adjectiveIndex = (adjectiveIndex - 1 + adjectives.length) % adjectives.length;
      updateCarousel();
    });
  }

  if (nounsColumn) {
    nounsColumn.style.cursor = "pointer";
    nounsColumn.addEventListener("click", () => {
      nounIndex = (nounIndex - 1 + nouns.length) % nouns.length;
      updateCarousel();
    });
  }

  // Advance every 2.6 seconds
  setInterval(advance, 2600);
})();
