import Kartya from "./kartya.js";

class JatekTer {
    #KartyaLista=[];
    #kivalasztottKartyaLista=[];
    #db;
    #allapotLista;
    #meret;
    #lepes;
    constructor(kartyaLista){
        this.#KartyaLista=kartyaLista;
        this.#init();
        {
            
        }
        const szuloElem = $("article");
        const allapot =false;
        for (let i = 0; i < 9; i++) {
            new Kartya(i,allapot,szuloElem);
        }
        }
        setAllapotLista(){
            this.#meret=Math.floor(Math.random());
            for (let i = 0; i < this.#meret; i++) {
            const random=Math.floor(Math.random() * 2) + 1;
            if (random===1) {
                this.#allapotLista[i]=false;
            } else {
                this.#allapotLista[i]=true;
            }
            }
    }
    getdb(){
        return this.#db;
    }
    getlepes(){
        return this.#lepes;
    }

    getmeret(){
        return this.#meret;
    }
    szomszedokKeresese(id){
        if (this.#allapotLista[id]!=this.#allapotLista[id-1]&&this.#allapotLista[id]!=this.#allapotLista[id+1]) {
            
        }
    }
    #init(){
        this.#kivalasztottKartyaLista=[];
        this.#kever();
        const szuloElem=$("article");
        szuloElem.empty();
        for (let index= 0;index<this.#KartyaLista.length; index++){
            const kartya= new Kartya(this.#KartyaLista[index], szuloElem);
        }
    }
    #kever(){
        this.#KartyaLista.sort(function(){
            return 0.5-Math.random();
        });
    }
    kattint(){
        tolt();
    }
    $(window).on("kattint",(event) => {

    });
    
}
export default JatekTer;