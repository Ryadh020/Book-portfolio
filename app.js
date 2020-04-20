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

// second content circles:
let circles = document.querySelectorAll(".circles");
let circle1 = document.querySelectorAll(".circle1");
let circle2 = document.querySelectorAll(".circle2");


// Logo:
const logoContainer = document.querySelector(".logo");
const logoText = document.querySelector(".logo-name-text");

// cursor:
const cursor = document.querySelector("#cursor") 

// docial media:
const socialMedia = document.querySelector(".socialMedia");
const somed = document.querySelectorAll(".somed");
const facebook = document.querySelector(".facebook");
const instagram = document.querySelector(".instagram");
const linkedIn = document.querySelector(".linkedIn");
const gitHub = document.querySelector(".gitHub");

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
      menuButton.innerHTML = "next";
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
  floatingPage.style.top = `100%`;
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
            stitle[i].style.top = "108px";
          }
          for (var i = 0; i < frstline.length; i++) {
            frstline[i].style.top = "60px";
          }
        // make page turning effect
      floatingPage.style.borderTopLeftRadius = "100%";
        // change text color
      menuButton.style.color = "white";
      socialMedia.style.color = "white"; 
      logoText.style.color = "white"; 
        // change circles colors:
      circle1.forEach(circle => {
        circle.className += " whiteCircle"
      });

      circle2.forEach(circle => {
        circle.className += " blackCircle"
      });
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
        first.innerHTML = "What I Do ?";
        second.innerHTML = "What I Know ?";
        frst.innerHTML = "create and edit  modern web sites and phone applications";
        scnd.innerHTML = "Improve web sites with  fresh user interfaces";
        thrd.innerHTML = "Build custom mobile applications for android/IOS ";
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
      stitle[i].style.top = "108px";
    }
    for (var i = 0; i < frstline.length; i++) {
      frstline[i].style.top = "60px";
    }
      // pull the page to the top:
    floatingPage.style.top = `0px`;
    menuButton.style.color = "black";
    socialMedia.style.color = "black"; 
    logoText.style.color = "black";
      // change circles colors:
    circle1.forEach(circle => {
      circle.className = "circle1"
    });
    circle2.forEach(circle => {
      circle.className = "circle2"
    });
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
      first.innerHTML = "Who am i ?"
      second.innerHTML = "What i love ?"
      frst.innerHTML = "Web designer";
      scnd.innerHTML = "Based in Algeria";
      thrd.innerHTML = "Called Riyadh";
      ffth.innerHTML = "learn new technologies and tools";
      sxth.innerHTML = "create new things";
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
  logoText.style.bottom = "22px";
  cursor.className += " hover";
})

logoContainer.addEventListener("mouseout", ()=> {
  logoText.style.bottom = "-5px";
  cursor.className = "cursor";
})


// second content circles hovering effect

/* for desktop */
  circles.forEach((circle, index) => {
    
    circle.addEventListener("mousemove", ()=> {
      circle2[index].style.bottom = "380px";
      circle2[index].style.left = "-190px";

      cursor.className += " hover"
    })

    circle.addEventListener("mouseout", ()=> {
      circle2[index].style.bottom = "0px";
      circle2[index].style.left = "180px";

      cursor.className = "cursor"
    })

  });
  
/* social media hovering effect */
somed.forEach(item => {
  item.addEventListener("mousemove", ()=> {
    item.className = "hovered"
    cursor.className += " hover2"
  })

  item.addEventListener("mouseout", ()=> {
    item.className = "somed"
    cursor.className = " cursor"
  })
});

// cursor moving effect
let moveMouse = (e) => {
  let x = e.clientX;
  let y = e.clientY;

  cursor.style.left = x+"px"
  cursor.style.top = y+"px"
  
}
window.addEventListener("mousemove", moveMouse)


