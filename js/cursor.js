document.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.cursor-effect');
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

document.addEventListener('mouseenter', (e) => {
  const cursor = document.querySelector('.cursor-effect');
  cursor.style.display = 'block';
});

document.addEventListener('mouseleave', (e) => {
  const cursor = document.querySelector('.cursor-effect');
  cursor.style.display = 'none';
});
