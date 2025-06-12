let body = document.querySelector("body");
let leftnav=document.querySelector("#leftnav");
let rightnav=document.querySelector("#rightnav");


let x = null;
let i = 0;
let pics = ["pic3.jpg","pic4.webp","pic5.jpg"];

x = setInterval(() => {
    if (i === pics.length) {
        i = 0;
    }

    body.style.backgroundImage = `url(${pics[i]})`;
    body.style.backgroundSize = "cover"; // Optional: makes it look better
    body.style.backgroundPosition = "center"; // Optional: centers the image

    i++;
}, 5000);

leftnav.addEventListener("click",()=>{
    i--;
    if(i===-1)
    {
        i=pics.length-1;
    }
    
    body.style.backgroundImage = `url(${pics[i]})`;

})

rightnav.addEventListener("click",()=>{
    i++;
    if (i == pics.length) {
        i = 0;
    }

    body.style.backgroundImage = `url(${pics[i]})`;
})

