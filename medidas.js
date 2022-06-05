let px = ("px")
let auto = ("auto")
class relative {
    constructor(args) {
        this.e = args;
    }

    width() {
        return parseFloat(window.getComputedStyle(this.e).width);
    }
    height() {
        return parseFloat(window.getComputedStyle(this.e).height);
    }
    top() {
        return parseFloat(window.getComputedStyle(this.e).top);
    }
    left() {
        return parseFloat(window.getComputedStyle(this.e).left);
    }
    right() {
        return parseFloat(window.getComputedStyle(this.e).right);
    }
    bottom() {
        return parseFloat(window.getComputedStyle(this.e).bottom);
    }

}

class absolute {
    constructor(args) {
        this.e = args;
    }

    width() {
        return this.e.getBoundingClientRect().width;
    }
    height() {
        return this.e.getBoundingClientRect().height;
    }
    top() {
        return (this.e.getBoundingClientRect().top - this.e.parentElement.getBoundingClientRect().top);
    }
    left() {
        return (this.e.getBoundingClientRect().left - this.e.parentElement.getBoundingClientRect().left);
    }
    right() {
        return (this.e.parentElement.getBoundingClientRect().right - this.e.getBoundingClientRect().right);
    }
    bottom() {
        return (this.e.parentElement.getBoundingClientRect().bottom - this.e.getBoundingClientRect().bottom);
    }

}


function division(a, b) {
    return a > b ? a / b : b / a;
}

function restar(a, b) {
    return a > b ? a - b : b - a;
}

function mayor(a, b) {
    return a > b ? a : b;
}

function menor(a, b) {
    return a < b ? a : b;
}