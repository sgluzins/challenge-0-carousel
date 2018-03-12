var slideIndex = 0;
carousel();

function carousel() {
    let i;
    const imgs = document.getElementsByClassName('image');

    for(let img of imgs){
        img.style.display = 'none';
    }
    slideIndex++;
    if(slideIndex > imgs.length){
        slideIndex = 1;
    }
    imgs[slideIndex-1].style.display = 'block';
    setTimeout(carousel, 2000);
}