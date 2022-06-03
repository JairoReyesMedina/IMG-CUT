class rule45deg extends HTMLElement {
    constructor() {
        super();

    }

    connectedCallback() {

        let es = this
        this.style = `
        width:300%;height:100%;display:block;
        background:none;text-align:center;
        position:relative;
       `;
        this.parentElement.style.overflowX = "scroll";

        let color = "#fff"


        for (let i = 1; i < 10; i++) {
            let s90 = document.createElement("span");
            s90.style = `left:calc(${i*10}% - 1.25px);top:5%;position:absolute;width:2.5px;height:90%;display:block;background:${color};border-radius:1em;`
            this.appendChild(s90);
        }
        for (let i = 1; i < 20; i++) {
            if (i % 2 == 1) {
                let s90 = document.createElement("span");
                s90.style = `left:calc(${i*5}% - 1.25px);top:10%;position:absolute;width:2.5px;height:80%;display:block;background:${color};border-radius:1em;`
                this.appendChild(s90);
            }
        }
        for (let i = 1; i < 40; i++) {
            if (i % 2 == 1) {
                let s90 = document.createElement("span");
                s90.style = `left:calc(${i*2.5}% - 1.25px);top:15%;position:absolute;width:2.5px;height:70%;display:block;background:${color};border-radius:1em;`
                this.appendChild(s90);
            }
        }
        for (let i = 1; i < 80; i++) {
            if (i % 2 == 1) {
                let s90 = document.createElement("span");
                s90.style = `left:calc(${i*1.25}% - 1.25px);top:25%;position:absolute;width:2.5px;height:50%;display:block;background:${color};border-radius:1em;`
                this.appendChild(s90);
            }
        }



        let indicator = document.createElement("span");
        indicator.textContent = "0"
        indicator.style = `
        color:#fff;position:absolute;bottom:65px;
        z-index:7;width:100%;text-align:center;
        `
        document.body.appendChild(indicator);

        setTimeout(() => {
            es.parentElement.scrollLeft = es.parentElement.scrollWidth / 3
        }, 100);


        this.parentElement.onscroll = function() {
            let deg = -((135) - ((this.scrollLeft) / this.scrollWidth * (135)) - 90);
            if (deg == 0.9) {
                deg = 0;
            }
            indicator.textContent = deg.toFixed(1);
            foto.style.transform = `rotateZ(${deg}deg)`;
        }



    }

}

window.customElements.define('rule-45deg', rule45deg);