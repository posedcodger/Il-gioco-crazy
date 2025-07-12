function apriPorta(url) {
  const overlay = document.getElementById('overlay');
  overlay.style.pointerEvents = 'auto';
  overlay.style.opacity = '1';

  setTimeout(() => {
    window.location.href = url;
  }, 500);
}
