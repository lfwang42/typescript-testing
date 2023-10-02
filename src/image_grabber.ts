// // window.onload=function() {
//     console.log(Array.from(document.getElementsByTagName("img")).map(i => i.src));
// }
// document.addEventListener("DOMContentLoaded", function(e) {

document.addEventListener("DOMContentLoaded", function(e) {
    console.log("page load!");
    var imgs = document.getElementsByTagName("img");
    console.log(imgs);
    var arr = [...imgs];
    console.log(arr);


})
window.onload=function(){
    
}

    
// })

// .map((img) => {
//     console.log(img.src);
//     return img.src;
// })