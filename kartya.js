class Kartya {
    #fajlnev;
    #divElem;
    #imgElem;
    #allapot;
    #blokkolt;
    constructor(fajlnev, szuloElem){
        this.#fajlnev=fajlnev;
        szuloElem.append('<div class="kartya"> <img src="" alt"kép"> </div>');
        this.#divElem=szuloElem.children("div:last-child");
        this.#imgElem = this.#divElem.children("img");
        this.#allapot=allapot;
        const txt=`<div>${allapot}</div>`;
        szuloElem.append(txt);
        this.divElem = $('article div:last-child');
        this.#divElem.on("click", () => {
            this.kattintas();
            this.#kattintasTrigger();
        });
        {
            this.#setLap();
        } 
        
    }
    setLap(){
        if (this.#allapot){
            this.#imgElem.attr("src",this.#fajlnev);
        }else{
            this.#imgElem.attr("src", "lampa1.jpg");
        }
    }
    setAllapot(){
        this.#allapot=!this.#allapot;
        this.szinBeallit();
    }
    szinBeallit(){
        if (this.#allapot===false) {
            $(`div`).css("background-color", "green");
        } else {
            $(`div`).css("background-color", "orange");
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