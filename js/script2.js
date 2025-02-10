let h1=document.querySelector("#h1");
let h2=document.querySelector("#h2");
let btn=document.querySelector("#button");
let msg=document.querySelector(".message");
function message() {
    console.log("Button clicked!"); // Debugging
    h1.style.display = "none";
    h2.style.display = "none";
    btn.style.display = "none";
    msg.style.display = "flex";
    msg.style.justifyContent = "space-between"; // ✅ Corrected CSS value
}
