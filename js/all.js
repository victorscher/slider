let btnFoward = document.querySelector(".foward");
let btnPrev = document.querySelector(".prev");

let item1 = document.querySelector(".item-1");
let item2 = document.querySelector(".item-2");
let item3 = document.querySelector(".item-3");
let item4 = document.querySelector(".item-4");

let curPos = 1;

function slideRight(){
  if(curPos == 1){
    item1.style.transform = "translate(-100%)";
    item2.style.transform = "translate(-100%)";
    
    setTimeout(() => {
      item2.style.transition = "all 0s";
      item2.style.transform = "translate(0)";
      item2.style.left = "0";
      setTimeout(() => {
        item2.style.transition = "transform 0.3s ease-in-out";
      }, 100)

      item1.style.left = "-100%";
      item1.style.transform = "translate(0)"; 

      item3.style.left = "100%"
      item3.style.transform = "translate(0)"; 

      item4.style.left = "100%"
      item4.style.transform = "translate(0)"; 
    }, 300);

    curPos = 2;
  }else if(curPos == 2){
    item2.style.transform = "translate(-100%)";
    item3.style.transform = "translate(-100%)";
    
    setTimeout(() => {
      item3.style.transition = "all 0s";
      item3.style.transform = "translate(0)";
      item3.style.left = "0";
      setTimeout(() => {
        item3.style.transition = "transform 0.3s ease-in-out";
      }, 100)

      item1.style.left = "-100%";
      item1.style.transform = "translate(0)"; 

      item2.style.left = "-100%";
      item2.style.transform = "translate(0)"; 

      item4.style.left = "100%"
      item4.style.transform = "translate(0)"; 
    }, 300);

    curPos = 3;
  }else if(curPos == 3){
    item3.style.transform = "translate(-100%)";
    item4.style.transform = "translate(-100%)";
    
    setTimeout(() => {
      item4.style.transition = "all 0s";
      item4.style.transform = "translate(0)";
      item4.style.left = "0";
      setTimeout(() => {
        item4.style.transition = "transform 0.3s ease-in-out";
      }, 100) 

      item2.style.left = "-100%";
      item2.style.transform = "translate(0)"; 

      item3.style.left = "-100%";
      item3.style.transform = "translate(0)"; 

      item1.style.left = "100%"
      item1.style.transform = "translate(0)"; 
    }, 300);

    curPos = 4;
  }else if(curPos == 4){
    item4.style.transform = "translate(-100%)"
    item1.style.transform = "translate(-100%)"

    setTimeout(() => {
      item1.style.transition = "all 0s";
      item1.style.transform = "translate(0)";
      item1.style.left = "0";
      setTimeout(() => {
        item1.style.transition = "transform 0.3s ease-in-out";
      }, 100) 
  
      item2.style.left = "100%";
      item2.style.transform = "translate(0)"; 
  
      item3.style.left = "100%";
      item3.style.transform = "translate(0)"; 
  
      item4.style.left = "-100%"
      item4.style.transform = "translate(0)"; 
    }, 300);
  
    curPos = 1;
  }
}

function slideLeft(){
  
  if(curPos == 1){
    item1.style.transform = "translate(100%)";
    item4.style.transform = "translate(100%)";
    
    setTimeout(() => {
      item4.style.transition = "all 0s";
      item4.style.transform = "translate(0)";
      item4.style.left = "0";
      setTimeout(() => {
        item4.style.transition = "transform 0.3s ease-in-out";
      }, 100)

      item1.style.left = "100%"
      item1.style.transform = "translate(0)";
      
      item3.style.left = "-100%";
      item3.style.transform = "translate(0)"; 

      item2.style.left = "100%";
      item2.style.transform = "translate(0)"; 
    }, 300);

    curPos = 4;
  }else if(curPos == 4){
    item4.style.transform = "translate(100%)";
    item3.style.transform = "translate(100%)";
    
    setTimeout(() => {
      item3.style.transition = "all 0s";
      item3.style.transform = "translate(0)";
      item3.style.left = "0";
      setTimeout(() => {
        item3.style.transition = "transform 0.3s ease-in-out";
      }, 100)

      item1.style.left = "100%"
      item1.style.transform = "translate(0)";  

      item2.style.left = "-100%";
      item2.style.transform = "translate(0)"; 

      item4.style.left = "100%";
      item4.style.transform = "translate(0)"; 
    }, 300);

    curPos = 3;
  }else if(curPos == 3){
    item3.style.transform = "translate(100%)";
    item2.style.transform = "translate(100%)";
    
    setTimeout(() => {
      item2.style.transition = "all 0s";
      item2.style.transform = "translate(0)";
      item2.style.left = "0";
      setTimeout(() => {
        item2.style.transition = "transform 0.3s ease-in-out";
      }, 100)

      item1.style.left = "-100%"
      item1.style.transform = "translate(0)";  

      item3.style.left = "100%";
      item3.style.transform = "translate(0)"; 

      item4.style.left = "100%";
      item4.style.transform = "translate(0)"; 
    }, 300);

    curPos = 2;
  }else if(curPos == 2){
    item2.style.transform = "translate(100%)";
    item1.style.transform = "translate(100%)";
    
    setTimeout(() => {
      item1.style.transition = "all 0s";
      item1.style.transform = "translate(0)";
      item1.style.left = "0";
      setTimeout(() => {
        item1.style.transition = "transform 0.3s ease-in-out";
      }, 100)

      item2.style.left = "100%"
      item2.style.transform = "translate(0)";  

      item3.style.left = "100%";
      item3.style.transform = "translate(0)"; 

      item4.style.left = "-100%";
      item4.style.transform = "translate(0)"; 
    }, 300);

    curPos = 1;
  }
}

btnFoward.onclick = slideRight;
btnPrev.onclick = slideLeft;

function swipedetect(el, callback){
  
  var touchsurface = el,
  swipedir,
  startX,
  startY,
  distX,
  distY,
  threshold = 150, //required min distance traveled to be considered swipe
  restraint = 100, // maximum distance allowed at the same time in perpendicular direction
  allowedTime = 300, // maximum time allowed to travel that distance
  elapsedTime,
  startTime,
  handleswipe = callback || function(swipedir){}

  touchsurface.addEventListener('touchstart', function(e){
      var touchobj = e.changedTouches[0]
      swipedir = 'none'
      dist = 0
      startX = touchobj.pageX
      startY = touchobj.pageY
      startTime = new Date().getTime() // record time when finger first makes contact with surface
      e.preventDefault()
  }, false)

  touchsurface.addEventListener('touchmove', function(e){
      e.preventDefault() // prevent scrolling when inside DIV
  }, false)

  touchsurface.addEventListener('touchend', function(e){
      var touchobj = e.changedTouches[0]
      distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
      distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
      elapsedTime = new Date().getTime() - startTime // get time elapsed
      if (elapsedTime <= allowedTime){ // first condition for awipe met
          if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
              swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
          }
          else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
              swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
          }
      }
      handleswipe(swipedir)
      e.preventDefault()
  }, false)
}

let sliderContainer = document.querySelector(".slider-container");

swipedetect(sliderContainer, function(swipedir){
    if (swipedir == 'left'){
      slideRight();
    }else if( swipedir == 'right'){
      slideLeft();
    }
        
})