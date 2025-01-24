const btnEl=document.querySelector(".btn");
const closeBtnEl=document.querySelector(".close-icon");
const trailerContainerEl=document.querySelector(".video-trailer");
const vedioEl=document.querySelector("video")
btnEl.addEventListener("click", ()=>{
    trailerContainerEl.classList.remove("active")
});
closeBtnEl.addEventListener("click",()=>{
    trailerContainerEl.classList.add("active")
    vedioEl.pause();
    vedioEl.currentTime=0;
})
