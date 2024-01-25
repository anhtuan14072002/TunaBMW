var tt = 0;
var tg = 0;
var sx = [];
for(var i = 1; i <= 6;i++ ){
    
    var rd = Math.random()*100;
    rd = parseInt(rd);
    sx.push(rd);
    console.log(rd);
}
for(var i = 1; i <= 6;i++){
    var mv = prompt(`nhập vào bộ số thứ ${i}:`);
    mv = parseInt(mv);
        if(sx.includes(mv)){
            tt+=1;
        }
}
switch (tt){
    case 0: alert(` bạn không trúng giải `);
    break;
    case 1: alert(' bạn không trúng giải ');
    break;
    case 2: alert(` bạn không trúng giải `);
    break;
    case 3: alert(` bạn trúng 10.000VNĐ `);
    break;
    case 4: alert(` bạn trúng 100.000VNĐ `)
    break;
    case 5: alert(` bạn trúng 10.000.000VNĐ `);
    break;
    case 6: alert(` bạn trúng jackpot 100 tỷ `);    
}