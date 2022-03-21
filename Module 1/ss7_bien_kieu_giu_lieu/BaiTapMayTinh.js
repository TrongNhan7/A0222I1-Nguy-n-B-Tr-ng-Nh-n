function summation() {
    let vedau = parseInt(document.getElementById("input01").value);
    let vesau = parseInt(document.getElementById("input02").value);
    let a = vedau + vesau;
    document.getElementById("ketqua1").innerText = "Result: " + a;
}

function subtration() {
    let vedau = document.getElementById("input01").value;
    let vesau = document.getElementById("input02").value;
    let b = vedau - vesau;
    document.getElementById("ketqua1").innerText = "Result: " + b;
}

function multiplication() {
    let vedau = document.getElementById("input01").value;
    let vesau = document.getElementById("input02").value;
    let c = vedau * vesau;
    document.getElementById("ketqua1").innerText = "Result  : " + c;
}

function division() {
    let vedau = document.getElementById("input01").value;
    let vesau = document.getElementById("input02").value;
    let d = vedau / vesau;
    document.getElementById("ketqua1").innerText = "Result  : " + d;
}




