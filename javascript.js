const images=["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg"]
let currentindex=0;

//buttons
const previousbutton=document.getElementById("prev");
const likebutton=document.getElementById("like")
const nextbutton=document.getElementById("next");
const image=document.getElementById("display-img");
const emoji=document.getElementById("emoji");

function displayimage(){
    image.src=images[currentindex];
}

nextbutton.addEventListener("click",()=>{
    currentindex=(currentindex+1)%images.length;
    displayimage();
    console.log(currentindex)
})

previousbutton.addEventListener("click",()=>{
    currentindex=(currentindex-1)%images.length;
    displayimage();
    console.log(currentindex)
})

likebutton.addEventListener("click",()=>{
    emoji.style.display="block";
    setTimeout(()=>{
        emoji.style.display="none";
    },2000);
});

displayimage();




