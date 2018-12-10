class Cronometro extends HTMLElement {
    
    constructor() {
        super();
        this._hours = "00";
        this._min = "00";
        this._sec = "00";
        this._time = 0;

        setInterval(() => {
            this.refreshTime();
        } , 1000);
    }

    refreshTime(){
        console.log(this._time);
        this._sec = this.format(this._time % 60);
        this._min = this.format(parseInt((this._time / 60) % 60));
        this._hours = this.format(parseInt((this._time / 3600) % 24));
        this.time = this._time + 1;
    }


    set time(time){
        this._time = time;
        this.render();
    }

    format(number) {
        return (number < 10 ? '0' : '') + number;
   }


   addEventListeners() {
    let that = this;
    document.querySelector("#reset").addEventListener("click", function(){
        console.log('oi');
        that._time = 0;
    });
    console.log('hue');
   }

    connectedCallback(){
        this.render();
        this.addEventListeners();
    }

    render() {
        this.innerHTML = `
            <div class="cron">
                <div id="hours">${this._hours}h</div>
                <div id="min">${this._min}m</div>
                <div id="sec">${this._sec}s</div>
            </div>
            <div class="buttons">
                <button id="start">Start</button>
                <button id="reset">Reset</button>
                <button id="stop">Stop</button>
            </div>
            `
    }
}

customElements.define('ccc-cron', Cronometro);