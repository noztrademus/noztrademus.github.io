var preloadLeft = document.querySelector(".preload--left");
var preloadRight = document.querySelector(".preload--right");

setTimeout(function(){
    document.querySelector(".wrapper").classList.remove("hide");
    preloadLeft.classList.add("hide");
    preloadRight.classList.add("hide");

    setTimeout(function(){
        preloadLeft.parentElement.removeChild(preloadLeft);
        preloadRight.parentElement.removeChild(preloadRight);
    }, 2000);
}, 1000);