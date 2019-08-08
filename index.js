window.addEventListener("load", ()=> {

    // Start the animation
    move()
})

window.addEventListener("click",()=>{
    document.getElementById("maintext").style.color = "#0FF" 
})

// Animation
function move(){
    var d = new Date();
    var pos = d.getTime()/1000;

    document.getElementById("maintext").innerText = "epoch " + Math.floor(pos)
    window.requestAnimationFrame(move)
}
