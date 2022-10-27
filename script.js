//Toggle menu bar

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

//------------------------------------------------------------------------------

//Algorithms for disk scheduling algorithms

function funfcfs(seq, h) {
  plotgraph = document.getElementById('areaA');
  const arr1 = new Array();
  arr1.push(h);
  for (var i = 0; i < seq.length; i++) {
    arr1.push(seq[i]);
  }
  var totalstr = "";
  for (var i = 1; i < arr1.length; i++) {
    totalstr = totalstr + "|" + arr1[i].toString() + "-" + arr1[i - 1].toString() + "|";
    if (i < arr1.length - 1) {
      totalstr = totalstr + "+";
    }
  }
  totalstr = totalstr + "<br>" + "Seek Sequence is : " + "<br>";
  for (let i = 0; i < arr1.length - 1; i++) {
    totalstr = totalstr + arr1[i].toString() + "<br>" + "⬇" + "<br>";
  }
  totalstr = totalstr + arr1[arr1.length - 1].toString();
  arr1.reverse();
  Plotly.plot(plotgraph, [{ x: arr1 }], { margin: { t: 0 } });
  console.log(Plotly.BUILD);

  var seek = 0;
  for (var i = 1; i < arr1.length; i++) {
    seek += Math.abs(arr1[i] - arr1[i - 1]);
  }
  var totalseek = "Seek-Time: ";
  document.getElementById("cal-seek").innerHTML = totalseek + " = " + seek + "<br>" + totalstr;
}

function funsstf(seq, h) {
  plotgraph = document.getElementById('areaA');
  seq.sort(function (a, b) { return a - b });
  const arr1 = new Array();
  const arr2 = new Array();
  for (var i = 0; i < seq.length; i++) {
    if (seq[i] <= h) {
      arr1.push(seq[i]);
    }
    else {
      arr2.push(seq[i]);
    }
  }
  arr1.push(h);
  arr1.reverse();

  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  var totalstr = "";
  for (var i = 1; i < arr1.length; i++) {
    totalstr = totalstr + "|" + arr1[i].toString() + "-" + arr1[i - 1].toString() + "|";
    if (i < arr1.length - 1) {
      totalstr = totalstr + "+";
    }
  }
  totalstr = totalstr + "<br>" + "Seek Sequence is : " + "<br>";
  for (let i = 0; i < arr1.length - 1; i++) {
    totalstr = totalstr + arr1[i].toString() + "<br>" + "⬇" + "<br>";
  }
  totalstr = totalstr + arr1[arr1.length - 1].toString();
  arr1.reverse();
  Plotly.plot(plotgraph, [{ x: arr1 }], { margin: { t: 0 } });
  console.log(Plotly.BUILD);

  var seek = 0;
  for (let i = 1; i < arr1.length; i++) {
    seek += Math.abs(arr1[i] - arr1[i - 1]);
  }
  var totalseek = "Seek-Time: ";
  document.getElementById("cal-seek").innerHTML = totalseek + " = " + seek + "<br>" + totalstr;
}


function funscan(seq, h) {
  plotgraph = document.getElementById('areaA');
  seq.sort(function (a, b) { return a - b });
  const arr1 = new Array();
  const arr2 = new Array();
  arr2.push(h);
  for (var i = 0; i < seq.length; i++) {
    if (seq[i] < h) {
      arr1.push(seq[i]);
    }
    else {
      arr2.push(seq[i]);
    }
  }
  arr1.reverse();
  arr2.push(199);
  for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i]);
  }
  var totalstr = "";
  for (var i = 1; i < arr2.length; i++) {
    totalstr = totalstr + "|" + arr2[i].toString() + "-" + arr2[i - 1].toString() + "|";
    if (i < arr2.length - 1) {
      totalstr = totalstr + "+";
    }
  }
  totalstr = totalstr + "<br>" + "Seek Sequence is : " + "<br>";
  for (let i = 0; i < arr2.length - 1; i++) {
    totalstr = totalstr + arr2[i].toString() + "<br>" + "⬇" + "<br>";
  }
  totalstr = totalstr + arr2[arr2.length - 1].toString();
  arr2.reverse();
  Plotly.plot(plotgraph, [{ x: arr2 }], { margin: { t: 0 } });
  console.log(Plotly.BUILD);

  var seek = 0;
  for (let i = 1; i < arr2.length; i++) {
    seek += Math.abs(arr2[i] - arr2[i - 1]);
  }
  var totalseek = "Seek-Time: ";
  document.getElementById("cal-seek").innerHTML = totalseek + " = " + seek + "<br>" + totalstr;
}



function funcscan(seq, h) {
  plotgraph = document.getElementById('areaA');
  seq.sort(function (a, b) { return a - b });
  //document.write(seq);
  const arr1 = new Array();
  const arr2 = new Array();
  arr2.push(h);
  for (var i = 0; i < seq.length; i++) {
    if (seq[i] < h) {
      arr1.push(seq[i]);
    }
    else {
      arr2.push(seq[i]);
    }
  }
  arr2.push(199);
  arr2.push(0);
  for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i]);
  }
  var totalstr = "";
  for (var i = 1; i < arr2.length; i++) {
    totalstr = totalstr + "|" + arr2[i].toString() + "-" + arr2[i - 1].toString() + "|";
    if (i < arr2.length - 1) {
      totalstr = totalstr + "+";
    }
  }
  totalstr = totalstr + "<br>" + "Seek Sequence is : " + "<br>";
  for (let i = 0; i < arr2.length - 1; i++) {
    totalstr = totalstr + arr2[i].toString() + "<br>" + "⬇" + "<br>";
  }
  totalstr = totalstr + arr2[arr2.length - 1].toString();
  arr2.reverse();
  Plotly.plot(plotgraph, [{ x: arr2 }], { margin: { t: 0 } });
  console.log(Plotly.BUILD);

  var seek = 0;
  for (let i = 1; i < arr2.length; i++) {
    seek += Math.abs(arr2[i] - arr2[i - 1]);
  }
  var totalseek = "Seek-Time: ";
  document.getElementById("cal-seek").innerHTML = totalseek + " = " + seek + "<br>" + totalstr;
}



function funlook(seq, h) {
  plotgraph = document.getElementById('areaA');
  seq.sort(function (a, b) { return a - b });
  const arr1 = new Array();
  const arr2 = new Array();
  arr2.push(h);
  for (var i = 0; i < seq.length; i++) {
    if (seq[i] < h) {
      arr1.push(seq[i]);
    }
    else {
      arr2.push(seq[i]);
    }
  }
  arr1.reverse();
  for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i]);
  }
  var totalstr = "";
  for (var i = 1; i < arr2.length; i++) {
    totalstr = totalstr + "|" + arr2[i].toString() + "-" + arr2[i - 1].toString() + "|";
    if (i < arr2.length - 1) {
      totalstr = totalstr + "+";
    }
  }
  totalstr = totalstr + "<br>" + "Seek Sequence is : " + "<br>";
  for (let i = 0; i < arr2.length - 1; i++) {
    totalstr = totalstr + arr2[i].toString() + "<br>" + "⬇" + "<br>";
  }
  totalstr = totalstr + arr2[arr2.length - 1].toString();
  arr2.reverse();
  Plotly.plot(plotgraph, [{ x: arr2 }], { margin: { t: 0 } });
  console.log(Plotly.BUILD);

  var seek = 0;
  for (let i = 1; i < arr2.length; i++) {
    seek += Math.abs(arr2[i] - arr2[i - 1]);
  }
  var totalseek = "Seek-Time: ";
  document.getElementById("cal-seek").innerHTML = totalseek + " = " + seek + "<br>" + totalstr;
}


function funclook(seq, h) {
  plotgraph = document.getElementById('areaA');
  seq.sort(function (a, b) { return a - b });
  const arr1 = new Array();
  const arr2 = new Array();
  arr2.push(h);
  for (var i = 0; i < seq.length; i++) {
    if (seq[i] < h) {
      arr1.push(seq[i]);
    }
    else {
      arr2.push(seq[i]);
    }
  }

  for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i]);
  }
  var totalstr = "";
  for (var i = 1; i < arr2.length; i++) {
    totalstr = totalstr + "|" + arr2[i].toString() + "-" + arr2[i - 1].toString() + "|";
    if (i < arr2.length - 1) {
      totalstr = totalstr + "+";
    }
  }
  totalstr = totalstr + "<br>" + "Seek Sequence is : " + "<br>";
  for (let i = 0; i < arr2.length - 1; i++) {
    totalstr = totalstr + arr2[i].toString() + "<br>" + "⬇" + "<br>";
  }
  totalstr = totalstr + arr2[arr2.length - 1].toString();
  arr2.reverse();
  Plotly.plot(plotgraph, [{ x: arr2 }], { margin: { t: 0 } });
  console.log(Plotly.BUILD);

  var seek = 0;
  for (let i = 1; i < arr2.length; i++) {
    seek += Math.abs(arr2[i] - arr2[i - 1]);
  }
  var totalseek = "Seek-Time: ";
  document.getElementById("cal-seek").innerHTML = totalseek + " = " + seek + "<br>" + totalstr;
}



function calculationgraph(alg, A, head) {
  var inp = [];
  var arrint = A.split(" ");
  for (i = 0; i < arrint.length; ++i) {
    var a = parseInt(arrint[i]);
    inp.push(a);
  }

  head = parseInt(head);

  if (alg == "fcfs") {
    funfcfs(inp, head);
  }
  if (alg == "sstf") {
    funsstf(inp, head);
  }
  if (alg == "scan") {
    funscan(inp, head);
  }
  if (alg == "c-scan") {
    funcscan(inp, head);
  }
  if (alg == "look") {
    funlook(inp, head);
  }
  if (alg == "c-look") {
    funclook(inp, head);
  }

  document.getElementById("alg-name").innerHTML = alg;
  document.getElementById("graph_area").style.visibility = "visible";
}




































