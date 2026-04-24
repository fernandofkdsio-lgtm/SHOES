const basket= document.querySelector(".container_basket")
const black = document.querySelector("#black")
const white = document.querySelector("#white")
const change = document.querySelector(".change")
const right = document.querySelector(".right")
const left = document.querySelector(".left")

let currentIndex = 0;

function showImage(index) {
   basket.style.backgroundImage = "url(Images/" + images[index] +")";
    basket.style.backgroundPosition = "center";
    basket.style.backgroundSize = "cover";
    basket.style.backgroundRepeat = "no-repeat";
    basket.style.rotate = "150deg";
}
const images=[
    "1removebg-preview.png",
    "GW9525-04-removebg-preview.png",
    "04-removebg-preview.png",
    "IG4798-04-removebg-preview.png"
]


function basketBlack(){
    basket.style.backgroundImage="url(Images/1280-removebg-preview.png)"
    basket.style.backgroundPosition="center"
    basket.style.backgroundSize="cover"
    basket.style.backgroundRepeat="no-repeat"
    basket.style.rotate="150deg"
}
function basketWhite(){
    basket.style.backgroundImage="url(Images/whiteremovebg-preview.png)"
    basket.style.backgroundPosition="center"
    basket.style.backgroundSize="cover"
    basket.style.backgroundRepeat="no-repeat"
    basket.style.rotate="150deg"
}

function changeright() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}

function changerleft() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
}

black.addEventListener("click",()=> basketBlack())
white.addEventListener("click",()=> basketWhite())
right.addEventListener("click",()=> changeright())
left.addEventListener("click",()=> changerleft())