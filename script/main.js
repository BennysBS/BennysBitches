'use strict';

function init() {
    if(!sessionStorage.cockie){
        kakor();
    }
}

function kakor(){
    var template = document.querySelector("#template");
    var cockieHolder = document.querySelector("#cockieHolder");
    var cockie = template.content.querySelector(".cockie");
    cockieHolder.appendChild(cockie);

    var ok = cockie.querySelector("#ok");
    var jf = cockie.querySelector("#jf");


    ok.addEventListener("click", Kaka);
    jf.addEventListener("click", Kaka);

    function Kaka(){
        cockieHolder.removeChild(cockie);
        sessionStorage.cockie = true;

        document.cookie="username=bennys bitches; expires=Fre, 18 Dec 2015 12:00:00 UTC";
    }
}

window.onload = function() {
    init();


};
