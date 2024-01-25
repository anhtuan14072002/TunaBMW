// // // đây là ngôn ngữ logic
// // var x;// x không có kiểu dữ liệu = null
// // x = 10; // x: number
// // var y = "Hello world!"; // String
// // var t = true; // boolean

// // // khai báo biến kiểu mới hơn
// // let n = 20; 

// // var z = x + 10;//20
// // var z1 = x + y; //10Hello world
// // var z2 = y+y; //"hello worldhello world"
// // var z3 = "20" + 10;// "2010"
// // console.log(x+y+"20"+10);//10hello world2010



// // for(var i = 0; i< 10;i++){
// //     console.log("i="+i);
// // }

// // var arr= [];
// // arr[0] = 2;
// // arr[1] = "anc";

// // arr.push(135); //arr[2];
// // arr.push("hello"); // arr[3]
// // console.log("size of arr:" +arr.length);
// // for(var i =0;i<arr.length;i++){
// //     console.log(arr[i]);
// // }


// // function tinh_tong(a,b){
// //     console.log(a+b);
// // }
// // tinh_tong(5,7);
// // tinh_tong(5,"abc");

// //alert("yêu cầu phải trên 18 tuổi");// gửi cảnh bảo cho người dùng
// // var tl = confirm("bạn chắc chắn chưa?"); // boolean
// // if(tl){
// //     alert("người dùng đã chắc chắn với câu trả lời");
// // }else{
// //     alert("người dùng cần tìm hiểu thêm");
// // }
// // var kq = prompt("bạn bao nhiêu tuổi");// string
// // var k2 = parseInt(kq) + 10;
// /*
//     "18"=> 18
//     "18a"=> 18
//     "18a2" => 18
//     "a18" => NaN ( not a number)
// */
// // alert ("sau 10 năm, bạn đã "+kq+"tuổi");

// // var rd = Math.ramdom(); //0<rd<1 0.13123
// // rd = rd *100; // 13.3243
// // rd = parseInt(rd);
// // cho người dùng nhập vào 1 số bất kỳ(0 - > 99)
// // sinh ra soos ngẫy nghiên và xem họ có trúng giải hay không

// // var rd = Math.random();
// //     rd = rd *100;
// //     rd = parseInt(rd);
// //     console.log(rd);
// // var tuoi = prompt("nhập vào 1 số bất kì từ 0 -> 99");
// //     if(rd == tuoi ){
// //         alert("bạn đã trúng giải");
// //     }else{
// //         alert("chúc bạn may mắn lần sau");
// //     }
// // tạo ra 1 bộ 23 số(0->99)
// // người chơi sẽ chọn 1 số mỗi lần( tối đa chơi 7 lần) và số tiền đặt
// // cược của ngày hôm đó.( giả sử tỉ lệ là 23đ 1 điểm -> trúng 1 số thì được 80đ)
// // sau 7 ngày hãy tính số tiền đã bỏ ra và số tiền thu được

var st = 0;
var dt = 0;
for(var i=1;i<=7;i++){
    var kq= [];
    for(var j=0; j< 23;j++){
        var rd = Math.random()*100;
        rd = parseInt(rd);
        kq.push(rd);
    }
    var lc = prompt(`nhao số muốn đật của ngày hôm nay (ngày thứ ${i}):`);
    lc= parseInt(lc);
    var td= prompt(`nhập số tiền muốn đặt vào ngày hôm nay (ngày thứ ${i}): `);
    td = parseInt(td);
    st +=td;
    kq.forEach(e=>{
        if(e == lc){
            dt+=(td/23)*80;
        }
    })
}
alert(`tổng tiền ban đầu bỏ ra ${st}, tổng số tiền thu được ${dt} `);