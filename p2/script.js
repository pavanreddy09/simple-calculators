
let gstobj = {
    "1":"18",
    "2":"10",
    "3":"5",
    "4":"5",
    "5":"6",
    "6":"15",
    "7":"7"
};

let icons = ['\u20B9','RM','$'];

let sel = document.querySelector("select");
let initial_amt = document.getElementById("inamount");
let gst_rate = document.getElementById("rate");
let net_amt = document.getElementById("netamount");
let gst_amt = document.getElementById("gstamount");
let gross_amt = document.getElementById("grossamount");
let amt_icon = document.querySelectorAll("span");
let addgst_btn = document.getElementById("addgst");
let removegst_btn = document.getElementById("removegst");
let clear_btn = document.getElementById("clear");


sel.addEventListener("change",()=>{
    if(sel.value == 1){
        gst_rate.value = gstobj["1"];
        for(let i=0;i<amt_icon.length;i++){
            amt_icon[i].textContent = icons[0];
        }
    }else if(sel.value == 2){
        gst_rate.value = gstobj["2"];
        for(let i=0;i<amt_icon.length;i++){
            amt_icon[i].textContent = icons[2];
        }
    }else if(sel.value == 3){
        gst_rate.value = gstobj["3"];
        for(let i=0;i<amt_icon.length;i++){
            amt_icon[i].textContent = icons[2];
        }
    }else if(sel.value == 4){
        gst_rate.value = gstobj["4"];
        for(let i=0;i<amt_icon.length;i++){
            amt_icon[i].textContent = icons[2];
        }
    }else if(sel.value == 5){
        gst_rate.value = gstobj["5"];
        for(let i=0;i<amt_icon.length;i++){
            amt_icon[i].textContent = icons[1];
        }
    }else if(sel.value == 6){
        gst_rate.value = gstobj["6"];
        for(let i=0;i<amt_icon.length;i++){
            amt_icon[i].textContent = icons[2];
        }
    }else if(sel.value == 7){
        gst_rate.value = gstobj["7"];
        for(let i=0;i<amt_icon.length;i++){
            amt_icon[i].textContent = icons[2];
        }
    }
});

// Add GST
addgst_btn.addEventListener("click",()=> {
    if(initial_amt.value==""){
        alert("Enter Initial Amount");
    }else {
        net_amt.value = `${initial_amt.value}.00`;
        gst_amt.value = ((gst_rate.value * net_amt.value)/100).toFixed(2);
        gross_amt.value = (parseFloat(net_amt.value) + parseFloat(gst_amt.value)).toFixed(2);
    }
});

// Remove GST
removegst_btn.addEventListener("click",()=> {
    if(initial_amt.value==""){
        alert("Enter Initial Amount");
    }else{
        gross_amt.value = `${initial_amt.value}.00`;
        net_amt.value = (100 * initial_amt.value / (100 + parseFloat(gst_rate.value))).toFixed(2);
        gst_amt.value = (parseFloat(gross_amt.value) - parseFloat(net_amt.value)).toFixed(2);
    }
});

// clear all input values
clear_btn.addEventListener("click",()=>{
    initial_amt.value = "";
    net_amt.value = "";
    gst_amt.value = "";
    gross_amt.value = "";
});