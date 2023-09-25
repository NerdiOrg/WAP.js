function scrollToElement(element) {
  // Calculate the offsetTop of the element relative to the document
  const elementOffset = element.getBoundingClientRect().top + window.scrollY;

  // Scroll to the element's offsetTop in the next frame
  requestAnimationFrame(() => {
    window.scrollTo({
      top: elementOffset,
      behavior: 'smooth' // You can change this to 'auto' for an instant scroll
    });
  });
}
