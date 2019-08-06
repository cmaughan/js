// Adding an event listener lets us react to things happening in the browser
// Here we listen for the "load" event, that tells us the page is ready for
// us to run our scripts
window.addEventListener("load", ()=> {

    // Start the animation
    move()
})

// Same as above, except we're listening for "click" events
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
