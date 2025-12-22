setTimeout(function(){
    var preload = document.querySelector(".preload");
    preload.classList.add("hide");
    setTimeout(function(){
        preload.parentElement.removeChild(preload);
    }, 1000);
}, 300)