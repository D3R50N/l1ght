const light = document.querySelector(".light");
window.addEventListener("mousemove", e => {
    let r = light.style.width;
    light.style.top = (e.clientY-r/2) + "px";
    light.style.left = (e.clientX-r/2) + "px"; 
})

const rand = (max, min=0)=> parseInt(Math.random()*(max-min)+min)

const btns = document.querySelectorAll(".container>button");
var lights_on = 0;
var checker = []
btns.forEach((btn) => {
    btn.style.top = rand(window.innerHeight*.8, document.querySelector(".navbar").clientHeight)+"px";
    btn.style.left = rand(window.innerWidth*.8)+"px";
    btn.addEventListener('click', (e) => {
        if(checker.includes(btn)){
            alert("Don't cheat !");
            alert('You need to find ' + (btns.length-lights_on) + ' lights')

            return;
        }
        checker.push(btn);

        btn.classList.add("disabled"); 
        lights_on++;

        document.documentElement.style.setProperty('--light-s', (30*(lights_on+1)) + "px");
        if (lights_on >= btns.length) {

            document.querySelector(".mask").classList.add("d-none");
            document.querySelectorAll(".container button").forEach((b) => {
                b.classList.add("d-none");
            })
           for (let index = 0; index <  document.getElementsByTagName("*").length; index++) {
            const el=  document.getElementsByTagName("*")[index];
               el.style.cursor = "";

           }
                
           
            document.querySelector("#end").classList.remove("d-none")
        }
    })
})

const search = document.getElementById("search");

search.onclick = ()=>{
    alert('You need to find '+(btns.length-lights_on)+' lights')
}