const cardSlider = document.querySelector('.card-slider');

let clientX = null;
let grabbing = false;
let prevDistanceScrolled = null
let disTanceToScroll;

cardSlider.addEventListener("mousedown", (e) => {
    clientX = e.clientX;
    grabbing = true;
})

cardSlider.addEventListener("mouseup", () => {
    grabbing = false;
    prevDistanceScrolled += disTanceToScroll;
})

cardSlider.addEventListener("mousemove", (e) => {
    if (grabbing) {
        let newClientX = e.clientX;
        disTanceToScroll = newClientX - clientX;
        cardSlider.style.transform = `translateX(${disTanceToScroll + prevDistanceScrolled}px)`
    }
})