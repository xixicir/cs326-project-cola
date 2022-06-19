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