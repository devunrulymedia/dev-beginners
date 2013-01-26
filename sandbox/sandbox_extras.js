function saveImg() {
   var canvas = window.frames[0].document.getElementById('mycanvas');
   var imgData = canvas.toDataURL();
   return imgData;
}

function addSaveCanvasLink() {
  var imageLink = $('.saveCanvasLink');
  if (imageLink.length < 1) {
    imageLink = $('<a>');
    imageLink.addClass('saveCanvasLink');
    imageLink.text('Link to Image');
    imageLink.attr('target', '_blank');
    $('#output').append(imageLink);
  }

  imageLink.attr('href', saveImg());
}

if (target) {
  target.addListener('canvasRendered', function(){ setTimeout(addSaveCanvasLink, 100);});
}