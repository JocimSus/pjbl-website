function test (x)
{
	console.log(x)
	
}






var imageindex = Math. floor(Math. random()*10) + 1
var maxindex = 10
var autoslide = setInterval(plusSlides, 6000);

function plusSlides () {
    var image = document.getElementById("carousel-img");
    imageindex = imageindex + 1
    if (imageindex > maxindex)
    {
        imageindex = 1
    }


    // Fade out current image
    image.style.opacity = 0;

    // Change image source after fade out
    setTimeout(function() {
        image.src = "Photos_Simplified/" + imageindex + ".jpg"
    }, 500); // Adjust timing to match the transition duration

    // Fade in new image
    setTimeout(function() {
        image.style.opacity = 1;
    }, 600); // Adjust timing to match the transition duration
}

function adjust ()
{
    var elements = document.getElementsByClassName("navigation");
    var img = document.getElementById("carousel-img");
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;

    if (windowHeight > windowWidth) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.fontSize = "3vw";
        }
        document.getElementById("title").style.fontSize = "3vh"
        document.getElementById("title2").style.fontSize = "8vh"
        img.style.width = "auto"
        img.style.height = "100%"
        
    } else {
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.fontSize = "3vh";
        }
        document.getElementById("title").style.fontSize = "3vw"
        document.getElementById("title2").style.fontSize = "8vw"
        img.style.width = "100%"
        img.style.height = "auto"
    }

    

}

plusSlides()
adjust()