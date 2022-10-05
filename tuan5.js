const bieuDoTem = [];
const bieuDoWarm = [];
const bieuDoLight = [];
setInterval(() => {
//nhiet do
var x = document.getElementById("nhietdo").innerHTML = Math.floor(Math.random() * 101);
if (x<30){
    document.getElementById("box1").style.backgroundColor = "coral";
}else if(x>=30 && x<70) {
    document.getElementById("box1").style.backgroundColor = "orangered";
}else {
    document.getElementById("box1").style.backgroundColor = "firebrick";
}
//độ ẩm
var y = document.getElementById("doam").innerHTML = Math.floor(Math.random() * 101);
if (y<30){
    document.getElementById("box2").style.backgroundColor = "lightblue";
}else if(y>=30 && y<80){
    document.getElementById("box2").style.backgroundColor = "deepskyblue";
} else{
    document.getElementById("box2").style.backgroundColor = "blue";
}
//ánh sáng
var z = document.getElementById("anhsang").innerHTML = Math.floor(Math.random() * 101);
if (z<40){
    document.getElementById("box3").style.backgroundColor = "khaki";
}else if(z>=40 && z<80){
    document.getElementById("box3").style.backgroundColor = "yellow";
}else{
    document.getElementById("box3").style.backgroundColor = "darkorange";
}

//đồ thị
const temLength = bieuDoTem.length;
const warmLength = bieuDoWarm.length;
const lightLength = bieuDoLight.length;


if(temLength < 10){
    bieuDoTem.push(x);
}

if(warmLength < 10){
    bieuDoWarm.push(y);
}

if(lightLength < 10){
    bieuDoLight.push(z);
}

Highcharts.chart('container', {
title: {
text: 'BIỂU ĐỒ HIỂN THỊ'
},
subtitle: {
text: ''
},
yAxis: {
title: {
    text: 'Thanh nhiệt độ'
}
},
xAxis: {
accessibility: {
    rangeDescription: 'Range: 1 to 10'
}
},

legend: {
layout: 'vertical',
align: 'right',
verticalAlign: 'middle'
},

plotOptions: {
series: {
    label: {
        connectorAllowed: false
    },
    pointStart: 1
}
},

series: [{
name: 'nhiệt độ',
data: bieuDoTem 
}, {
name: 'độ ẩm',
data: bieuDoWarm 
}, {
name: 'ánh sáng',
data: bieuDoLight 
}],

responsive: {
rules: [{
    condition: {
        maxWidth: 500
    },
    chartOptions: {
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
        }
    }
}]
}
});

},3000)
//nhiệt độ

//button bật tắt đèn
function on() {
document.getElementById("myImage").src= "bongdensang.jpg"
}
function off() {
document.getElementById("myImage").src= "bongden.jpg"
}

function led2(){
var btn = document.getElementById('btn');
if(btn.checked == true){
const note = confirm('Bạn có muốn tắt đèn không?')
if(note){
document.getElementById("myImage2").src= "bongden.jpg";
}
}else{
const note = confirm('Bạn có muốn bật đèn không?')
if(note){
document.getElementById("myImage2").src= "bongdensang.jpg";
}
}
}