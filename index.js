var imageindex = 425;

let slideIndex = 0;
showSlides();

function plusSlides(x) {
  var image = document.getElementById("carousel-img");
  imageindex = imageindex + x;

  // Fade out current image
  image.style.opacity = 0;

  // Change image source after fade out
  setTimeout(function () {
    image.src =
      "Photos Live In (2 GB)/Photos Live In/GOPR0" + imageindex + ".JPG";
  }, 500); // Adjust timing to match the transition duration

  // Fade in new image
  setTimeout(function () {
    image.style.opacity = 1;
  }, 600); // Adjust timing to match the transition duration
}

function showSlides() {
  let slides = document.getElementsByClassName("slide");

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Move to the next slide
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Display the current slide
  slides[slideIndex - 1].style.display = "block";

  // Change slide every 3 seconds (3000 milliseconds)
  setTimeout(showSlides, 3000);
}
