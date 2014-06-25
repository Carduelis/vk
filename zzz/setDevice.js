
$(document).ready(function(){
// Главная страница
/*
var viewportWidth = $('#container').width();
$('#container, #container > ul > li').css('width',viewportWidth);

*/




var target = document.getElementById("your-files");
target.addEventListener("dragover", function(event) {
    event.preventDefault(); // отменяем действие по умолчанию
}, false);
target.addEventListener("drop", function(event) {
    // отменяем действие по умолчанию
    event.preventDefault();
    var i = 0,
     files = event.dataTransfer.files,
     len = files.length;
     for (; i < len; i++) {
          console.log("Filename: " + files[i].name);
          console.log("Type: " + files[i].type);
          console.log("Size: " + files[i].size + " bytes");
     }
}, false);



});