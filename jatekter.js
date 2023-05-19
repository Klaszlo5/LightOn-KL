import Kartya from "./kartya.js";

class JatekTer {
    #KartyaLista = [];
    #kivalasztottKartyaLista = [];
    #db;
    #allapotLista;
    #meret;
    #lepes;
    constructor(kartyaLista) {
        this.#KartyaLista = kartyaLista;
        this.#init();
        {

        }
        const szuloElem = $("article");
        const allapot = false;
        for (let i = 0; i < 9; i++) {
            new Kartya(i, allapot, szuloElem);
        }
        $(window).on("kartyaKattintas", (event) => {
            this.#kivalasztottKartyaLista.push(event.detail);
            console.log(this.#kivalasztottKartyaLista);
        })
    }
    setAllapotLista() {
        this.#meret = Math.floor(Math.random());
        for (let i = 0; i < this.#meret; i++) {
            const random = Math.floor(Math.random() * 2) + 1;
            if (random === 1) {
                this.#allapotLista[i] = false;
            } else {
                this.#allapotLista[i] = true;
            }
        }
    }
    getdb() {
        return this.#db;
    }
    getlepes() {
        return this.#lepes;
    }
    getmeret() {
        return this.#meret;
    }
    szomszedokKeresese(id) {
        if (this.#allapotLista[id] != this.#allapotLista[id - 1] && this.#allapotLista[id] != this.#allapotLista[id + 1]) {

        }
    }
    #init() {
        this.#kivalasztottKartyaLista = [];
        this.#kever();
        const szuloElem = $("article");
        szuloElem.empty();
        for (let index = 0; index < this.#KartyaLista.length; index++) {
            const kartya = new Kartya(this.#KartyaLista[index], szuloElem);
        }
    }
    #TriggerBlocked(){
        window.dispatchEvent(new Event("gameBlocked"));
        console.log("blockolt")
    }
    #TriggerUnBlocked(){
        window.dispatchEvent(new Event("gameUnBlocked"));
        console.log("unblockolt")
    }
    kattintas() {
        this.#allapot = !this.#allapot;
        this.#setLap();
    }
    eltuntet(){
        this.#divElem.color("yellow")
    }
}
export default JatekTer;