var finaltext = "Coopyy";

const characters =
"0123456789";

function randomstr() {
  n = Math.random();
  n = n * characters.length;
  n = Math.floor(n);
  out = characters[n];
  return out;
}
var pos = 0;
var text = [];
for (i = 0; i < finaltext.length; i++) {
  t = [];
  text.push(t);
}

for (i = 0; i < finaltext.length; i++) {
  t = text[i];
  for (j = 0; j < 10 + (i * 5); j++) {
    t.push(randomstr());
  }
 
  console.log(pos)
  t.push(finaltext[i]);
}

let cutie = "furfag.me"

var counter = 0;

const elemout = document.getElementById("animationoutput");

for (i = 0; i < finaltext.length; i++) {
  const outputpart = document.createElement("div");
  outputpart.classList.add("letters");
  elemout.appendChild(outputpart);
  outputlist = document.getElementsByClassName("letters");
}

function change() {
  for (i = 0; i < finaltext.length; i++) {
    ft = text[i];
    if (counter < ft.length) {
      outputlist[i].innerHTML = ft[counter];
    } else {
      outputlist[i].innerHTML = ft[ft.length - 1];
    }
  }

  counter++;
}

const inst = setInterval(change, 150); 

