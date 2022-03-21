function kick() {
    let giatrinhap = document.getElementById("c").value;
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    if (a == "Việt Nam" && b == "USD") {
        let raxeng = (giatrinhap * 24000);
        document.getElementById("ketqua").innerText = "Ra tien : " + raxeng;
    }
    if (a == "USD" && b == "Việt Nam") {
        let raxeng2 = (giatrinhap / 24000);
        document.getElementById("ketqua").innerText = "Ra tien : " + raxeng2;
    }
}
