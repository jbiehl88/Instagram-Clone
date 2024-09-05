let image = document.querySelectorAll(".mediaCard")
let logo = document.querySelectorAll("h1")

for(let i = 0; i < image.length; i++) {
    image[i].addEventListener("click", function (){
        document.location.href = "/feed.html"
    })
}

for(let i=0; i < logo.length; i++) {
    logo[i].addEventListener("click", function () {
        document.location.href = "/index.html"
    })
}