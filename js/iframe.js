document.addEventListener("DOMContentLoaded", () => {
  const map = document.querySelector("iframe[data-src]");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        map.src = map.dataset.src;
        observer.unobserve(map);
      }
    });
  });

  observer.observe(map);
});
