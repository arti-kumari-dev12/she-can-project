let form =
document.getElementById("contactForm");

let success =
document.getElementById("success");


form.addEventListener(

"submit",

function(e){

e.preventDefault();


success.innerHTML=

"✅ Form Submitted Successfully";


form.reset();

}

);



let darkBtn =

document.getElementById("darkBtn");


darkBtn.onclick=function(){

document.body.classList.toggle(

"dark"

);

}