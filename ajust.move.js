 let start_ = { x: 0, y: 0, container: { x: 0, y: 0, w: 0, h: 0 } }


 function START() {

     event.preventDefault();
     event.stopPropagation();

     let ev = event.touches;
     let x = ev[0].clientX;
     let y = ev[0].clientY;

     if (ev.length == 1) {


         start_.x = x - fotoX
         start_.y = y - fotoY



     }


     opacity.style.opacity = 0.5
 }

 function MOVE() {
     event.preventDefault();
     event.stopPropagation();

     let ev = event.touches;
     let x = ev[0].clientX;
     let y = ev[0].clientY;

     if (ev.length == 1) {

         fotoX = (x - start_.x);
         fotoY = (y - start_.y);

         svgMove()

     }
 }

 function END() {
     opacity.style.opacity = 0.7;
 }