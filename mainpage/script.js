function myFunction() {
    var navB = document.getElementById("myRespNavBar");
    if (navB.className === "respNavBar") {
      navB.className += " responsive";
    } else {
      navB.className = "respNavBar";
    }
}

function version() {
  var w = window.innerWidth;
  // console.log(w);
  var navBarSel = document.getElementById("mynav");
  var myRespNavBar = document.getElementById("myRespNavBar");
  // console.log(myRespNavBar);

  if (w<600) {
    // console.log(w);
    navBarSel.style.display = "none";
    myRespNavBar.style.display = "block";
  } else {
    // console.log(w);
    navBarSel.style.display = "block";
    myRespNavBar.style.display = "none";
  }
}

function resizeEvent() {
  var w = window.innerWidth;
  // console.log(w);
  var navBarSel = document.getElementsByTagName("mynav");
  var myRespNavBar = document.getElementById("myRespNavBar");
  // console.log(myRespNavBar);

  if (w<600) {
    console.log(w);
    navBarSel.style.display = "none";
    myRespNavBar.style.display = "block";
  } else {
    console.log(w);
    navBarSel.style.display = "block";
    myRespNavBar.style.display = "none";
  }
}

window.addEventListener("load", version);