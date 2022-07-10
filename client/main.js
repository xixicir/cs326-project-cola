import * as crud from './crud.js';

document.getElementById("fms").addEventListener("click", () => {
    show("fms-group");
});
document.getElementById("f2s").addEventListener("click", () => {
    show("f2s-group");
});
document.getElementById("f3s").addEventListener("click", () => {
    show("f3s-group");
});
document.getElementById("fs").addEventListener("click", () => {
    show("fs-group");
});
document.getElementById("cfs").addEventListener("click", () => {
    show("cfs-group");
});
document.getElementById("all").addEventListener("click", () => {
    document.getElementById("fms-group").style.display = 'block';
    document.getElementById("f2s-group").style.display = 'block';
    document.getElementById("f3s-group").style.display = 'block';
    document.getElementById("fs-group").style.display = 'block';
    document.getElementById("cfs-group").style.display = 'block';
});
function show(s) {
    document.getElementById("fms-group").style.display = 'none';
    document.getElementById("f2s-group").style.display = 'none';
    document.getElementById("f3s-group").style.display = 'none';
    document.getElementById("fs-group").style.display = 'none';
    document.getElementById("cfs-group").style.display = 'none';
    document.getElementById(s).style.display = 'block';
}

document.getElementById("19i").addEventListener("click", async() => {
    document.getElementById("fmsprice").innerHTML = "$" + await crud.readPrice(fms19) + " ea.";
    document.getElementById("f2sprice").innerHTML = "$" + await crud.readPrice(f2s19) + " ea.";
    document.getElementById("f3sprice").innerHTML = "$" + await crud.readPrice(f3s19) + " ea.";
    document.getElementById("fsprice").innerHTML = "$" + await crud.readPrice(fs19) + " ea.";
    document.getElementById("cfsprice").innerHTML = "$" + await crud.readPrice(cfs19) + " ea.";
});
document.getElementById("20i").addEventListener("click", async() => {
    document.getElementById("fmsprice").innerHTML = "$" + await crud.readPrice(fms20) + " ea.";
    document.getElementById("f2sprice").innerHTML = "$" + await crud.readPrice(f2s20) + " ea.";
    document.getElementById("f3sprice").innerHTML = "$" + await crud.readPrice(f3s20) + " ea.";
    document.getElementById("fsprice").innerHTML = "$" + await crud.readPrice(fs20) + " ea.";
    document.getElementById("cfsprice").innerHTML = "$" + await crud.readPrice(cfs20) + " ea.";
});
document.getElementById("21i").addEventListener("click", async() => {
    document.getElementById("fmsprice").innerHTML = "$" + await crud.readPrice(fms21) + " ea.";
    document.getElementById("f2sprice").innerHTML = "$" + await crud.readPrice(f2s21) + " ea.";
    document.getElementById("f3sprice").innerHTML = "$" + await crud.readPrice(f3s21) + " ea.";
    document.getElementById("fsprice").innerHTML = "$" + await crud.readPrice(fs21) + " ea.";
    document.getElementById("cfsprice").innerHTML = "$" + await crud.readPrice(cfs21) + " ea.";
});
document.getElementById("22i").addEventListener("click", async() => {
    document.getElementById("fmsprice").innerHTML = "$" + await crud.readPrice(fms22) + " ea.";
    document.getElementById("f2sprice").innerHTML = "$" + await crud.readPrice(f2s22) + " ea.";
    document.getElementById("f3sprice").innerHTML = "$" + await crud.readPrice(f3s22) + " ea.";
    document.getElementById("fsprice").innerHTML = "$" + await crud.readPrice(fs22) + " ea.";
    document.getElementById("cfsprice").innerHTML = "$" + await crud.readPrice(cfs22) + " ea.";
});
document.getElementById("reset").addEventListener("click", () => {
    document.getElementById("fmsprice").innerHTML = "$2800 ea. - $3100 ea.";
    document.getElementById("f2sprice").innerHTML = "$3200 ea. - $3500 ea.";
    document.getElementById("f3sprice").innerHTML = "$3250 ea. - $3550 ea.";
    document.getElementById("fsprice").innerHTML = "$700 ea. - $850 ea.";
    document.getElementById("cfsprice").innerHTML = "$6300 ea. - $6900 ea.";
});

document.getElementById("s").addEventListener("click", async() => {
    const fname = document.getElementById('firstname').value;
    console.log(first);
    const lname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const vmake = document.getElementById('vehiclemake').value;
    const vmodel = document.getElementById('vehiclemodel').value;
    const vyear = document.getElementById('vehicleyear').value;
    const wheel = document.getElementById('wheel').value;
    const comments = document.getElementById('comments').value;
    if (fname === null) {
        alert("first name required");
    }
    if (lname === null) {
        alert("last name required");
    }
    if (email === null) {
        alert("email address required");
    }
    if (!email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        alert("email address is not vaild");
    }
    if (phone === null) {
        alert("phone number required");
    }
    if (!email.toLowerCase().match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
        alert("phone number is not vaild");
    }
    const info = await crud.uploadInfo(fname, lname, email, phone, vmake, vmodel, vyear, wheel, comments);
    output.innerHTML = JSON.stringify(info);
});

/*
function pricing(n) {
    document.getElementById("fmsprice").innerHTML = "$" + fmsprice[n] + " ea.";
    document.getElementById("f2sprice").innerHTML = "$" + f2sprice[n] + " ea.";
    document.getElementById("f3sprice").innerHTML = "$" + f3sprice[n] + " ea.";
    document.getElementById("fsprice").innerHTML = "$" + fsprice[n] + " ea.";
    document.getElementById("cfsprice").innerHTML = "$" + cfsprice[n] + " ea.";
}
*/