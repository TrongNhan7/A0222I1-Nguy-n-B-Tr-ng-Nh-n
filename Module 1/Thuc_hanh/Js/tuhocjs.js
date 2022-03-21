//tính tổng của tất cả các số tự nhiên từ 1 đến 100
//1+2+3...+100=?
/* var i;
var tong= 0;
for (i=1; i<=100; i++) {
    tong +=i;
}
alert(tong);

 */

/* var i=1;
var tong=0;
while (i<=100){
    tong += i;
    i++
}
alert(tong);
 */

/* var i=1;
var tong=1;
do {
    i++
    tong +=i;
} while (i<100);
alert(tong);
 */

/* let i=1;
for (i=1; i<=100; i++) {
    if(i==50) {
        break;
    }
}
alert(i);
 */
/*
let i=1;
while (i<=100) {
    i++;
    if (i==50) {
        break;
    }
}
alert(i);
 */

let i=1, k=1;
while (i<=100) {
    i++;
    if (i==50) {
        continue;
    }
    k++
}
alert(k)
// Nếu ko dùng continue thì k sẽ bằng 101 ko phải bằng 100