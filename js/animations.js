// Scroll fade effect
document.addEventListener('scroll', () => {
  document.querySelectorAll('.scroll-fade').forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
});

// Whole page motion effect
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.page-motion').forEach(element => {
    element.classList.add('visible');
  });
});

// Storytelling motion effect
document.addEventListener('scroll', () => {
  document.querySelectorAll('.storytelling-motion').forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
});

// Skeleton screen effect
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelectorAll('.skeleton').forEach(element => {
      element.classList.remove('skeleton');
    });
  }, 2000); // Adjust the timeout as needed
});
