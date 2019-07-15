var slide_index = 1;
show_slides(slide_index);

// next/previous controls :
function plus_slide(n){
    show_slides(slide_index += n);
}

// thumbnail image controls :
function the_slide(n){
    show_slides(slide_index = n);
}

function show_slides(n){
    var i;
    var slides  = document.getElementsByClassName("my_slides");
    var dots = document.getElementsByClassName("dot");
    if(n > slides.length) {
        slide_index = 1;
    }
    if(n < 1){
        slide_index = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slide_index-1].style.display = "block";
    dots[slide_index-1].className += " active";
}
