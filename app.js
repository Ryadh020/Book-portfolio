  // Elemnts:
  // fullscreen :
const introPage = document.querySelector(".intro");
const fullscreenButton = document.querySelector(".fullscreenButton");
const fullscreenOut = document.querySelector(".fullscreenOut");
  //pages:
const Book = document.querySelector(".Book");
const floatingPage = document.querySelector(".floatingPage");
  // Butttons
const buttons = document.querySelectorAll(".Button");
const menuButtons = document.querySelectorAll(".menuButton");
  // Pages Number (counter):
const pagesNumber = document.querySelector(".pagesNumber");
const actualPage = document.querySelector(".actual");
  // Content:
const scontent = document.querySelector(".content");
const CirclesContainer = document.querySelector(".content2");

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

// cursor:
const cursor = document.querySelector("#cursor") 

// docial media:
const socialMedia = document.querySelector(".socialMedia");
const somed = document.querySelectorAll(".somed");
const facebook = document.querySelector(".facebook");
const instagram = document.querySelector(".instagram");
const linkedIn = document.querySelector(".linkedIn");
const gitHub = document.querySelector(".gitHub");

// background videos:
const videosContainer = document.querySelectorAll(".videoBackGround") 

const videoBackGround1 = document.querySelector(".videoBackGround1") 
const videoBackGround2 = document.querySelector(".videoBackGround2") 
const videoBackGround3 = document.querySelector(".videoBackGround3") 
const videoBackGround4 = document.querySelector(".videoBackGround4") 
const videoBackGround5 = document.querySelector(".videoBackGround5") 
const videoBackGround6 = document.querySelector(".videoBackGround6") 
const videoBackGround7 = document.querySelector(".videoBackGround7") 
const videoBackGround8 = document.querySelector(".videoBackGround8") 
const videoBackGround9 = document.querySelector(".videoBackGround9") 

// Alert:
const alert = document.querySelector(".alert") 
const text = document.querySelector(".alertText") 

  // detect if the + butto is clicked or no:
let Showen = false;
  // detect the page pivoting:
let pivot = false;

// fill the page content:
(()=> {
  // intro content:
  competences.forEach((circle, index)=> {
  CirclesContainer.innerHTML += `
    <div class="circles">
      <div class="circle1">
        <img class="image" src="${competences[index].pic}" alt="8" srcset="">
      </div>
      <div class="circle2"></div>
    </div>
  `
  })

  // works content:
  work.forEach((circle, index)=> {
    CirclesContainer.innerHTML += `
      <div class="circles2">
        <div class="circle1 circl column">
          <img class="image" src="${work[index].pic}" alt="8" srcset="">
          <div class="buttonLive row" style="display:none;">
            <a href="http://www.instagram.com" target="_blank" style="font-family: 'Poiret One', cursive;">live preview</a>
            <img style="width:10px;height:10px;" alt="8" src="Images/Utilities/link.png">
          </div>
        </div>
      </div>`
  })

  CirclesContainer.innerHTML += `
    <div class="borderBottom"></div>
  `

  circles = document.querySelectorAll(".circles");
  circles2 = document.querySelectorAll(".circles2");
  circle1 = document.querySelectorAll(".circl");
  circle2 = document.querySelectorAll(".circle2");
  buttonLive = document.querySelectorAll(".buttonLive");
  borderBottom = document.querySelector(".borderBottom");
})()

// get fullscreen:
function goFullScreen() {
  // hide intro page
  introPage.style.display = "none"
  // show a new fulscreen on/off buttons:
  fullscreenOut.style.display = "block"
}

fullscreenButton.addEventListener("click", goFullScreen)

  // blur the button when cliking the button:
buttons.forEach(button => {
  button.addEventListener("click", ()=> {
    menuButtons.forEach(menuButton => {
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
    });
  }) 
});


  // make the magnet effect to the page:
buttons.forEach(button => {
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
});


  // turn the page when cliking the button:
  buttons.forEach(button => {
    button.addEventListener("click", ()=> {  
      if (!pivot) {  // the first page
          // hide the text content:
        for (var i = 0; i < stitle.length; i++) {
          stitle[i].style.top = "108px";
        }
        for (var i = 0; i < frstline.length; i++) {
          frstline[i].style.top = "60px";
        }
        circles.forEach(circle => {
          circle.style.display = "none";
        })
          // make page turning effect
        floatingPage.style.borderTopLeftRadius = "100%";
          // change text color
        menuButtons.forEach(menuButton => {
          menuButton.style.color = "white";
        });
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
          first.innerHTML = "What I Do ?";
          frst.innerHTML = "create and edit";
          scnd.innerHTML = "Improve web ";
          thrd.innerHTML = "Build custom  ";
        }, 600);
        setTimeout(() => {
          // Show the text content:
        if(screen.width <= 600) {
          for (var i = 0; i < stitle.length; i++) {
            stitle[i].style.color = "white";    // change the color
            stitle[i].style.top = "-30px";  // show text
          }
          for (var i = 0; i < frstline.length; i++) {
            frstline[i].style.color = "white";   // change the color
            frstline[i].style.top = "-25px";  // show text
          }
        }else {
          for (var i = 0; i < stitle.length; i++) {
            stitle[i].style.color = "white";    // change the color
            stitle[i].style.top = "0px";  // show text
          }
          for (var i = 0; i < frstline.length; i++) {
            frstline[i].style.color = "white";   // change the color
            frstline[i].style.top = "5px";  // show text
          }
        }
        circles2.forEach(circle => {
          circle.style.display = "block";
        })
        borderBottom.style.visibility = "visible";
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
      circles2.forEach(circle => {
        circle.style.display = "none";
      })
      borderBottom.style.visibility = "hidden";
        // pull the page to the top:
      floatingPage.style.top = `0px`;
      menuButtons.forEach(menuButton => {
        menuButton.style.color = "black";
      });
      socialMedia.style.color = "black"; 
      logoText.style.color = "black";
        // change circles colors:
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
        first.innerHTML = "lorem ipsum"
        frst.innerHTML = "blabla lorem ipsum";
        scnd.innerHTML = "lorem ipsum";
        thrd.innerHTML = "blabla blabla";
      }, 1000);
      setTimeout(() => {
        // Show the text content:
      if(screen.width <= 600) {
        for (var i = 0; i < stitle.length; i++) {
          stitle[i].style.color = "black";    // change the color
          stitle[i].style.top = "-30px";  // show text
        }
        for (var i = 0; i < frstline.length; i++) {
          frstline[i].style.color = "black";   // change the color
          frstline[i].style.top = "-25px";  // show text
        }
        }else {
          for (var i = 0; i < stitle.length; i++) {
          stitle[i].style.color = "black";    // change the color
          stitle[i].style.top = "0px";  // show text
        }
        for (var i = 0; i < frstline.length; i++) {
          frstline[i].style.color = "black";   // change the color
          frstline[i].style.top = "5px";  // show text
        }
      }
      circles.forEach(circle => {
        circle.style.display = "block";
      })
    }, 1000);
        pivot = false;
      }
    })  
  });

  
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
    
    circle.addEventListener("mouseover", ()=> {

        circle2[index].style.bottom = "380px";
        circle2[index].style.left = "-190px";
  
          // change text content
        switch (index) {
          case 0:
            text.textContent = competences[index].disc
            break;
          case 1:
            text.textContent = competences[index].disc
            break;
          case 2:
            text.textContent = competences[index].disc
            break;
          case 3:
            text.textContent = competences[index].disc
            break;
        
          default:
            break;
        }
  
          // show the alert 
        if(screen.width <= 600) {
          alert.style.opacity = "1";
          alert.style.top = "50%"
          setTimeout(() => {
            alert.style.top = "70%"
            alert.style.opacity = "0";
          }, 2000);
        }else {
          alert.style.top = "0px"
        }
  
        cursor.className += " hover"

    })

    circle.addEventListener("mouseout", ()=> {

        circle2[index].style.bottom = "0px";
        circle2[index].style.left = "180px";
          // hide the alert 
          alert.style.top = "-15%"
  
        cursor.className = "cursor"
    })
  });


  /* sencond page hover effect */
  
circles2.forEach((circle, index) => {

  circle.addEventListener("mousemove", ()=> {
    
      //change video & show buttons:
      setTimeout(() => {
        switch (index) {
          case 0:
            circle1[0].style.backgroundColor = "rgba(70, 70, 70, 0.692)";
            buttonLive[0].style.display = "flex";
            videoBackGround1.style.visibility = "visible";
            break;
          case 1:
            circle1[1].style.backgroundColor = "rgba(70, 70, 70, 0.692)";
            buttonLive[1].style.display = "flex";
            videoBackGround2.style.visibility = "visible";
            break;
          case 2:
            circle1[2].style.backgroundColor = "rgba(70, 70, 70, 0.692)";
            buttonLive[2].style.display = "flex";
            videoBackGround3.style.visibility = "visible";
            break;
          case 3:
            circle1[3].style.backgroundColor = "rgba(70, 70, 70, 0.692)";
            buttonLive[3].style.display = "flex";
            videoBackGround4.style.visibility = "visible";
            break; 
          case 4:
            circle1[4].style.backgroundColor = "rgba(70, 70, 70, 0.692)";
            buttonLive[4].style.display = "flex";
            videoBackGround5.style.visibility = "visible";
            break;
          case 5:
            circle1[5].style.backgroundColor = "rgba(70, 70, 70, 0.692)";
            buttonLive[5].style.display = "flex";
            videoBackGround6.style.visibility = "visible";
            break;
          case 6:
            circle1[6].style.backgroundColor = "rgba(70, 70, 70, 0.692)";
            buttonLive[6].style.display = "flex";
            videoBackGround7.style.visibility = "visible";
            break;
          case 7:
            circle1[7].style.backgroundColor = "rgba(70, 70, 70, 0.692)";
            buttonLive[7].style.display = "flex";
            videoBackGround8.style.visibility = "visible";
            break;
          case 8:
            circle1[8].style.backgroundColor = "rgba(70, 70, 70, 0.692)";
            buttonLive[8].style.display = "flex";
            videoBackGround9.style.visibility = "visible";
            break;
          default:
            break;
        }
      }, 10);
  })

  circle.addEventListener("mouseout", (event)=> {
      // hide buttons: 
        circle1.forEach(circle => {
          circle.style.backgroundColor = "transparent";
        });
          // hide video
        videoBackGround1.style.visibility = "hidden";
        videoBackGround2.style.visibility = "hidden";
        videoBackGround3.style.visibility = "hidden";
        videoBackGround4.style.visibility = "hidden";
        videoBackGround5.style.visibility = "hidden";
        videoBackGround6.style.visibility = "hidden";
        videoBackGround7.style.visibility = "hidden";
        videoBackGround8.style.visibility = "hidden";
        videoBackGround9.style.visibility = "hidden";

  }, false)
});


/* social media hovering effect */
somed.forEach(item => {
  if(screen.width >= 600) {
    item.addEventListener("mousemove", ()=> {
      item.className = "hovered"
      cursor.className += " hover2"
    })
  
    item.addEventListener("mouseout", ()=> {
      item.className = "somed"
      cursor.className = " cursor"
    })
  }else {
    return;
  }
});

// cursor moving effect
let moveMouse = (e) => {
  let x = e.clientX;
  let y = e.clientY;

  cursor.style.left = x+"px"
  cursor.style.top = y+"px"
  
}
window.addEventListener("mousemove", moveMouse)