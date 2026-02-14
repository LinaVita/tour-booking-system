const glassPanels = document.querySelectorAll('.glass');

glassPanels.forEach((panel) => {
  panel.addEventListener('mousemove', (event) => {
    const rect = panel.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const shineX = (x / rect.width) * 100;
    const shineY = (y / rect.height) * 100;

    panel.style.backgroundImage = `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.22), transparent 46%)`;
  });

  panel.addEventListener('mouseleave', () => {
    panel.style.backgroundImage = '';
  });
});
