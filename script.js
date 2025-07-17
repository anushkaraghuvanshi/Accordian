const headings = document.querySelectorAll('.heading');

headings.forEach(heading => {
  heading.addEventListener('click', function () {
    const content = this.nextElementSibling;
    const isContentOpen = content.classList.contains('active');

    document.querySelectorAll('.content').forEach(c => {
      c.classList.remove('active');
      c.style.maxHeight = null;
    });
    document.querySelectorAll('.heading').forEach(h => {
      h.classList.remove('active');
    });

    if (!isContentOpen) {
      this.classList.add('active');
      content.classList.add('active');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});
