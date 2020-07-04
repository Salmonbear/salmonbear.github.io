let myImage = document.querySelector('img');

/* check whether, on click, the image is the original image and if so, change the image.
if not, change th eeeeeeeeeeeeeeeeee */

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/valencia.jpg') {
      myImage.setAttribute ('src','images/valencia-graffiti.jpg');
    } else {
      myImage.setAttribute ('src','images/valencia.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

/*set the personalised greeting*/
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Jamaica is amazing, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
/*employ the set username function*/
  myButton.onclick = function() {
    setUserName();
  }