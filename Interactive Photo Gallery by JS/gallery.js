function upDate(previewPic){
    var x = document.getElementById("image");
    x.style.backgroundImage = "url("+previewPic.src+")";
    x.innerHTML = previewPic.alt;
} 

function unDo(){
    var x = document.getElementById("image");
    x.style.backgroundImage = "url('')";
    x.innerHTML = "Hover over an image below to display here.";
}