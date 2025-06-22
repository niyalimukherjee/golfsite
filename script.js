var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(delt){
    crsr.style.left=delt.x+"px"
    crsr.style.top=delt.y+"px"
    blur.style.left=delt.x-200+"px"
    blur.style.top=delt.y-200+"px"
    
})

gsap.to("#nav",{
backgroundColor:"#000",
duration:0.5,
height:"110px",
scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    markers:true,
    start:"top -10%",
    end:"top -11%",
    scrub:1
}
})
gsap.to("#main",{
  backgroundColor:"#000",
  scrollTrigger:{
    trigger:"#main",
    scroller:"body",
    markers:true,
    start:"top -30%",
    end:"top -100%",
    scrub:2
  }
})
