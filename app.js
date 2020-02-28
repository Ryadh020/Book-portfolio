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
const frstline = document.getElementsByClassName("frstline");

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
    menuButton.style.opacity = "0";
    setTimeout(() => {
      menuButton.innerHTML = "back";
      menuButton.style.opacity = "1";
    }, 800);
  }else {
      // blur the button :
    menuButton.style.opacity = "0";
    setTimeout(() => {
      menuButton.innerHTML = "menu";
      menuButton.style.opacity = "1";
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
    if (!pivot) {
      setTimeout(() => {
        floatingPage.style.borderTopLeftRadius = "100%";
        menuButton.style.color = "black";
          // animate the actual page counter:
        actualPage.style.left = "50px";
        pagesNumber.style.color = "black";
        setTimeout(() => {
          actualPage.style.left = "0px";
            // change the page number:
          actualPage.innerHTML = "2";
        }, 500);
      }, 0);
      setTimeout(() => {
        floatingPage.style.top = `${screen.width}%`;
          // show the text content:
        for (var i = 0; i < stitle.length; i++) {
          stitle[i].style.top = "0px";
        }
        for (var i = 0; i < frstline.length; i++) {
          frstline[i].style.top = "0px";
        }
      }, 1000);
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
        for (var i = 0; i < stitle.length; i++) {
          stitle[i].style.top = "52px";
        }
        for (var i = 0; i < frstline.length; i++) {
          frstline[i].style.top = "30px";
        }
      }, 800);
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
