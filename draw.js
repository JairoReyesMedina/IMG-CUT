 function draw() {

     let canvas = document.createElement("canvas");
     let ctx = canvas.getContext('2d');

     let my = mayor(img.naturalWidth, img.naturalHeight)
     if (my > 1500) {

         canvas.width = (1500 / img.naturalHeight * 1500);
         canvas.height = (1500 / img.naturalWidth * 1500);

         ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

         initSvg(canvas.toDataURL("image/jpeg"));

     } else {
         canvas.width = img.naturalWidth;
         canvas.height = img.naturalHeight;
         ctx.drawImage(img, 0, 0);
         initSvg(canvas.toDataURL("image/jpeg"));
     }


 }