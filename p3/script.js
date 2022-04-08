
let title = document.querySelector("title");

function openWindow(evt, btn, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("container");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(evt).style.display = "block";
  btn.style.backgroundColor = `${color}`;
  title.textContent = `${evt} Calculator`;
}
window.addEventListener("load", () => {
  document.getElementById("Factorial").style.display = "block";
  document.getElementById("fact").style.backgroundColor='#F3C0FE';

});

//  factorial calculate
function factorial_cal() {
  let factinput = document.getElementById("factnum");
  let factres = document.getElementById("factres");
  let factlabel = document.getElementById("factlabelres");
  let res = 1;
  if (factinput.value == "") {
    alert("Enter a Number");
  } else {
    for (let i = 1; i <= factinput.value; i++) {
      res *= i;
    }
    factlabel.textContent = `Factorial of ${factinput.value} is`;
    factres.value = res;
  }
}

//  lcm calculate
function gcdlcm(a, b) {
  if (b == 0) return a;
  return gcdlcm(b, a % b);
}

function findlcm(arr, n) {
  let ans = arr[0];
  for (let i = 1; i < n; i++) ans = (arr[i] * ans) / gcdlcm(arr[i], ans);

  return ans;
}

function lcm_cal() {
  let lcminput = document.getElementById("lcmnum");
  let lcmres = document.getElementById("lcmres");
  if (lcminput.value == "") {
    alert("Enter a Number");
  } else {
    let arr = lcminput.value.split(" ");

    lcmres.value = findlcm(arr, arr.length);
  }
}

//  gcf calculate
function gcd(a, b) {
  if (a == 0) return b;
  return gcd(b % a, a);
}

function findGCD(arr, n) {
  let result = arr[0];
  for (let i = 1; i < n; i++) {
    result = gcd(arr[i], result);

    if (result == 1) {
      return 1;
    }
  }
  return result;
}

function gcf_cal() {
  let gcfinput = document.getElementById("gcfnum");
  let gcfres = document.getElementById("gcfres");
  if (gcfinput.value == "") {
    alert("Enter a Number");
  } else {
    let arr = gcfinput.value.split(" ");
    gcfres.value = findGCD(arr, arr.length);
  }
}

//  exponent calculate
function exp_cal() {
  let expbaseval = document.getElementById("expbasenum");
  let expval = document.getElementById("expvalnum");
  let expres = document.getElementById("expres");
  let res = 1;
  if (expbaseval.value == "") {
    alert("Enter Base Value");
  } else if (expval.value == "") {
    alert("Enter Exponent Value");
  } else {
    for (let i = 0; i < expval.value; i++) {
      res *= expbaseval.value;
    }
    expres.value = res;
  }
}

//  modulus calculate
function mod_cal() {
  let dividentnum = document.getElementById("dividentnum");
  let divisornum = document.getElementById("divisornum");
  let modres = document.getElementById("modres");
  if (dividentnum.value == "") {
    alert("Enter Divident Value");
  } else if (divisornum.value == "") {
    alert("Enter Divisor Value");
  } else {
    modres.value = dividentnum.value % divisornum.value;
  }
}

//  clear input value 
function clear_input(e) {
  if (e == "clearfact") {
    document.getElementById("factnum").value = "";
    document.getElementById("factres").value = "";
    document.getElementById("factlabelres").textContent = " ";
  } else if (e == "clearlcm") {
    document.getElementById("lcmnum").value = "";
    document.getElementById("lcmres").value = "";
  } else if (e == "cleargcf") {
    document.getElementById("gcfnum").value = "";
    document.getElementById("gcfres").value = "";
  } else if (e == "clearexp") {
    document.getElementById("expbasenum").value = "";
    document.getElementById("expvalnum").value = "";
    document.getElementById("expres").value = "";
  } else if (e == "clearmod") {
    document.getElementById("dividentnum").value = "";
    document.getElementById("divisornum").value = "";
    document.getElementById("modres").value = "";
  }
}
