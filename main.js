//fo-obj-tar
class Lampak {
    constructor(elselem, dataId) {
        elselem.append("<div class='lampa'></div>");
        this.elem = elselem.children("div:last");
        this.allapot = false;
        this.szin();
        this.dataId = dataId;
        this.elem.attr("dataId", dataId);
        this.elem.on("click", () => {
            this.adenallapot();
            this.kattevent();
        });
    }
    adenallapot() {
        this.allapot = !this.allapot;
        this.szin();
    }
    szin() {
        if (this.allapot) {
            this.elem.css("background-color", "yellow");
        } else {
            this.elem.css("background-color", "red");
        }
    }
    kattevent() {
        let esemeny = new CustomEvent("ofn", {
            detail: this,
        });
        window.dispatchEvent(esemeny);
    }
}
//behiv
$(function () {
    new Muvelet(db);
    $(".uj").on("click", function () {
        new Muvelet(db);
    });
});

class jatekTer {
    constructor(elselem) {
        elselem.empty();
        for (let index = 0; index < objmeret * objmeret; index++) {
            const lampa = new Lampak(elselem, index);
            lampak.push(lampa);
        }
    }
}

//n+li
const db = 0;
const lampak = [];
const objmeret = 4;
let ido = new Date().getTime();
//megjelenit,szamol
class Muvelet {
    constructor(db) {
	this.db = db;
	$(".box").html(this.db);
	this.ujraindit();
		$(window).on("ofn", (event) => {
			let jelenlegid = event.detail.dataId;
			this.tobbibox(jelenlegid);
			$(".box").html(this.ellenorzes());
		});
    }
    tobbibox(jelenlegid) {
	if (jelenlegid > objmeret - 1) {
		lampak[jelenlegid - objmeret].adenallapot();
	}
	if (jelenlegid < objmeret * objmeret - objmeret) {
		lampak[jelenlegid + objmeret].adenallapot();
	}

	if (jelenlegid % objmeret !== 0) {
		lampak[jelenlegid - 1].adenallapot();
	}
	if (jelenlegid % objmeret !== objmeret - 1) {
		lampak[jelenlegid + 1].adenallapot();
	}
    }
    ellenorzes() {
	let db = 0;
	for (let index = 0; index < objmeret * objmeret; index++) {
		if (lampak[index].allapot) {
			let tolt = (new Date().getTime() - ido) / 1000;
			db++;
		}
	}
	return db;
    }
    ujraindit() {
        let db = 0;
        lampak.splice(0, lampak.length);
        new jatekTer($("article"));
        
        while (db < this.db) {
            let index = Math.floor(Math.random() * 9);

            if (!lampak[index].allapot) {
                lampak[index].adenallapot();
                db++;
            }
        }
    }
}
