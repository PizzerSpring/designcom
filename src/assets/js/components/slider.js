const comContainer = document.querySelector(".com_container");

const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const slide3 = document.querySelector(".slide3");

slide1.addEventListener("click", () => {
    comContainer.style.backgroundImage = "url(../../assets/images/Bg_img_01.png)";
    slide1.classList.add("slide-active");
    slide2.classList.remove("slide-active");
    slide3.classList.remove("slide-active");
});

slide2.addEventListener("click", () => {
    comContainer.style.backgroundImage = "url(../../assets/images/Bg_img_02.png)";
    slide2.classList.add("slide-active");
    slide1.classList.remove("slide-active");
    slide3.classList.remove("slide-active");
});

slide3.addEventListener("click", () => {
    comContainer.style.backgroundImage = "url(../../assets/images/Bg_img_03.png)";
    slide3.classList.add("slide-active");
    slide1.classList.remove("slide-active");
    slide2.classList.remove("slide-active");
});