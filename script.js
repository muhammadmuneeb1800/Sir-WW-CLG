
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slider .slide');
  const caption = document.querySelector('.caption');

  function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => {
      slide.style.display = 'none';
    });

    // Display the selected slide
    slides[index].style.display = 'block';

    // Update caption text (you can modify this part based on your needs)
    caption.textContent = `Caption for Image ${index + 1}`;
    
    // Update current slide index
    currentSlide = index;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Show the initial slide
  showSlide(currentSlide);
