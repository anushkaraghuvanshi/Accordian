const headings = document.querySelectorAll('.heading');

headings.forEach(function (heading) {
  heading.addEventListener('click', function () {
    const content = this.nextElementSibling;

    this.classList.toggle('active');

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
