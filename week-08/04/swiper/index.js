const swiperimg = document.querySelectorAll(".swiper-slide");

swiperimg.forEach(img => {
    img.querySelector("img").src = generateImg();
});

function generateImg()
{
    const randomid = Math.round(Math.random()*1000);
    return `https://picsum.photos/id/${randomid}/600/600`;
}