document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const section = document.querySelector(event.target.getAttribute('href'));
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
  