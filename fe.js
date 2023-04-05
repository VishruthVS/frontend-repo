/*
document.querySelector("html").addEventListener("click",function(){
    alert("Stop! You are poking..");
});
*/
/*
const myButton=document.querySelector("html");
myButton.addEventListener("click",function(){
    alert("Stop,You are poking me!");
})
*/
const myImage=document.querySelector("img");

myImage.onclick=()=>{
    const mySrc=myImage.getAttribute("src");
    if(mySrc=="https://download.logo.wine/logo/Firefox/Firefox-Logo.wine.png")
        myImage.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg")
    else
        myImage.setAttribute("src","https://download.logo.wine/logo/Firefox/Firefox-Logo.wine.png")
};
let myButton=document.querySelector("button");
let myHeading=document.querySelector("h1");

function setUserName(){
    const myName=prompt("Enter your name ");
    localStorage.setItem("name",myName);
    myHeading.textContent=`Mozilla Firefox, ${myName}`;
}
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla Firefox, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };
  
