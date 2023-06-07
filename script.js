let pirate=document.getElementById("pirate")
let map=document.getElementById("map")
map.onclick=(event)=>{
    pirate.style.left=event.offsetX-22.5+"px"
    pirate.style.top=event.offsetY-23.5+"px"
    console.log(event.offsetX,event.offsetY);
}