const swiperimg = document.querySelectorAll(".pics");

swiperimg.forEach(img => {
    const randomImg = generateImg(); 
    img.href = randomImg;
    img.querySelector("img").src = randomImg;
});

function generateImg()
{
    const randomid = Math.round(Math.random()*1000);
    return `https://picsum.photos/id/${randomid}/600/600`;
}