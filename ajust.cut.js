function ajustCut() {

    cut.style.width = (new absolute(cut).width()) + px;
    cut.style.height = new absolute(cut).height() + px;

    cut.style.left = restar(cut.clientWidth, body.clientWidth) / 2 + px;
    cut.style.top = restar(cut.clientHeight, body.clientHeight) / 2 + px;

    foto.style.width = cut.clientWidth + px;
    foto.style.height = cut.clientHeight + px;

    foto.style.minWidth = cut.clientWidth + px;
    foto.style.minHeight = cut.clientHeight + px;

    foto.style.position = "absolute";

    foto_move.style.width = cut.clientWidth + px;
    foto_move.style.height = cut.clientHeight + px;

    foto_move.style.minWidth = cut.clientWidth + px;
    foto_move.style.minHeight = cut.clientHeight + px;
    foto_move.style.position = "absolute";


    foto_rotate.position = "absolute";

    foto_rotate.style.width = cut.clientWidth + px;
    foto_rotate.style.height = cut.clientHeight + px;

    foto_rotate.style.minWidth = cut.clientWidth + px;
    foto_rotate.style.minHeight = cut.clientHeight + px;
    foto_rotate.style.position = "absolute";


    ajustHolderFotoCut(cut);

}


function ajustHolderFotoCut(e) {

    holder_foto.style.width = new absolute(e).width() + px;
    holder_foto.style.height = new absolute(e).height() + px;
    holder_foto.style.left = new absolute(e).left() + px;
    holder_foto.style.top = new absolute(e).top() + px;



}