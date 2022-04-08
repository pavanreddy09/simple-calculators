

let baby_names = {
    indian_names : {
        boys_names : ["Aayush","Akash","Bharath","Bhadra","Charan","Chiranth","Deepak","Dharshan","Eshwar","Ganesh","Harish","Izaz","Karthik","Lohith","Mohith",
        "Naveen","Preetham","Pavan","Ravi","Sampath","Tarun","Umesh","Varun"],
        girl_names : ["Ayishu","Artha","Bhavana","Chithra","Deepthi","Darshana","Gagana","Harshitha","Inchara","Kavana","Kavya","Kalpana","Latha","Lahari","Manasa",
        "Navya","Nayana","Pavithra","Pavani","Ranjitha","Rachitha","Sapthami","Teju","Urvashi","Vandana"]
    },
    usa_names : {
        boys_names: ["Lima","Noah","Oliver","Elijah","James","Benjamin","Lucas","Henry","Alexander","Mason","Michael","Jacob","Levi","Jack","Owen","John","David","Luke",
        "Leo","Jayden","Isaac","Hudson","Thomas"],
        girl_names : ["Ava","Emma","Mia","Gianna","Abigail","Luna","Ella","Sofia","Mila","Aria","Chloe","Zoey","Lily","Riley","Nova","Isla","Addison","Willow","Lucy",
    "Bella","Anna","Ruby","Alice"]
    },
    japanese_names : {
        boys_names:["Haruki","Ichiro","Kazuhiko","Akihiko","Akio","Bunta","Botan","Chikao","Daijiro","Daishiro","Enzo","Etsuo","Genji","Genkei","Ginjiro","Hiro","Ikuo",
        "Iwao","Joji","Kanji","Mako","Naruto","Rikuto","Satoshi","Shino","Taiki","Yuzuru","Zentaro"],
        girl_names : ["Ahmya","Airi","Aka","Anzu","Bashira","Chiharu","Chiye","Chou","Eiko","Hana","Haruna","Hinako","Kaede","Kaiya","Kameko","Mai","Nanako","Reina",
        "Rini","Sada","Sakaye","Satoyo","Taka","Takako","Takane","Ume","Yua","Zakuro"]
    },
    southAfrican_names : {
        boys_names : ["Aadan","Abdalla","Amari","Bamidele","Chima","Diallo","Faraji","Femi","Ike","Imamu","Jabari","Kamari","Kofi","Kwame","Nnamdi","Omari","Osiris",
        "Yared","Yuusuf","Zaire"],
        girl_names : ["Anele","Blessing","Elna","Kaya","Lerato","Gamuchirai","Keitumetse","Mandisa","Marli","Masego","Mpho","Nandipha","Ola","Palesa","Puleng",
        "Sibongile","Thabisa","Thandiwe","Siphesihle","Zola","Zuri"]
    }
}


let tablebody = document.querySelector("#mytable");
let sd = document.querySelector(".dropdown");
let input = document.getElementById("search");
let boynamebox = document.getElementById("boynamebox");
let girlnamebox = document.getElementById("girlnamebox");
let tablehead = document.querySelector(".tablehead");
let btn = document.querySelectorAll("button");


let names = ["SL.NO", "BOY NAMES", "GIRL NAMES"];


function loaddatatotable(data) {
  tablebody.innerHTML = "";

  for(let i=0;i<btn.length;i++){
      btn[i].classList.remove("active");
  }

  if (boynamebox.checked == true) {

    btn[0].classList.add("active");
    let bhead = `<th>${names[0]}</th>
          <th>${names[1]}</th>`;
    tablehead.innerHTML = bhead;
    for (let i = 0; i < data.boys_names.length; i++) {
      let tr = document.createElement("tr");
      let slno = i + 1;
      let boysname = data.boys_names[i];
      let content = `<tr>
                <td>${slno}</td>
                <td>${boysname}</td>
                </tr>`;

      tablebody.innerHTML += content;
    }
  } 
  else if (girlnamebox.checked == true) {
    
    btn[1].classList.add("active");
    let ghead = `<th>${names[0]}</th>
          <th>${names[2]}</th>`;
    tablehead.innerHTML = ghead;
    for (let i = 0; i < data.girl_names.length; i++) {
      let tr = document.createElement("tr");
      let slno = i + 1;
      let girlsname = data.girl_names[i];
      let content = `<tr>
                <td>${slno}</td>
                <td>${girlsname}</td>
                </tr>`;

      tablebody.innerHTML += content;
    }
  } 
  else {

    btn[2].classList.add("active");
    let head = `<th>${names[0]}</th>
          <th>${names[1]}</th>
          <th>${names[2]}</th>`;
    tablehead.innerHTML = head;

    for (let i = 0; i < data.boys_names.length; i++) {
      let tr = document.createElement("tr");
      let slno = i + 1;
      let boysname = data.boys_names[i];
      let girlsname = data.girl_names[i];
      let content = `<tr>
            <td>${slno}</td>
            <td>${boysname}</td>
            <td>${girlsname}</td>
            </tr>`;

      tablebody.innerHTML += content;
    }
  }
}



// select
sd.addEventListener("change", () => {
  if (sd.value == 1) {
    loaddatatotable(baby_names.indian_names);
  } else if (sd.value == 2) {
    loaddatatotable(baby_names.usa_names);
  } else if (sd.value == 3) {
    loaddatatotable(baby_names.japanese_names);
  } else if (sd.value == 4) {
    loaddatatotable(baby_names.southAfrican_names);
  }
});


// Search
input.addEventListener("keyup", () => {
  let filter = input.value.toUpperCase();
  let tr = tablebody.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[1];
    if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
});

loaddatatotable(baby_names.indian_names);


let mainheading = document.getElementById("main-heading");
let title = document.querySelector("title");


// All Names
function All_names() {
  girlnamebox.checked = false;
  boynamebox.checked = false;
  mainheading.textContent = "Baby Names List";
  title.textContent ="Baby Names List";
  

  if (sd.value == 1) {
    loaddatatotable(baby_names.indian_names);
  } else if (sd.value == 2) {
    loaddatatotable(baby_names.usa_names);
  } else if (sd.value == 3) {
    loaddatatotable(baby_names.japanese_names);
  } else if (sd.value == 4) {
    loaddatatotable(baby_names.southAfrican_names);
  }
}


// boy names only
function boy_names() {
  girlnamebox.checked = false;
  boynamebox.checked = true;
  mainheading.textContent = "Boy Baby Names List";
  title.textContent ="Boy Baby List";
  
  if (sd.value == 1) {
    loaddatatotable(baby_names.indian_names);
  } else if (sd.value == 2) {
    loaddatatotable(baby_names.usa_names);
  } else if (sd.value == 3) {
    loaddatatotable(baby_names.japanese_names);
  } else if (sd.value == 4) {
    loaddatatotable(baby_names.southAfrican_names);
  }
}


// girlnames only
function girl_names() {
  boynamebox.checked = false;
  girlnamebox.checked = true;
  mainheading.textContent = "Girl Baby Names List";
  title.textContent ="Girl Baby List";

  if (sd.value == 1) {
    loaddatatotable(baby_names.indian_names);
  } else if (sd.value == 2) {
    loaddatatotable(baby_names.usa_names);
  } else if (sd.value == 3) {
    loaddatatotable(baby_names.japanese_names);
  } else if (sd.value == 4) {
    loaddatatotable(baby_names.southAfrican_names);
  }
}




