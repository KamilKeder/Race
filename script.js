div_auto = document.querySelector("#div_auto");
button_lewo = document.querySelector("#button_lewo");
button_prawo = document.querySelector("#button_prawo");
button_start = document.querySelector("#button_start");
div_ekran = document.querySelector("#div_ekran");
span_wynik = document.querySelector("#span_wynik");
var div_auto_left = 170;
var itnerval1;
var interval2;
var interval3;
button_lewo.addEventListener("click",skret_w_lewo);
button_prawo.addEventListener("click",skret_w_prawo);
button_start.addEventListener("click",start);
var div_przeciwnik_left;
var div_przeciwnik_bottom;
function skret_w_lewo(){
	if(div_auto_left != 10){
	div_auto_left = div_auto_left - 20;
	div_auto.style.left = div_auto_left+"px";
	}
}
function skret_w_prawo(){
	if(div_auto_left != 330){
	div_auto_left = div_auto_left + 20;
	div_auto.style.left = div_auto_left+"px";
	}
}
document.onkeydown = sprawdz;
function sprawdz(e) {
    e = e || window.event;
    if (e.keyCode == '37') {
    	skret_w_lewo();
    }
    else if (e.keyCode == '39') {
    	skret_w_prawo();
    }
}

function start(){
	button_start.disabled = true;
	span_wynik.innerHTML = 0;
	interval1 = setInterval(dodajauto,1000);
	interval2 = setInterval(function(){
		var span_wynik_zmienna = Number(span_wynik.innerHTML) + 1;
		span_wynik.innerHTML = span_wynik_zmienna;
	},100
		)
	interval3 = setInterval(function(){
		sprawdzenie();
				ruch();
	},5);
	

}
function dodajauto(){
	const auto = document.createElement("div");
	auto.classList.add("auto");
	div_przeciwnik_left = Math.floor(Math.random() * 340);
	auto.style.left = div_przeciwnik_left + "px";
	auto.style.bottom = 440 + "px";
	div_ekran.appendChild(auto);

}
function sprawdzenie(){
    var auta = document.querySelectorAll(".auto");

    for (var i = 0; i < auta.length; i++) {
    	var zmienna = auta[i].style.left
    if(auta[i].style.bottom == 0){
    	auta[i].remove;
    }

}
}
function ruch(){
	    var auta = document.querySelectorAll(".auto");
	for (var i = 0; i < auta.length; i++) {
    	var zmienna = auta[i].style.left
		var zmienna1 = auta[i].style.bottom;
		var zmienna2 = div_auto_left
		zmienna1 = Number(zmienna1.slice(0,-2))-1
		auta[i].style.bottom =  zmienna1+ "px";
    	if(zmienna1 < 0){
    		auta[i].remove();
    }

    	zmienna = Number(zmienna.slice(0,-2))
    	if(zmienna1 < 55){
    		var obliczenie1 = zmienna - zmienna2;

    		if(obliczenie1 > 0 && obliczenie1 < 23 || obliczenie1 < 0 && obliczenie1 > -28 ){

    		stop()
    		var wynik = Number(span_wynik.innerHTML)
    		alert("Koniec gry, twój wynik to: " +wynik)
    	}
    	}
    }
}
function stop(){
	var auta = document.querySelectorAll(".auto");
	for (var i = 0; i < auta.length; i++) {
		auta[i].remove();
	}
	clearInterval(interval1);
	clearInterval(interval2);
	clearInterval(interval3);
	button_start.disabled = false;

		

}