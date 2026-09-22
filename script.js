document.getElementById("year").textContent = String(new Date().getFullYear());

const nav = document.querySelector(".nav");
const onScroll = () => {
  if (!nav) return;
  nav.classList.toggle("scrolled", window.scrollY > 8);
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("visible"));
}
