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
const stitle = document.querySelector(".title");

const fline = document.querySelector(".fline");
const frstline = document.querySelector(".frstline");

const sline = document.querySelector(".sline");
const scndLine = document.querySelector(".scndLine");

  // detect if the + butto is clicked or no:
let Showen = false;
  // detect the page pivoting:
let pivot = false;

  // when hovering the button:
button.addEventListener("mouseover", ()=> {
  if (!pivot) {
      // make a page pivot magnet :
    floatingPage.style.borderTopLeftRadius = "15%";
      // blur the button :
    menuButton.style.opacity = "0";
    setTimeout(() => {
      menuButton.style.opacity = "1";
    }, 1000);

  }else {
      // make a page pivot magnet :
    floatingPage.style.top = "190px";
      // blur the button :
    menuButton.style.opacity = "0";
    setTimeout(() => {
      menuButton.style.opacity = "1";
    }, 1000);
  }
})

button.addEventListener("mouseout", ()=> {
  if (!pivot) {
    floatingPage.style.borderTopLeftRadius = "0%";
  }else {
    floatingPage.style.top = "200px";
  }
})

  // when cliking the button:
  button.addEventListener("click", ()=> {
    if (!pivot) {
      setTimeout(() => {
        floatingPage.style.borderTopLeftRadius = "100%";
        menuButton.style.color = "black";
        // animate the actual page button:
        actualPage.style.left = "50px";
        pagesNumber.style.color = "black";
        setTimeout(() => {
          actualPage.style.left = "0px";
            // change the page number:
          actualPage.innerHTML = "2";
        }, 500);
      }, 0);
      setTimeout(() => {
        floatingPage.style.top = "200px";
          // show the text content:
        stitle.style.top = "0px";
        frstline.style.top = "0px";
        scndLine.style.top = "0px";
      }, 400);
      pivot = true;
    } else {
      setTimeout(() => {
        floatingPage.style.top = "0px";
        menuButton.style.color = "white";
          // animate the actual page button:
          pagesNumber.style.color = "white";
        actualPage.style.left = "50px";
        setTimeout(() => {
          actualPage.style.left = "0px";
            // change the page number:
          actualPage.innerHTML = "1";
        }, 500);
      }, 0);
      setTimeout(() => {
        floatingPage.style.borderTopLeftRadius = "0%";
          // show the text content:
        stitle.style.top = "42px";
        frstline.style.top = "30px";
        scndLine.style.top = "30px";
      }, 800);
      pivot = false;
    }
  })

