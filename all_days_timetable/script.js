<script>
  const topButton = document.getElementById('top');

  // Show the button when scrolling down
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      topButton.classList.add('visible');
    } else {
      topButton.classList.remove('visible');
    }
  });

  // Smooth scroll to top when clicked
  topButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
</script>
