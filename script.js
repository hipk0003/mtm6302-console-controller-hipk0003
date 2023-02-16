function setTitle (){
    const title = document.getElementById ("title").innerHTML = "New title";
}
setTitle ()

function setDescription(){
    const description = document.getElementById("description").innerHTML = "This is the new description for the console"
}
setDescription ()

function setBackgroundColor(){
    const background = document.body.style.backgroundColor = ("darkgreen")
 } 
 setBackgroundColor ()
//  when i comment out the function above, my "setTheme" function works.

 function setFontColor (){
    const font = document.getElementById ("main").style.color = "white";
}
setFontColor ()

function setTheme (){
    let element = document.body;
    element.classList.toggle('dark')
}





