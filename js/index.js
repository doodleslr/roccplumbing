window.addEventListener('load', function(event){

    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("clientText");
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1} 
        slides[slideIndex-1].classList.add("active"); 
        setTimeout(showSlides, 6000); // Change image every 2 seconds
    }
});