document.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.cursor-effect');
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
