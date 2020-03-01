  // Elemnts:
const Book = document.querySelector(".Book");
const floatingPage = document.querySelector(".floatingPage");
  // Butttons
const button = document.querySelector(".Button");
const menuButton = document.querySelector(".menuButton");
  // Pages Number (counter):
const pagesNumber = document.querySelector(".pagesNumber");
const actualPage = document.querySelector(".actual");
  // Content:
const scontent = document.querySelector(".content");

const h1 = document.querySelector(".titleContainer");
const stitle = document.getElementsByClassName("title");

const fline = document.querySelector(".fline");
const frstline = document.getElementsByClassName("line");
  // first and second title
let first = document.querySelector("#first");
let second = document.querySelector("#second");
  // all text
let frst = document.querySelector("#frst");
let scnd = document.querySelector("#scnd");
let thrd = document.querySelector("#thrd");
let ffth = document.querySelector("#ffth");
let sxth = document.querySelector("#sxth");

// Logo:
const logoContainer = document.querySelector(".logo");
const logoText = document.querySelector(".logo-name-text");

  // detect if the + butto is clicked or no:
let Showen = false;
  // detect the page pivoting:
let pivot = false;

  // blur the button when cliking the button:
button.addEventListener("click", ()=> {
  if (!pivot) {
      // blur the button :
    menuButton.style.fontSize = "0.1rem";
    menuButton.style.opacity = "0";
    setTimeout(() => {
      menuButton.innerHTML = "back";
      menuButton.style.opacity = "1";
      menuButton.style.fontSize = "1rem";
    }, 800);
  }else {
      // blur the button :
    menuButton.style.fontSize = "0.1rem";
    menuButton.style.opacity = "0";
    setTimeout(() => {
      menuButton.innerHTML = "back";
      menuButton.style.opacity = "1";
      menuButton.style.fontSize = "1rem";
    }, 800);
  }
})
  // make the magnet effect to the page:
button.addEventListener("mouseover", ()=> {
  if (!pivot) {
    // make a page pivot magnet :
  floatingPage.style.borderTopLeftRadius = "15%";
}else {
    // make a page pivot magnet :
  floatingPage.style.top = `95%`;
}
})
button.addEventListener("mouseout", ()=> {
  if (!pivot) {
    // make a page pivot magnet :
  floatingPage.style.borderTopLeftRadius = "0%";
}else {
    // make a page pivot magnet :
    floatingPage.style.top = `100%`;
}
})

  // turn the page when cliking the button:
  button.addEventListener("click", ()=> {
    if (!pivot) {  // the first page
        // hide the text content:
      for (var i = 0; i < stitle.length; i++) {
        stitle[i].style.top = "52px";
      }
      for (var i = 0; i < frstline.length; i++) {
        frstline[i].style.top = "30px";
      }
        // make page turning effect
      floatingPage.style.borderTopLeftRadius = "100%";
        // change text color
      menuButton.style.color = "black";
        // animate the actual page counter:
      actualPage.style.left = "50px";
      pagesNumber.style.color = "black";
      setTimeout(() => {
        actualPage.style.left = "0px";
        // change the page number:
        actualPage.innerHTML = "2";
      }, 1000);
      setTimeout(() => {
          // put the turned page to the bottom
        floatingPage.style.top = `${screen.width}%`;
          // change text content
        first.innerHTML = "/////////";
        second.innerHTML = "//////////";
        frst.innerHTML = "///////////////////////////////////////////////////////////";
        scnd.innerHTML = "/////////////////////////////////////////////";
        thrd.innerHTML = "//////////////////////////////////////////////////";
        ffth.innerHTML = "HTML5/CSS3/JS";
        sxth.innerHTML = "React/React native";
      }, 600);
      setTimeout(() => {
        // Show the text content:
      for (var i = 0; i < stitle.length; i++) {
        stitle[i].style.color = "black";    // change the color
        stitle[i].style.top = "0px";  // show text
      }
      for (var i = 0; i < frstline.length; i++) {
        frstline[i].style.color = "black";   // change the color
        frstline[i].style.top = "0px";  // show text
      }
    }, 1000);
      pivot = true;


    } else { // the second page:

      // hide the text content:
    for (var i = 0; i < stitle.length; i++) {
      stitle[i].style.top = "52px";
    }
    for (var i = 0; i < frstline.length; i++) {
      frstline[i].style.top = "30px";
    }
      // pull the page to the top:
    floatingPage.style.top = `0px`;
    menuButton.style.color = "white";
      // animate the actual page counter:
    actualPage.style.left = "50px";
    pagesNumber.style.color = "black";
    setTimeout(() => {
      actualPage.style.left = "0px";
        // change the page number:
      actualPage.innerHTML = "1";
    }, 1000);


    setTimeout(() => {
      floatingPage.style.borderTopLeftRadius = "0%";
        // change text content
      first.innerHTML = "////////////";
      second.innerHTML = "////////////";
      frst.innerHTML = "////////////";
      scnd.innerHTML = "//////////////////";
      thrd.innerHTML = "/////////////";
      ffth.innerHTML = "/////////////////////////////////";
      sxth.innerHTML = "///////////////////";
    }, 1000);
    setTimeout(() => {
      // Show the text content:
    for (var i = 0; i < stitle.length; i++) {
      stitle[i].style.color = "white";    // change the color
      stitle[i].style.top = "0px";  // show text
    }
    for (var i = 0; i < frstline.length; i++) {
      frstline[i].style.color = "white";   // change the color
      frstline[i].style.top = "0px";  // show text
    }
  }, 1200);
      pivot = false;
    }
  })

//Logo sign effect (show and hide name when hovernig logo):

logoContainer.addEventListener("mouseover", ()=> {
  logoText.style.top = "-20px";
})

logoContainer.addEventListener("mouseout", ()=> {
  logoText.style.top = "0px";
})
