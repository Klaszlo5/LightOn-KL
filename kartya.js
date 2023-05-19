class Kartya {
    #fajlnev;
    #divElem;
    #allapot;
    #blokkolt;
    constructor(fajlnev, szuloElem){
        this.#fajlnev=fajlnev;
        szuloElem.append('<div class="kartya"> </div>');
        this.#divElem=szuloElem.children("div:last-child");
        this.#allapot=allapot;
        const txt=`<div>${allapot}</div>`;
        szuloElem.append(txt);
        this.divElem = $('article div:last-child');
        this.#divElem.on("click", () => {
            this.kattintas();
            this.#kattintasTrigger();
        }); 
        $(window).on("gameBlocked", () =>{
            this.#blokkolt=true;
        })
        $(window).on("gameUnBlocked", () =>{
            this.#blokkolt=false;
        })
    }
    setAllapot(){
        this.#allapot=!this.#allapot;
        this.szinBeallit();
    }
    szinBeallit(){
        if (this.#allapot===false) {
            $(`div`).css("color", "green");
        } else {
            $(`div`).css("color", "orange");
        }
    }
    kattintas(){
        this.#allapot=!this.#allapot;
        this.#setLap();
    }
    #kattintasTrigger(){
        let esemeny = new CustomEvent("kartyaKattintas", {
            detail: this,
        })
        window.dispatchEvent(esemeny);
    }
    getfilenev(){
        return this.#fajlnev;
    }
    gedDivElem(){
        return this.#divElem;
    }
}

export default Kartya;