let pos_point = 20

function ajustPointSize() {

    size.forEach((point) => {

        switch (point.id.toUpperCase()) {
            case "LT":
                point.style.left = new absolute(cut).left() - pos_point + px;
                point.style.top = new absolute(cut).top() - pos_point + px;
                break;
            case "RT":
                point.style.left = new absolute(cut).left() + new absolute(cut).width() - point.clientWidth + pos_point + px;
                point.style.top = new absolute(cut).top() - pos_point + px;
                break;
            case "RB":
                point.style.left = new absolute(cut).left() + new absolute(cut).width() - point.clientWidth + pos_point + px;
                point.style.top = new absolute(cut).top() + new absolute(cut).height() - point.clientHeight + pos_point + px;
                break;
            case "LB":
                point.style.left = new absolute(cut).left() - pos_point + px;
                point.style.top = new absolute(cut).top() + new absolute(cut).height() - point.clientHeight + pos_point + px;
                break;
            case "L":
                point.style.left = new absolute(cut).left() - pos_point + px;
                point.style.top = new absolute(cut).top() + pos_point + px;
                point.style.height = new absolute(cut).height() - pos_point * 2 + px
                break;
            case "T":
                point.style.left = new absolute(cut).left() + pos_point + px;
                point.style.top = new absolute(cut).top() - pos_point + px;
                point.style.width = new absolute(cut).width() - pos_point * 2 + px
                break;
            case "R":
                point.style.left = new absolute(cut).left() + new absolute(cut).width() - point.clientWidth + pos_point + px;
                point.style.top = new absolute(cut).top() + pos_point + px;
                point.style.height = new absolute(cut).height() - pos_point * 2 + px
                break;
            case "B":
                point.style.left = new absolute(cut).left() + pos_point + px;
                point.style.top = new absolute(cut).top() + new absolute(cut).height() - point.clientHeight + pos_point + px;
                point.style.width = new absolute(cut).width() - pos_point * 2 + px
                break;
            default:
                break;
        }
    });
}




window.onload = function() {

    size.forEach((point) => {
        point.addEventListener("touchstart", size_start, false);
        point.addEventListener("touchmove", size_move, false);
        point.addEventListener("touchend", size_end, false);
    });

    document.querySelectorAll("[scalingAndMove='true']").forEach((e) => {
        e.addEventListener("touchstart", START, false);
        e.addEventListener("touchmove", MOVE, false);
        e.addEventListener("touchend", END, false);
    })

    ajustHolderFotoCut(cut)
    clip(cut)

}


let start = { cut: {} }

function size_start() {

    event.preventDefault()
    event.stopPropagation()


    start.x = event.touches[0].clientX - this.getBoundingClientRect().left;
    start.y = event.touches[0].clientY - this.getBoundingClientRect().top;

    start.cut.x = event.touches[0].clientX;
    start.cut.y = event.touches[0].clientY;

    staticPosInvert(this.id.toUpperCase())

    start.cut.width = new absolute(cut).width();
    start.cut.height = new absolute(cut).height();



}

function size_move() {
    event.preventDefault()
    event.stopPropagation()

    this.style.left = event.touches[0].clientX - start.x + px
    this.style.top = event.touches[0].clientY - start.y + px




    sizeCut(this.id.toUpperCase(), event.touches[0].clientX - start.cut.x, event.touches[0].clientY - start.cut.y)

}



function size_end() {
    event.preventDefault()
    event.stopPropagation()


    let cut_width = new absolute(cut).width();
    let cut_height = new absolute(cut).height();

    let id = this.id.toUpperCase();



    if (id[0] == "L") {
        foto.style.right = new absolute(foto).right() + px;
        foto.style.left = "auto"
    } else if (id[0] == "R") {
        foto.style.left = new absolute(foto).left() + px;
        foto.style.right = "auto"
    }
    if (id[1] == "T") {
        foto.style.bottom = new absolute(foto).bottom() + px;
        foto.style.top = "auto"
    } else if (id[1] == "B") {
        foto.style.top = new absolute(foto).top() + px;
        foto.style.bottom = "auto"
    }



    foto.style.height = new absolute(foto).height() + px;
    foto.style.width = new absolute(foto).width() + px;

    foto.style.transition = "ease 0.5s"
    cut.style.transition = "ease 0.5s"
    opacity.style.transition = "ease 0.5s"
    holder_foto.style.transition = "ease 0.5s"



    let factorW = ((body.clientWidth - 20) / cut_width);
    let factorH = ((body.clientHeight - 110) / cut_height);

    let a = (new absolute(cut).width() * factorW) > (body.clientWidth - 20);
    let b = (new absolute(cut).height() * factorH) > (body.clientHeight - 155);

    let c = (new absolute(cut).width() * factorH) > (body.clientWidth - 20);
    let d = (new absolute(cut).height() * factorW) > (body.clientHeight - 155);

    let wc = new absolute(cut).width();
    let hc = new absolute(cut).height();
    let wf = new absolute(foto).width();
    let hf = new absolute(foto).height();

    if (!a && b && !c && d) {
        factor = ((body.clientHeight - 110) / cut_height);
        continue_();

    } else if (!a && b && c && !d) {

        factor = ((body.clientWidth - 20) / cut_width);
        continue_();
    } else {
        factor = ((body.clientWidth - 20) / cut_width);
        continue_();
    }

    function continue_() {
        foto.style.maxWidth = "500000000000000000px"
        foto.style.maxHeight = "500000000000000000px"

        wc *= (factor)
        hc *= (factor)
        wf *= (factor)
        hf *= (factor)

        cut.style.width = wc + px
        cut.style.height = hc + px;

        foto.style.width = wf + px;
        foto.style.height = hf + px;

        size_div.style.width = cut_width * factor + px
        size_div.style.height = cut_height * factor + px;
        ajustHolderFotoCut(size_div)
        clip(size_div)
    }




    let fright = new absolute(foto).right()
    fright *= factor;
    let fleft = new absolute(foto).left()
    fleft *= factor;
    let ftop = new absolute(foto).top()
    ftop *= factor;
    let fbottom = new absolute(foto).bottom()
    fbottom *= factor;





    if (id.length == 2 && id[0] == "L") {
        cut.style.right = new absolute(size_div).right() + px;
        foto.style.right = fright + px;

    } else if (id.length == 2 && id[0] == "R") {
        cut.style.left = new absolute(size_div).left() + px;
        foto.style.left = fleft + px;

    }

    if (id.length == 2 && id[1] == "T") {
        cut.style.bottom = new absolute(size_div).bottom() + px;
        foto.style.bottom = fbottom + px;

    } else if (id.length == 2 && id[1] == "B") {
        cut.style.top = new absolute(size_div).top() + px;
        foto.style.top = ftop + px;

    }

    if (id.length == 1 && id[0] == "L") {
        cut.style.right = new absolute(size_div).right() + px;
        foto.style.right = fright + px;

        cut.style.bottom = new absolute(size_div).bottom() + px;
        foto.style.bottom = fbottom + px;

        cut.style.top = new absolute(size_div).top() + px;
        foto.style.top = ftop + px;

    }

    if (id.length == 1 && id[0] == "R") {
        cut.style.left = new absolute(size_div).left() + px;
        foto.style.left = fleft + px;

        cut.style.bottom = new absolute(size_div).bottom() + px;
        foto.style.bottom = fbottom + px;

        cut.style.top = new absolute(size_div).top() + px;
        foto.style.top = ftop + px;

    }

    if (id.length == 1 && id[0] == "T") {
        cut.style.right = new absolute(size_div).right() + px;
        foto.style.right = fright + px;

        cut.style.left = new absolute(size_div).left() + px;
        foto.style.left = fleft + px;

        cut.style.bottom = new absolute(size_div).bottom() + px;
        foto.style.bottom = fbottom + px;

    }

    if (id.length == 1 && id[0] == "B") {
        cut.style.right = new absolute(size_div).right() + px;
        foto.style.right = fright + px;

        cut.style.left = new absolute(size_div).left() + px;
        foto.style.left = fleft + px;

        cut.style.top = new absolute(size_div).top() + px;
        foto.style.top = ftop + px;

    }
    setTimeout(() => {
        cut.style.transition = "ease 0s"
        foto.style.transition = "ease 0s"
        opacity.style.transition = "ease 0s"
        holder_foto.style.transition = "ease 0s"

        foto.style.left = new absolute(foto).left() + px;
        foto.style.top = new absolute(foto).top() + px;
        foto.style.right = new absolute(foto).right() + px;
        foto.style.bottom = new absolute(foto).bottom() + px;



        ajustHolderFotoCut(cut)
        clip(cut)
        ajustPointSize();
        svgMove()

    }, 500);


}





function staticPosInvert(e) {
    foto.style.width = new absolute(foto).width() + px;
    foto.style.height = new absolute(foto).height() + px;
    foto.style.left = new absolute(foto).left() + px;
    foto.style.top = new absolute(foto).top() + px;
    foto.style.right = new absolute(foto).right() + px;
    foto.style.bottom = new absolute(foto).bottom() + px;



    if (e.length == 2 && e[0] == "L") {
        cut.style.right = new absolute(cut).right() + px;
        cut.style.left = auto;
        foto.style.right = new absolute(foto).right() + px;
        foto.style.left = auto;

    } else if (e.length == 2 && e[0] == "R") {
        cut.style.left = new absolute(cut).left() + px;
        cut.style.right = auto;
        foto.style.left = new absolute(foto).left() + px;
        foto.style.right = auto;

    }

    if (e.length == 2 && e[1] == "T") {
        cut.style.bottom = new absolute(cut).bottom() + px;
        cut.style.top = auto;
        foto.style.bottom = new absolute(foto).bottom() + px;
        foto.style.top = auto;
    } else if (e.length == 2 && e[1] == "B") {
        cut.style.top = new absolute(cut).top() + px;
        cut.style.bottom = auto;
        foto.style.top = new absolute(foto).top() + px;
        foto.style.bottom = auto;
    }

    if (e.length == 1 && e[0] == "L") {
        cut.style.right = new absolute(cut).right() + px;
        cut.style.left = auto;
        foto.style.right = new absolute(foto).right() + px;
        foto.style.left = auto;

        cut.style.bottom = new absolute(cut).bottom() + px;
        foto.style.bottom = new absolute(foto).bottom() + px;
        cut.style.top = new absolute(cut).top() + px;
        foto.style.top = new absolute(foto).top() + px;
    }

    if (e.length == 1 && e[0] == "R") {
        cut.style.left = new absolute(cut).left() + px;
        cut.style.right = auto;
        foto.style.left = new absolute(foto).left() + px;
        foto.style.right = auto;

        cut.style.bottom = new absolute(cut).bottom() + px;
        foto.style.bottom = new absolute(foto).bottom() + px;
        cut.style.top = new absolute(cut).top() + px;
        foto.style.top = new absolute(foto).top() + px;
    }
    if (e.length == 1 && e[0] == "T") {
        cut.style.bottom = new absolute(cut).bottom() + px;
        cut.style.top = auto;
        foto.style.bottom = new absolute(foto).bottom() + px;
        foto.style.top = auto;

        cut.style.right = new absolute(cut).right() + px;
        foto.style.right = new absolute(foto).right() + px;
        cut.style.left = new absolute(cut).left() + px;
        foto.style.left = new absolute(foto).left() + px;
    }
    if (e.length == 1 && e[0] == "B") {
        cut.style.top = new absolute(cut).top() + px;
        cut.style.bottom = auto;
        foto.style.top = new absolute(foto).top() + px;
        foto.style.bottom = auto;

        cut.style.right = new absolute(cut).right() + px;
        foto.style.right = new absolute(foto).right() + px;
        cut.style.left = new absolute(cut).left() + px;
        foto.style.left = new absolute(foto).left() + px;
    }



    ajustHolderFotoCut(cut)
    clip(cut)
}



function sizeCut(e, x, y) {
    if (e[0] == "L") {
        cut.style.width = start.cut.width - x + px
    } else if (e[0] == "R") {
        cut.style.width = start.cut.width + x + px
    }

    if (e[1] == "T" || e[0] == "T") {
        cut.style.height = start.cut.height - y + px
    } else if (e[1] == "B" || e[0] == "B") {
        cut.style.height = start.cut.height + y + px
    }

    ajustHolderFotoCut(cut)
    clip(cut)
}






function clip(e) {


    let container_left = (e.getBoundingClientRect().left - opacity.getBoundingClientRect().left)
    let container_top = (e.getBoundingClientRect().top - opacity.getBoundingClientRect().top);
    let container_right = (opacity.getBoundingClientRect().right - e.getBoundingClientRect().right);
    let container_bottom = (opacity.getBoundingClientRect().bottom - e.getBoundingClientRect().bottom);
    let container_width = (e.getBoundingClientRect().width)
    let container_height = (e.getBoundingClientRect().height)

    opacity.style.clipPath = `polygon(0% 0%, 0 100%, ${container_left}px 100%, ${container_left}px ${container_top}px, ${container_left+container_width}px ${container_top}px, ${container_left+container_width}px ${container_top+container_height}px , ${container_left}px ${container_top+container_height}px, ${container_left}px 100%, 100% 100%, 100% 0)`

}