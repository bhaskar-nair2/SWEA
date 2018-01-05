var slideIndex = 0;
var imgIndex = 0;
showSlides();

function showSlides() {
    var i;
    //CS-fifa-pubg-cl-blur
    var Tvals=["100","50","30","200","60"];
    var Pvals=["100","100","100","50","100"];
    var PZvals=["10K","3K","50K","1K","2K"];
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }
    slideIndex++;
    $("#tm").text(Tvals[imgIndex]);
    $("#pm").text(Pvals[imgIndex]);
    $("#pz").text(PZvals[imgIndex]);
    imgIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    if (imgIndex>4){
        imgIndex=0
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}
