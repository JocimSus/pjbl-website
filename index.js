function test(x) {
  console.log(x);
}

var imageindex = Math.floor(Math.random() * 10) + 1;
var maxindex = 16;
var autoslide = setInterval(plusSlides, 6000);

function plusSlides() {
  var image = document.getElementById("carousel-img");
  imageindex = imageindex + 1;
  if (imageindex > maxindex) {
    imageindex = 1;
  }

  image.style.opacity = 0;

  // Change image source after fade out
  setTimeout(function () {
    image.src = "Photos_Simplified/" + imageindex + ".JPG";
  }, 400); // Adjust timing to match the transition duration

  // Fade in new image
  setTimeout(function () {
    image.style.opacity = 1;
  }, 500); // Adjust timing to match the transition duration
}

function adjust() {
  var elements = document.getElementsByClassName("navigation");
  var img = document.getElementById("carousel-img");
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var parentSections = document.getElementsByClassName("parentsection");
  var mainImages = document.getElementsByClassName("mainimage");

  if (windowHeight > windowWidth) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.fontSize = "3vw";
    }
    for (var i = 0; i < parentSections.length; i++) {
      if (parentSections[i].classList.contains("reverse")) {
        parentSections[i].style.flexDirection = "column-reverse";
      } else {
        parentSections[i].style.flexDirection = "column";
      }
    }
    for (var i = 0; i < mainImages.length; i++) {
      mainImages[i].style.width = "60%";
      mainImages[i].style.height = "auto";
    }
    document.getElementById("title").style.fontSize = "3vh";
    document.getElementById("title2").style.fontSize = "8vh";
    img.style.width = "auto";
    img.style.height = "100%";
    document.getElementById("footerdiv").style.flexDirection = "column";
  } else {
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.fontSize = "3vh";
    }
    for (var i = 0; i < parentSections.length; i++) {
      parentSections[i].style.flexDirection = "row";
    }
    for (var i = 0; i < mainImages.length; i++) {
      mainImages[i].style.width = "35%";
      mainImages[i].style.height = "55%";
    }
    document.getElementById("title").style.fontSize = "3vw";
    document.getElementById("title2").style.fontSize = "8vw";
    img.style.width = "100%";
    img.style.height = "auto";
    document.getElementById("footerdiv").style.flexDirection = "row";
  }
}

plusSlides();
adjust();
