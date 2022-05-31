 let start_ = { x: 0, y: 0, cut: { x: 0, y: 0, w: 0, h: 0 } }


 function START() {

     event.preventDefault();
     event.stopPropagation();

     let ev = event.touches;
     let x = ev[0].clientX;
     let y = ev[0].clientY;

     if (ev.length == 1) {
         start_.x = x - new absolute(foto_move).left();
         start_.y = y - new absolute(foto_move).top();
     }
 }

 function MOVE() {
     event.preventDefault();
     event.stopPropagation();

     let ev = event.touches;
     let x = ev[0].clientX;
     let y = ev[0].clientY;

     if (ev.length == 1) {
         foto_move.style.left = x - start_.x + px
         foto_move.style.top = y - start_.y + px
     }
 }

 function END() {

 }