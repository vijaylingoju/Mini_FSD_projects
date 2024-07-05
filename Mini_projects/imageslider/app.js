// removetitle = () =>{
//     var text = document.getElementById("welcome")
//     var world = document.getElementById("world")
//     var btnmain = document.getElementById("btnmain")
//     var container = document.getElementById("container")

//     text.style.display = 'none'
//     world.style.fontSize="60px"
//     btnmain.innerText = "Let's Start"
//     // container.style.backgroundImage = 'url("https://i.ibb.co/HzxMN42/dunkrick.jpg")';
//     console.log(text)
// }
    var text = document.getElementById("welcome")
    var world = document.getElementById("world")
    var btnmain = document.getElementById("btnmain")
    var container = document.getElementById("container")
    btnmain.addEventListener("click", () => {

    text.style.display = 'none'
    world.style.fontSize="60px"
    btnmain.innerText = "Let's Start"
    // container.style.backgroundImage = 'url("https://i.ibb.co/HzxMN42/dunkrick.jpg")';
    console.log(text)
    container.style.backgroundImage = 'url("1.jpg")';

        var k=1;
        var i=1;
        setInterval(next, 3000);
        function next(){
            if(i<6){
            var im=++i;
            container.style.backgroundImage = "url(i+'.jpg')"
            
            } 
            else{
                i-=6;
                next();
            }
        }
});