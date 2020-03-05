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

// docial media:
const socialMedia = document.querySelector(".socialMedia");
const showButtons = document.querySelector(".showButtons");
const facebook = document.querySelector(".facebook");
const instagram = document.querySelector(".instagram");
const linkedIn = document.querySelector(".linkedIn");
const gitHub = document.querySelector(".gitHub");

  // detect if the + butto is clicked or no:
let SMClicked = false;

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
        stitle[i].style.top = "58px";
      }
      for (var i = 0; i < frstline.length; i++) {
        frstline[i].style.top = "30px";
      }
        // make page turning effect
      floatingPage.style.borderTopLeftRadius = "100%";
        // change text color
      menuButton.style.color = "white";
      socialMedia.style.color = "white"; 
      logoText.style.color = "white"; 
        // animate the actual page counter:
      actualPage.style.left = "50px";
      pagesNumber.style.color = "white";
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
        stitle[i].style.color = "white";    // change the color
        stitle[i].style.top = "0px";  // show text
      }
      for (var i = 0; i < frstline.length; i++) {
        frstline[i].style.color = "white";   // change the color
        frstline[i].style.top = "0px";  // show text
      }
    }, 1000);
      pivot = true;

    } else { // the second page:
      // hide the text content:
    for (var i = 0; i < stitle.length; i++) {
      stitle[i].style.top = "58px";
    }
    for (var i = 0; i < frstline.length; i++) {
      frstline[i].style.top = "30px";
    }
      // pull the page to the top:
    floatingPage.style.top = `0px`;
    menuButton.style.color = "black";
    socialMedia.style.color = "black"; 
    logoText.style.color = "black";
      // animate the actual page counter:
    actualPage.style.left = "50px";
    pagesNumber.style.color = "black";
    setTimeout(() => {
      actualPage.style.left = "0px";
        // change the page number:
      actualPage.innerHTML = "1";
    }, 1000);
    setTimeout(() => {
        // make the turned page effect:
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
      stitle[i].style.color = "black";    // change the color
      stitle[i].style.top = "0px";  // show text
    }
    for (var i = 0; i < frstline.length; i++) {
      frstline[i].style.color = "black";   // change the color
      frstline[i].style.top = "0px";  // show text
    }
  }, 1000);
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


// show and hide social media :

showButtons.addEventListener("click", ()=> {
  if(!SMClicked) {
    socialMedia.style.bottom = "40%";
    socialMedia.style.left = "60%";
  
    setTimeout(() => {
      facebook.style.visibility = "visible";
      facebook.style.bottom = "102px";
      facebook.style.left = "-5px";
    }, 100);
  
    setTimeout(() => {
      instagram.style.visibility = "visible";
      instagram.style.bottom = "92px";
      instagram.style.left = "52px";
    }, 200);
  
    setTimeout(() => {
      linkedIn.style.visibility = "visible";
      linkedIn.style.bottom = "52px";
      linkedIn.style.left = "92px";
    }, 300);
  
    setTimeout(() => {
      gitHub.style.visibility = "visible";
      gitHub.style.bottom = "-5px";
      gitHub.style.left = "102px";
    }, 400);
  
    SMClicked = true;

  } else {

    socialMedia.style.bottom = "47%";
    socialMedia.style.left = "60%";

  setTimeout(() => {
    facebook.style.visibility = "hidden";
    facebook.style.bottom = "0%";
    facebook.style.left = "0%";
  }, 100);

  setTimeout(() => {
    instagram.style.visibility = "hidden";
    instagram.style.bottom = "0%";
    instagram.style.left = "0%";
  }, 200);

  setTimeout(() => {
    linkedIn.style.visibility = "hidden";
    linkedIn.style.bottom = "0%";
    linkedIn.style.left = "0%";
  }, 300);

  setTimeout(() => {
    gitHub.style.visibility = "hidden";
    gitHub.style.bottom = "0%";
    gitHub.style.left = "0%";
  }, 400);

  SMClicked = false;
  }
})