function saveCanvasData(canvasId, frame) {
  var frame  = frame || window,
      canvas = frame.document.getElementById(canvasId);
  return canvas ? canvas.toDataURL() : undefined;
}

function addSaveCanvasLink(canvasId, frame) {
  var imageLink,
      imageData;

  imageLink = $('.saveCanvasLink');
  if (imageLink.length < 1) {
    imageLink = $('<a>');
    imageLink.addClass('saveCanvasLink');
    imageLink.text('Link to Image');
    imageLink.attr('target', '_blank');
    $('#save-load').prepend(imageLink);
  }

  imageData = saveCanvasData(canvasId, frame);

  if (imageData) {
    imageLink.show();
    imageLink.attr('href', imageData);
  } else {
    imageLink.hide();
  }
  
}

if (target) {
  // timeout is essentially hack to make sure that canvas has really rendered
  // we only know on canvasRendered that render has been called and our script written out :(

  target.addListener('canvasRendered', function(e){ 
    var addSaveMyCanvasLink = addSaveCanvasLink.bind(null, e.canvasId, e.frame);
    setTimeout(addSaveMyCanvasLink, 100);
  });
}