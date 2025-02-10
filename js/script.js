let msg = document.querySelector("#msg");
let video = document.querySelector("#vid");
let img = document.createElement("img");
let div=document.querySelector("#div");
let btn=document.querySelector("#button")
img.src = "./utilities/teddy.jpg"; // Replace with your image URL
img.alt = "A new image";

setTimeout(() => {
  msg.innerHTML =
    "Your Smile brings a lot of happiness and satisfaction in my life Just Like A teddy whose smile is always magical and it brings peace, comfort, and happiness.";
}, 10000);

setTimeout(() => {
  video.style.display = "none";
  div.insertBefore(img, div.firstChild);
  msg.innerHTML="Happy Teddy Day, Miss Night Owl! May this day bring you as much warmth and comfort as a teddy bear’s hug. Sleep late, dream sweet, and stay as adorable as ever!";
  btn.style.display="block";    
}, 20000);
