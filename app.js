// pivot page elemnts:

const page = document.querySelector(".back");

const butttton = document.querySelector(".menu");


  // detect if the + butto is clicked or no:
let Showen = false;



// IV. Pivoting page :
const scontent = document.querySelector(".scontent");

const h1 = document.querySelector(".h1");
const stitle = document.querySelector(".stitle");

const fline = document.querySelector(".fline");
const frstline = document.querySelector(".frstline");

const sline = document.querySelector(".sline");
const scndLine = document.querySelector(".scndLine");

const menuButton = document.querySelector(".menuButton");

const pagesNumber = document.querySelector(".pagesNumber");
const actualPage = document.querySelector(".actual");


  // detect the page pivoting:
let pivot = false;

  // when hovering the button:
butttton.addEventListener("mouseover", ()=> {
  if (!pivot) {
    page.style.borderTopLeftRadius = "15%";
    menuButton.style.top = "18px";
    setTimeout(() => {
      menuButton.style.top = "0px";
    }, 200);
  }else {
    page.style.top = "190px";
    menuButton.style.top = "18px";
    setTimeout(() => {
      menuButton.style.top = "0px";
    }, 200);
  }
})
butttton.addEventListener("mouseout", ()=> {
  if (!pivot) {
    page.style.borderTopLeftRadius = "0%";
  }else {
    page.style.top = "200px";
  }
})

  // when cliking the button:
  butttton.addEventListener("click", ()=> {
    if (!pivot) {
      setTimeout(() => {
        page.style.borderTopLeftRadius = "100%";
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
        page.style.top = "200px";
          // show the text content:
        stitle.style.top = "0px";
        frstline.style.top = "0px";
        scndLine.style.top = "0px";
      }, 400);
      pivot = true;
    } else {
      setTimeout(() => {
        page.style.top = "0px";
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
        page.style.borderTopLeftRadius = "0%";
          // show the text content:
        stitle.style.top = "42px";
        frstline.style.top = "30px";
        scndLine.style.top = "30px";
      }, 800);
      pivot = false;
    }
  })

