function ajustCut() {

    cut.style.width = (new absolute(cut).width()) + px;
    cut.style.height = new absolute(cut).height() + px;

    cut.style.left = restar(cut.clientWidth, body.clientWidth) / 2 + px;
    cut.style.top = restar(cut.clientHeight, body.clientHeight) / 2 + px;


    ajustHolderFotoCut(cut);

}


function ajustHolderFotoCut(e) {

    holder_foto.style.width = new absolute(e).width() + px;
    holder_foto.style.height = new absolute(e).height() + px;
    holder_foto.style.left = new absolute(e).left() + px;
    holder_foto.style.top = new absolute(e).top() + px;



}