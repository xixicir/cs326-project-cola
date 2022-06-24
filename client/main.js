import {fmsprice, f2sprice, f3sprice, fsprice, cfsprice} from "/client/subpages/price.js";

document.getElementById("fms").addEventListener("click", () => {
    hide("fms-group");
});
document.getElementById("f2s").addEventListener("click", () => {
    hide("f2s-group");
});
document.getElementById("f3s").addEventListener("click", () => {
    hide("f3s-group");
});
document.getElementById("fs").addEventListener("click", () => {
    hide("fs-group");
});
document.getElementById("cfs").addEventListener("click", () => {
    hide("cfs-group");
});
document.getElementById("all").addEventListener("click", () => {
    document.getElementById("fms-group").style.display = 'block';
    document.getElementById("f2s-group").style.display = 'block';
    document.getElementById("f3s-group").style.display = 'block';
    document.getElementById("fs-group").style.display = 'block';
    document.getElementById("cfs-group").style.display = 'block';
});
function hide(s) {
    document.getElementById("fms-group").style.display = 'none';
    document.getElementById("f2s-group").style.display = 'none';
    document.getElementById("f3s-group").style.display = 'none';
    document.getElementById("fs-group").style.display = 'none';
    document.getElementById("cfs-group").style.display = 'none';
    document.getElementById(s).style.display = 'block';
}

document.getElementById("19i").addEventListener("click", () => {
    pricing(0);
});
document.getElementById("20i").addEventListener("click", () => {
    pricing(1);
});
document.getElementById("21i").addEventListener("click", () => {
    pricing(2);
});
document.getElementById("22i").addEventListener("click", () => {
    pricing(3);
});
document.getElementById("reset").addEventListener("click", () => {
    document.getElementById("fmsprice").innerHTML = "$2800 ea. - $3100 ea.";
    document.getElementById("f2sprice").innerHTML = "$3200 ea. - $3500 ea.";
    document.getElementById("f3sprice").innerHTML = "$3250 ea. - $3550 ea.";
    document.getElementById("fsprice").innerHTML = "$700 ea. - $850 ea.";
    document.getElementById("cfsprice").innerHTML = "$6300 ea. - $6900 ea.";
});
function pricing(n) {
    document.getElementById("fmsprice").innerHTML = "$" + fmsprice[n] + " ea.";
    document.getElementById("f2sprice").innerHTML = "$" + f2sprice[n] + " ea.";
    document.getElementById("f3sprice").innerHTML = "$" + f3sprice[n] + " ea.";
    document.getElementById("fsprice").innerHTML = "$" + fsprice[n] + " ea.";
    document.getElementById("cfsprice").innerHTML = "$" + cfsprice[n] + " ea.";
}
